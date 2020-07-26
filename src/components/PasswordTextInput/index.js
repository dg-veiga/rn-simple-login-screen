import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,} from 'react-native';
import { Icon } from 'native-base';

export default class PasswordTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'eye-off',
      email: '',
      password: '',
    };
  }

  _changeIcon(){
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
    }));
  };  
  
  render() {    
    return (
      <>
      <TextInput
      style={styles.input} 
      placeholder="Email"
      autoCorrect={false}
      onChangeText={(c)=>{this.state.email = c}}
      />
      <View style={styles.pwContainer}>
        <TextInput
        style={styles.pwInput} 
        placeholder="Password"
        autoCorrect={false}
        onChangeText={(c)=>{this.state.password = c}}
        secureTextEntry={this.state.icon === 'eye-off'}/>

        <Icon name={this.state.icon} style={styles.iconHide} onPress={()=>this._changeIcon()}/>
      </View>

      <TouchableOpacity style={styles.btnLogIn} 
      onPress={()=>{
        // Change these functions as desired...
        console.log(this.state.email);
        console.log(this.state.password);
      }}>
        <Text style={styles.btnTextLogIn}>Access</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCreateAcc} onPress={()=>{console.log('create account')}}>
        <Text style={styles.btnTextCreateAcc}>Create free account</Text>
      </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f5f5ce',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#333',
    padding: 10,
  },
  iconHide:{
    flex:1,
    color: '#e84624',
    marginBottom:15,
    marginLeft: 10,
  },
  pwContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pwInput: {
    flex: 5,
    backgroundColor: '#f5f5ce',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#333',
    padding: 10,
  },
  btnLogIn: {
    width:'50%',
    marginBottom: 15,
    backgroundColor: '#e84624',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  btnTextLogIn: {
    color: '#222',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20,
  },
  btnCreateAcc: {
    width:'60%',
    marginBottom: 15,
    padding: 5,
    alignItems: 'center',
  },
  btnTextCreateAcc: {
    color: '#f5f5ce',
    textAlign: 'center',
    textDecorationLine: 'underline', 
    fontSize:15,
  }
});