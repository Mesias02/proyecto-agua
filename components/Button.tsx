import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string; 
  onPress: () => void; // Cambiado de onClick a onPress
  style?: object; 
}

export const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress} // Cambiado de onClick a onPress
      style={[styles.button, style]} 
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007acc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});