import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface Screen1Props {
  onNext: () => void;
}

const Screen1: React.FC<Screen1Props> = ({ onNext }) => {
  const [selectedData, setSelectedData] = useState<string | null>(null);

  return (
    <Section title="BIENVENIDOS" style={styles.section}>
      <View style={styles.imageRow}>
        <Image 
          source={require('../assets/images/images10.png')} 
          style={styles.image} 
          resizeMode="contain"  
        />
        <Image 
          source={require('../assets/images/images9.jpg')} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Dispositivo.1</Text>
        <Button text="DATOS" onPress={() => setSelectedData("Longitud: 10.123, Latitud: -75.456")} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Dispositivo.2</Text>
        <Button text="DATOS" onPress={() => setSelectedData("Longitud: 20.789, Latitud: -60.321")} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Dispositivo.3</Text>
        <Button text="DATOS" onPress={() => setSelectedData("Longitud: 30.456, Latitud: -55.987")} />
      </View>

      {selectedData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>{selectedData}</Text>
        </View>
      )}

      <Button text="SIGUIENTE" onPress={onNext} style={styles.nextButton} />
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    marginBottom: 30,  
  },
  image: {
    width: '48%',  
    height: 200,  
    maxWidth: 500, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,  
    fontFamily: 'Arial',  
    fontWeight: '600',  
    color: '#004a6f',  
    letterSpacing: 0.5, 
  },
  dataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
  },
  dataText: {
    fontSize: 18,
    color: '#00796b',
    fontWeight: 'bold',
  },
  nextButton: {
    width: '100%',
    height: 50,
    fontSize: 18,
  },
});

export default Screen1;