import React from 'react';
import Login from './Login';
import firebase from 'firebase/app';
import { firebaseApp } from '../../base';

class SignIn extends React.Component {
    state = {
        user: ''
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.authHandler({user});
        });
    }

    authenticate = () => {
        const authProvider = new firebase.auth.GithubAuthProvider();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    }

    authHandler = async (authData) => {
        const { email } = authData.user;
        this.setState({ user: email });
    }

    render() {
        return this.state.user ? this.props.children : <Login authenticate={this.authenticate} />;
    }
}

export default SignIn;