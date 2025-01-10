import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import {darkGreen, green} from './ContstantColor';

export default function Background({children}) {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../Images/nature104.jpg')}
        style={styles.image}
      />
      <View style={styles.absolute}>{children}</View>

      <View style={styles.infomationContainer}>
        <Text style={styles.textinfo}>Subham Patel | 7266896432</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  absolute: {
    position: 'absolute',
  },

  infomationContainer: {
    width: '90%',
    position: 'absolute',
    bottom: 5,
    alignItems: 'center',
    backgroundColor: darkGreen,
    padding: 3,
    borderRadius: 20,
  },

  textinfo: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
