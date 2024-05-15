import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPortfolioItems } from '../redux/actions/portfolioActions';

const Portfolio = () => {
    const dispatch = useDispatch();
    const portfolioItems = useSelector(state => state.portfolio.portfolioItems);

    useEffect(() => {
        dispatch(fetchPortfolioItems());
    }, [dispatch]);

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="title title_fz16 portfolio__title title_black">Портфолио</h2>
                <div className="title title_fz36 portfolio__subtitle title_black">Мои работы</div>
                <div className="divider"></div>
                <div className="portfolio__wrapper">
                    {portfolioItems.map(item => (
                        <div key={item.id} className="portfolio__item">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <img src={`http://localhost:5000/uploads/${item.imageUrl.split('/').pop()}`} alt={item.title} />

                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
