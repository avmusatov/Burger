import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

export default class MenuAdmin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photo: '',
            user: ''
        }

        this.authHandler = this.authHandler.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.authHandler({ user });
        });
    }

    async authHandler(authData) {
        const { email, photoURL } = authData.user;
        this.setState({ user: email, photo: photoURL });
    }

    render() {
        const { user, photo } = this.state;
        const avatar = photo ? photo : "/images/avatar.png";
        return (
            <div className="menu-admin">
                {user ? <div className="login-header">
                    <div className="avatar">
                        <img src={avatar} alt={user} />
                    </div>
                    <button
                        className="button-logout"
                        onClick={this.props.handleLogout}
                    >
                        Выйти
                    </button>
                </div> : null}
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

MenuAdmin.propTypes = {
    burgers: PropTypes.object,
    updateBurger: PropTypes.func,
    deleteBurger: PropTypes.func,
    loadSampleBurgers: PropTypes.func,
    handleLogout: PropTypes.func
}