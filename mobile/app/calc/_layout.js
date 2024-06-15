import React from 'react';
import { Stack } from 'expo-router';
import { useLanguage } from '../../LanguageContext';
import data from '../../data.js'

const CalcLayout = () => {
  const { language, setLanguage } = useLanguage();
  let homedata = data[2]['calculators']
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#6200EE' },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen name="index" options={{ title: '', headerShown: false }} />
      <Stack.Screen name="budget" options={{ title: homedata[language]['BudgetCalculator']['h'] }} />
      <Stack.Screen name="savings" options={{ title: homedata[language]['Savingscalculator']['h'] }} />
    </Stack>
  );
};

export default CalcLayout;