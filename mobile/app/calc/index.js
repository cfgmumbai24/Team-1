import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const Calc = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('savings')}
      >
        <Text style={styles.cardTitle}>Savings Calculator</Text>
        <Text style={styles.cardDescription}>Calculate your savings over time</Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('budget')}
      >
        <Text style={styles.cardTitle}>Budget Calculator</Text>
        <Text style={styles.cardDescription}>Create monthly budgets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eedff7'
  },
  card: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fefaea',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default Calc;
