import React,  { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as firebase from 'firebase';
import { initializeFirebase, subscribeToTrack, listenFirebaseChanges } from '../../utils/firebaseService';
import { StackNavigator } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

class RegisterScreen extends React.Component {

  constructor(props){
    super(props)
    
    this.state = ({
      email:'',
      password:''
    })
  }
  
  signUpUser = (email,password) =>{
    try {
      if (this.state.password.length<6) {
        alert('please enter 6 characters')
        return; 
      }
      
      firebase.auth().createUserWithEmailAndPassword(email,password)
      alert('je bent ingeschreven')

    } catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      
      <Container style={styles.container}>
      <View>
      <Image
          style={styles.logo}
          source={require('../images/logo-parkemon.png')}
      />
      </View>
        <Form>
          <Item floatingLabel style={styles.field}>
            <Label>E-mail</Label>
            <Input 
              autoCorrect = {false}
              autoCapitalize="none"
              onChangeText={(email)=> this.setState({email})}
            />
          </Item>
          <Item floatingLabel style={styles.field}>
            <Label>Password</Label>
            <Input 
              secureTextEntry={true}
              autoCorrect = {false}
              autoCapitalize="none"
              onChangeText={(password)=> this.setState({password})}
            />
          </Item>
          <Button style={styles.button}
            full
            rounded
            primary
            onPress={()=> this.signUpUser(this.state.email,this.state.password)}
          >
          <Text style={styles.buttonText}>Sign up</Text>
          </Button>
        </Form>

      </Container>


  );
  }
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  button: {

    backgroundColor: '#58BFA5',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,

  },

  buttonText: {

    color: '#FFF',


  },

  field: {

    margin: 30,


  },

  logo: {

    width: 200,
    height: 200,
    marginLeft: "25%",


  },
});

