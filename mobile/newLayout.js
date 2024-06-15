import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useLanguage } from './LanguageContext';

const NewLayout = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
      const newLanguage = language === 'en' ? 'hi' : 'en';
      setLanguage(newLanguage);
    };
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = 'home';
          } else if (route.name === 'guide') {
            iconName = 'book';
          } else if (route.name === 'calc') {
            iconName = 'calculator';
          }

          return <FontAwesome name={iconName} size={28} color={color} />;
        },
        // tabBarLabel: () => null, // Hide the tab bar label
        tabBarStyle: {
            backgroundColor: '#fefaea', // Background color of the tab bar
          },
          headerStyle: {
            backgroundColor: '#fefaea', // Background color of the header
          },
          headerTitleStyle: {
            fontSize: 28, // Increased font size for header title
            fontWeight: 'bold', // Optional: make the title bold
            color: '#973dc9'
          },
        tabBarActiveTintColor: '#973dc9',
        headerRight: () => (
            <FontAwesome
              name="language"
              size={24}
              color="#000"
              style={{ marginRight: 15 }}
              onPress={() => {
                toggleLanguage()
                // Implement action for right header icon
              }}
            />)
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Multiply' }} />
      <Tabs.Screen name="guide" options={{ title: 'Guides' }} />
      <Tabs.Screen name="calc" options={{ title: 'Calculators' }} />
    </Tabs>
  );
};

export default NewLayout;
