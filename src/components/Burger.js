import React from 'react';
import PropTypes from 'prop-types';

export default class Burger extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";
        const key = this.props.index;

        return (
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt={name} />
                </div>
                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className="price">{price} ₽</span>
                    </h3>
                    <p>{desc}</p>
                    <button
                        className="button-order"
                        disabled={!isAvailable}
                        onClick={() => this.props.addToOrder(key)}
                    >
                        {isAvailable ? "Заказать" : "Временно нет"}
                    </button>
                </div>
            </li>
        );
    }
}

Burger.propTypes = {
    details: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        desc: PropTypes.string,
        status: PropTypes.string
    }),
    index: PropTypes.string,
    addToOrder: PropTypes.func
}