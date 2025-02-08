import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface Screen2Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen2: React.FC<Screen2Props> = ({ onNext, onReturn }) => {
  const [showEstadoAgua, setShowEstadoAgua] = useState(false);
  const [showPotable, setShowPotable] = useState(false);
  const [showNoPotable, setShowNoPotable] = useState(false);

  const toggleEstadoAgua = () => setShowEstadoAgua((prev) => !prev);
  const togglePotable = () => setShowPotable((prev) => !prev);
  const toggleNoPotable = () => setShowNoPotable((prev) => !prev);

  return (
    <Section title="DETALLES DEL AGUA" style={styles.section}>
      <Text style={styles.highlightedText}>FECHA Y HORA:</Text>

      <View style={styles.row}>
        <Text style={styles.text}>ESTADO DEL AGUA</Text>
        <Button
          text={showEstadoAgua ? "OCULTAR" : "MOSTRAR"}
          onPress={toggleEstadoAgua} // Cambiado de onClick a onPress
          style={styles.smallButton}
        />
      </View>
      {showEstadoAgua && <Text style={styles.detailsText}>Demuestra la cantidad de agua examinada y cuanta cantidad de contaminantes botan las fábricas aledañas.</Text>}
      
      <View style={styles.row}>
        <Text style={styles.text}>POTABILIDAD DEL AGUA</Text>
        <Button
          text={showPotable ? "OCULTAR" : "MOSTRAR"}
          onPress={togglePotable} // Cambiado de onClick a onPress
          style={styles.smallButton}
        />
      </View>
      {showPotable && <Text style={styles.detailsText}>El agua es potable y segura para el consumo.</Text>}
      
      <View style={styles.row}>
        <Text style={styles.text}>AGUA NO POTABLE</Text>
        <Button
          text={showNoPotable ? "OCULTAR" : "MOSTRAR"}
          onPress={toggleNoPotable} // Cambiado de onClick a onPress
          style={styles.smallButton}
        />
      </View>
      {showNoPotable && <Text style={styles.detailsText}>El agua no es potable y puede contener contaminantes.</Text>}
      
      <View style={styles.navigationButtons}>
        <Button text="REGRESAR" onPress={onReturn} style={styles.navigationButton} /> {/* Cambiado de onClick a onPress */}
        <Button text="SIGUIENTE" onPress={onNext} style={styles.navigationButton} /> {/* Cambiado de onClick a onPress */}
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  highlightedText: {
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#004a6f',
    marginBottom: 10,
    letterSpacing: 0.5,
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
  smallButton: {
    width: '40%',
    height: 40,
    fontSize: 14,
  },
  detailsText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    fontFamily: 'Arial',
    letterSpacing: 0.5,
  },
  navigationButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  navigationButton: {
    width: '48%',
    height: 50,
    fontSize: 18,
  },
});

export default Screen2;