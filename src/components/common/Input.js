import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({label, onChangeText, value, placeholder, keyboardType, autoCapitalize, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        autoCorrect={false}
        value={value}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  textInput: {
    paddingRight: 5,
    color: '#000',
    paddingLeft: 5,
    fontSize: 18,
    height: 20,
    width: 100,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export { Input };