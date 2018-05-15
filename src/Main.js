import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/Header';
import LoginForm from './LoginForm';
import Button from './components/Button';
import CardSection from './components/CardSection';
import Card from './components/Card';
import Spinner from './components/Spinner';
import ProdutoForm from './ProdutoForm';

class Main extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    //credenciais do firebase
    firebase.initializeApp({
      apiKey: 'chave',
      authDomain: 'autenticação',
      databaseURL: 'URL database',
      projectId: 'Id do projeto',
      storageBucket: 'URL do storage',
      messagingSenderId: 'Id'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <ProdutoForm />
            <CardSection>
              <Button onPress={this.clickLogout.bind(this)}> LOGOUT </Button>
            </CardSection>
          </Card>
        );
      case false:
        return (
          <LoginForm />
        );
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Login Screen" />
        {this.renderContent()}
      </View>


    );
  }
}

export default Main;
