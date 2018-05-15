import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import firebase from 'firebase';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

class ProdutoForm extends Component {

    state = { nome: '', descricao: '', preco: '' };

    salvar() {
        const produto = {
            nome: this.state.nome,
            descricao: this.state.descricao,
            preco: this.state.preco
        };
        // mandamos o firebase armazenar no ref "comments", nosso comentário atual
        firebase
            .database()
            .ref("produtos")
            .push(produto);
        // após o comentário ser adicionado, vamos limpar o formulário
        this.setState({
            nome: '', descricao: '', preco: ''
        });
    }

    render() {
        const { inputStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="Nome"
                        style={inputStyle}
                        value={this.state.nome}
                        onChangeText={nome => this.setState({ nome })} />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Descrição"
                        style={inputStyle}
                        value={this.state.descricao}
                        onChangeText={descricao => this.setState({ descricao })} />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Preço"
                        style={inputStyle}
                        value={this.state.preco}
                        onChangeText={preco => this.setState({ preco })} />
                </CardSection>
                <CardSection>
                    <Button onPress={this.salvar.bind(this)}>Salvar</Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1,
        spellCheck: false
    }
};

export default ProdutoForm;
