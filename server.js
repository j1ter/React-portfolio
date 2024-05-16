const express = require('express');
const multer = require('multer');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Настройка Multer для загрузки изображений
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, `${Date.now()}-${file.originalname.replace(/ /g, "_")}`);
    }
  });
  
const upload = multer({ storage: storage });

// Создание пула подключений
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'portfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Роут для добавления работы
// Роут для добавления работы
app.post('/api/portfolio', upload.single('image'), async (req, res) => {
  const { title, link } = req.body;
  if (!title || !link) {
    return res.status(400).json({ error: 'Title and link are required.' });
  }

  let image = req.file ? req.file.path.replace(/\\/g, '/') : 'default.jpg';

  const sql = "INSERT INTO portfolio (title, imageUrl, link) VALUES (?, ?, ?)";
  try {
    const [result] = await db.query(sql, [title, image, link]);
    res.json({ message: 'Work added to the portfolio', id: result.insertId, title, imageUrl: image, link });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add work to the portfolio', details: err.message });
  }
});


// Роут для получения всех работ
app.get('/api/portfolio', async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM portfolio");
      const transformedRows = rows.map(row => ({
        ...row,
        imageUrl: row.imageUrl.replace(/\\/g, '/') // Заменяет все обратные слэши на обычные
      }));
      res.send(transformedRows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Failed to retrieve works');
    }
  });
  

// Роут для удаления работы
app.delete('/api/portfolio/:id', async (req, res) => {
  const sql = "DELETE FROM portfolio WHERE id = ?";
  try {
    const [result] = await db.query(sql, [req.params.id]);
    res.send('Work deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete work');
  }
});

app.put('/api/portfolio/:id', upload.single('image'), async (req, res) => {
  const { title, link } = req.body;
  const id = req.params.id;
  let sql;
  const data = [title, link, id];

  if (req.file) {
    const image = req.file.path;
    sql = "UPDATE portfolio SET title = ?, imageUrl = ?, link = ? WHERE id = ?";
    data.splice(1, 0, image); // Вставляем imageUrl на вторую позицию
  } else {
    sql = "UPDATE portfolio SET title = ?, link = ? WHERE id = ?";
  }

  try {
    const [result] = await db.query(sql, data);
    if (result.affectedRows) {
      res.send({ message: 'Work updated successfully', id: id });
    } else {
      res.status(404).send({ error: 'Work not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Failed to update work' });
  }
});


app.use('/uploads', express.static('uploads'));




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
