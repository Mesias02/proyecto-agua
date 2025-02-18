import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
 
      <Image source={require('../assets/images/logo.jpeg')} style={styles.logo} />

      <Text style={styles.title}>CALIDAD DE AGUA LAGUNA DE GUABIZHUN - DELEG - CAÑAR - ECUADOR</Text>

      <Image source={require('../assets/images/images7.jpg')} style={styles.image7} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#004a6f',
    padding: 15,
    width: '100%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  image7: {
    width: 80,  
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', 
    flex: 1, 
    marginHorizontal: 10, 
  },
});
