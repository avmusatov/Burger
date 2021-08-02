import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';
import PropTypes from 'prop-types';

export default class MenuAdmin extends React.Component {
    static propTypes = {
        burgers: PropTypes.object,
        updateBurger: PropTypes.func,
        deleteBurger: PropTypes.func,
        loadSampleBurgers: PropTypes.func
    }

    render() {
        return (
            <div className="menu-admin">
                <h2>Управление меню!</h2>
                {Object.keys(this.props.burgers).map((key) => {
                    return <EditBurgerForm
                        key={key}
                        index={key}
                        burger={this.props.burgers[key]}
                        updateBurger={this.props.updateBurger}
                        deleteBurger={this.props.deleteBurger}
                    />
                })}
                <AddBurgerForm addBurger={this.props.addBurger} />
                <button onClick={this.props.loadSampleBurgers}>Загрузить бургеры</button>
            </div>
        );
    }
}