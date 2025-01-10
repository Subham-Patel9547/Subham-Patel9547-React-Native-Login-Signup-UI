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

 
});
