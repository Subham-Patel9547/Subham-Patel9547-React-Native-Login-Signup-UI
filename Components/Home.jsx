import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './ContstantColor';

const Home = props => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Let's Start</Text>
        <Text style={[styles.title, styles.subtitle]}>Coding...</Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Login"
          press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 200,
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: -20,
    marginBottom: 40,
  },
});

export default Home;
