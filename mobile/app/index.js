import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLanguage } from '../LanguageContext';
import data from '../data.js'


const Home = () => {
  const { language, setLanguage } = useLanguage();
  let homedata = data[0]['homepage']

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.heroText}>{homedata[language]['h']}</Text>
        <Text style={styles.subtitleText}>{homedata[language]['p']}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/char.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eedff7',
    padding: 20,
  },
  heroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default Home;
