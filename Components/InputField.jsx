import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {darkGreen, green} from './ContstantColor';

const InputField = prpos => {
  return (
    <TextInput
      {...prpos}
      style={styles.input}
      placeholderTextColor={darkGreen}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: darkGreen,
    fontWeight: '500',
    fontSize: 18,
    backgroundColor: 'rgb(201, 201, 201)',
  },
});

export default InputField;
