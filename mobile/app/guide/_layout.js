import React from 'react';
import { Stack } from 'expo-router';
import { useLanguage } from '../../LanguageContext';
import data from '../../data.js'

const GuideLayout = () => {
    const { language, setLanguage } = useLanguage();
    let homedata = data[1]['guides']
    
    return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#6200EE' },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen name="index" options={{ title: '', headerShown: false }} />
      <Stack.Screen name="money" options={{ title: homedata[language]["BasicsofMoney"]["sh"] }} />
      {/* <Stack.Screen name="savings" options={{ title: 'Savings Calculator' }} /> */}
    </Stack>
  );
};

export default GuideLayout;