import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { useLanguage } from '../../LanguageContext';
import data from '../../data.js'

const SavingsCalculator = () => {
    const { language, setLanguage } = useLanguage();
    let homedata = data[2]['calculators']
  const [amountToSave, setAmountToSave] = useState('');
  const [savingFrequency, setSavingFrequency] = useState('weekly');
  const [savingAmount, setSavingAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [yearsToSave, setYearsToSave] = useState(0);
  const [monthsToSave, setMonthsToSave] = useState(0);

  const calculateTimeToSave = () => {
    const goalAmount = parseFloat(amountToSave);
    const saveAmount = parseFloat(savingAmount);
    const interest = parseFloat(interestRate) / 100;

    if (isNaN(goalAmount) || isNaN(saveAmount) || isNaN(interest)) {
      Alert.alert('Invalid input', 'Please enter valid numbers.');
      return;
    }

    let frequencyMultiplier;
    if (savingFrequency === 'weekly') {
      frequencyMultiplier = 4;
    } else if (savingFrequency === 'monthly') {
      frequencyMultiplier = 1;
    } else {
      frequencyMultiplier = 1/12;
    }

    const annualSavings = saveAmount * frequencyMultiplier;
    let totalSaved = 0;
    let months = 0;
    let years = 0;

    while (totalSaved < goalAmount) {
      totalSaved += annualSavings;
      months++;
      if(months==12){
        months=0;
        years++;
        totalSaved *= 1 + interest;
      }
    }

    // const months = Math.floor((years - Math.floor(years)) * 12);
    years = Math.floor(years);
    // if(language=="en"){
    //     setTimeToSave(`To save ${goalAmount} of rupees, you will need to save for ${years} years and ${months} months.`);
    // } else {
    //     setTimeToSave(`${goalAmount} रुपए बचाने के लिए, आपको ${years} साल और ${months} ​​महीने के लिए बचत करनी होगी।`);
    // }
    setYearsToSave(years)
    setMonthsToSave(months)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{homedata[language]['Savingscalculator']['h1']}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amountToSave}
        onChangeText={setAmountToSave}
        placeholder="₹"
      />
      <Text style={styles.label}>{homedata[language]['Savingscalculator']['h2']}</Text>
      <Picker
        selectedValue={savingFrequency}
        style={styles.picker}
        onValueChange={(itemValue) => setSavingFrequency(itemValue)}
      >
        <Picker.Item label={homedata[language]['Savingscalculator']['h21']} value="weekly" />
        <Picker.Item label={homedata[language]['Savingscalculator']['h22']} value="monthly" />
        <Picker.Item label={homedata[language]['Savingscalculator']['h23']} value="yearly" />
      </Picker>
      <Text style={styles.label}>{homedata[language]['Savingscalculator']['h3']}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={savingAmount}
        onChangeText={setSavingAmount}
        placeholder="₹"
      />
      <Text style={styles.label}>{homedata[language]['Savingscalculator']['h4']}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
        placeholder="%"
      />
      <Button title={data[4]['getResults'][language]} onPress={calculateTimeToSave} />
      {(yearsToSave!=0 || monthsToSave!=0) ? <Text style={styles.result}>{(language=="en")?`To save ${amountToSave} of rupees, you will need to save for ${yearsToSave} years and ${monthsToSave} months.`:`${amountToSave} रुपए बचाने के लिए, आपको ${yearsToSave} साल और ${monthsToSave} ​​महीने के लिए बचत करनी होगी।`}</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 150,
    marginTop: -25
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SavingsCalculator;
