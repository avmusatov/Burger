import React, { useState } from 'react';
import restaurants from '../sample-restaurants';
import PropTypes from 'prop-types';

export default function Landing({ history }) {
    const [display, toggleDisplay] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    function displayList() {
        toggleDisplay(!display);
    };

    function getTitle(restaurant) {
        const { title, url } = restaurant;
        toggleDisplay(false);
        setTitle(title);
        setUrl(url);
    };

    function goToRestaurant() {
        history.push(`/restaurant/${url}`);
    };

    return (
        <div className="restaurant_select">

            <div className="restaurant_select_top">
                <div onClick={displayList} className="restaurant_select_top-header font-effect-outline">
                    {title ? title : 'Выбери ресторан'}
                </div>
                <div className="arrow_picker-up"></div>
                <div className="arrow_picker-down"></div>
            </div>

            {display ? <div className="restaurant_select_bottom">
                <ul>
                    {restaurants.map(restaurant => {
                        return <li onClick={() => getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>;
                    })}
                </ul>
            </div> : null}

            {title && !display ? <button onClick={goToRestaurant}>Перейти в ресторан</button> : null}
        </div>
    );
};

Landing.propTypes = {
    history: PropTypes.object,
};