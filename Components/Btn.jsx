import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Btn = ({bgColor, textColor, btnLabel, press}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[styles.button, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: 'center',
    width: '330',
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Btn;
