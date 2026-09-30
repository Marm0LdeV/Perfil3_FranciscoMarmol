import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { STUDENT_INFO } from '../config/student';

// Pantalla 1: Muestra la información del estudiante y botón hacia la pantalla 2
export const StudentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Imagen / Logo de la Master Ball */}
        <Image
          source={require('../../assets/masterball.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.appTitle}>MasterBola App</Text>
        <Text style={styles.subtitle}>Información del Estudiante</Text>

        {/* Tarjeta con la Información del Estudiante */}
        <View style={styles.cardInfo}>
          <Text style={styles.institution}>{STUDENT_INFO.institucion}</Text>
          <Text style={styles.specialty}>{STUDENT_INFO.especialidad}</Text>
          
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{STUDENT_INFO.nombre}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Carnet:</Text>
            <View style={styles.badgeCarnet}>
              <Text style={styles.carnetText}>{STUDENT_INFO.carnet}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Sección y Grupo:</Text>
            <Text style={styles.value}>{STUDENT_INFO.seccion} - {STUDENT_INFO.grupo}</Text>
          </View>
        </View>

        {/* Botón para navegar a la Pantalla 2 */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ApiScreen')}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b1c71',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 24,
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 115,
    height: 115,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff0ff',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#b57edc',
    marginBottom: 24,
    fontWeight: '600',
  },
  cardInfo: {
    width: '100%',
    backgroundColor: '#7f4ca5',
    borderRadius: 20,
    padding: 22,
    borderWidth: 1.5,
    borderColor: '#b57edc',
    marginBottom: 28,
    shadowColor: '#4b1c71',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  institution: {
    color: '#fff0ff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  specialty: {
    color: '#dbb6ee',
    fontSize: 12.5,
    marginBottom: 12,
    marginTop: 2,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#b57edc',
    marginBottom: 16,
    opacity: 0.6,
  },
  infoRow: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    color: '#dbb6ee',
    fontWeight: '600',
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16.5,
    color: '#fff0ff',
    fontWeight: 'bold',
  },
  badgeCarnet: {
    backgroundColor: '#4b1c71',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b57edc',
    marginTop: 2,
  },
  carnetText: {
    color: '#fff0ff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#b57edc',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dbb6ee',
    elevation: 5,
    shadowColor: '#4b1c71',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#4b1c71',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
