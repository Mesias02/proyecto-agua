import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string; 
  onClick: () => void;
  style?: object; 
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <TouchableOpacity
      onPress={onClick} 
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