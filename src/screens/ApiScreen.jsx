import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFetchData } from '../hooks/useFetchData';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';

// URL de la API seleccionada (Dragon Ball Planetas)
const API_URL = 'https://dragonball-api.com/api/planets';

// Pantalla 2: Muestra la información de la API consumida mediante el Custom Hook
export const ApiScreen = ({ navigation }) => {
  const { data, loading, error, refetch } = useFetchData(API_URL);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con botón para regresar a Pantalla 1 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dragon Ball Planetas</Text>
        <TouchableOpacity
          style={styles.reloadButton}
          onPress={refetch}
          activeOpacity={0.7}
        >
          <Text style={styles.reloadButtonText}>Recargar</Text>
        </TouchableOpacity>
      </View>

      {/* Renderizado condicional: Loading, Error o Lista con <Card /> */}
      {loading ? (
        <Loading message="Cargando planetas..." />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Error al cargar datos</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={refetch}>
            <Text style={styles.retryButtonText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            // Uso del componente reutilizable Card con sus respectivos props
            <Card
              title={item.name || item.title || 'Planeta'}
              image={item.image}
              description={item.description || 'Sin descripción disponible.'}
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b1c71',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: '#7f4ca5',
    backgroundColor: '#4b1c71',
  },
  backButton: {
    backgroundColor: '#7f4ca5',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b57edc',
  },
  backButtonText: {
    color: '#fff0ff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerTitle: {
    color: '#fff0ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reloadButton: {
    backgroundColor: '#7f4ca5',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#b57edc',
  },
  reloadButtonText: {
    color: '#dbb6ee',
    fontSize: 13,
    fontWeight: '600',
  },
  list: {
    paddingVertical: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorTitle: {
    color: '#dbb6ee',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  errorText: {
    color: '#fff0ff',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#b57edc',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dbb6ee',
  },
  retryButtonText: {
    color: '#4b1c71',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
