import React from 'react';
import { Stack } from 'expo-router';

const CalcLayout = () => {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#6200EE' },
      headerTintColor: '#fff',
    }}>
      <Stack.Screen name="index" options={{ title: '', headerShown: false }} />
      <Stack.Screen name="budget" options={{ title: 'Budget Calculator' }} />
      <Stack.Screen name="savings" options={{ title: 'Savings Calculator' }} />
    </Stack>
  );
};

export default CalcLayout;