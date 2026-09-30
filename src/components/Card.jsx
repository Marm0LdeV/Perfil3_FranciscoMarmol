import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Componente reutilizable Card que recibe los datos solicitados por props
export const Card = ({ title, image, description }) => {
  return (
    <View style={styles.card}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#7f4ca5',
    borderRadius: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#b57edc',
    elevation: 5,
    shadowColor: '#4b1c71',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: '#4b1c71',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff0ff',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 14,
    color: '#fff0ff',
    lineHeight: 21,
    opacity: 0.92,
  },
});
