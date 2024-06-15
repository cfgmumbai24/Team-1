import React from 'react';
import { LanguageProvider } from '../LanguageContext';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import NewLayout from '../newLayout';

const Layout = () => {
  
  return (
    <LanguageProvider>
     <NewLayout />
    </LanguageProvider>
  );
};

export default Layout;
