import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, KeyboardAvoidingView, Image, Animated } from 'react-native';

import PasswordTextInput from './src/components/PasswordTextInput';

export default function App() {
  
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));

  useEffect(()=>{
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
    }).start()
  },[]);

  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor='#111'/>
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('./src/assets/logo.png')}/>
      </View>

      <Animated.View style={[styles.container,
      {
        transform: [
          {translateY: offset.y}
        ]
      }]}>
        
        <PasswordTextInput/>
        
      </Animated.View>
    </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  containerLogo: {
    flex:1,
    justifyContent: 'center',
    scaleY: 0.3,
    scaleX: 0.3,
  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
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
});


