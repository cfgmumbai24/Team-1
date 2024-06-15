import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import { useLanguage } from '../../LanguageContext';
import data from '../../data.js'

const Guide = () => {
    const { language, setLanguage } = useLanguage();
    let homedata = data[1]['guides']
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.card}
        // onPress={() => navigation.navigate('savings')}
      >
        <Image
          source={require('../../assets/money.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{homedata[language]["BasicsofMoney"]["sh"]}</Text>
        <Text style={styles.cardDescription}>{homedata[language]["BasicsofMoney"]["sub"]}</Text>
      </TouchableOpacity>
    <TouchableOpacity
        style={styles.card}
        // onPress={() => navigation.navigate('budget')}
      >
        <Image
          source={require('../../assets/money.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{homedata[language]["Savings"]["sh"]}</Text>
        <Text style={styles.cardDescription}>{homedata[language]["Savings"]["sub"]}</Text>
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
  image: {
    width: '100%',
    height: 100,
    marginBottom: 12
  },
});

export default Guide;
