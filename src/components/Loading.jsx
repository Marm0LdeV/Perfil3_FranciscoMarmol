import React from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';

// Componente reutilizable para el estado de carga
export const Loading = ({ message = 'Cargando datos...' }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/masterball.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#b57edc" style={styles.spinner} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4b1c71',
  },
  logo: {
    width: 85,
    height: 85,
    marginBottom: 16,
  },
  spinner: {
    marginBottom: 12,
  },
  text: {
    color: '#fff0ff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
