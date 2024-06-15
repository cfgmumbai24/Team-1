import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useLanguage } from '../../LanguageContext';
import data from '../../data.js'
const { height } = Dimensions.get('window');

const TextImagePage = () => {
    const { language, setLanguage } = useLanguage();
    let homedata = data[3]['BasicsofMoney']
  
    return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.heroText}>Welcome to Our App!</Text> */}
      <Text style={styles.subtitleText}>
        {homedata[language][0]}
      </Text>
      <Image
          source={require('../../assets/rekha.png')}
          style={styles.image}
          resizeMode="contain"
        />
      <Text style={styles.subtitleText}>
        {homedata[language][1]}
      </Text>
      <Image
          source={require('../../assets/queue.png')}
          style={styles.image1}
          resizeMode="contain"
        />
      <Text style={styles.subtitleText}>
        {homedata[language][2]}
      </Text>
      <Image
          source={require('../../assets/cash.png')}
          style={styles.image1}
          resizeMode="contain"
        />
      <Text style={styles.subtitleText}>
        {homedata[language][3]}
      </Text>
      <Image
          source={require('../../assets/rekha1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      <Text style={styles.subtitleText}>
        {homedata[language][4]}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    // justifyContent: 'space-between',
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200, // Adjust the height as needed
  },
  image1: {
    width: '100%',
    height: 75, // Adjust the height as needed
  },
});

export default TextImagePage;
