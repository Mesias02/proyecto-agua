import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  style?: object; 
}

export const Section: React.FC<SectionProps> = ({ title, children, style }) => {
  return (
    <View style={[styles.section, style]}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#06b1d7',
    borderRadius: 8,
    backgroundColor: '#0adcdf',
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionContent: {
    // Aquí puedes agregar estilos adicionales para los contenidos dentro de la sección si es necesario.
  },
});
