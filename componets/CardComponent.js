import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CardComponent({ title, description, iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card containerStyle={styles.card}>
        <Icon name={iconName} size={24} color="#007BFF" style={styles.icon} />
        <Card.Title style={styles.cardTitle}>{title}</Card.Title>
        <Text style={styles.cardText}>{description}</Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  cardText: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  },
  icon: {
    alignSelf: 'center'
  }
});
