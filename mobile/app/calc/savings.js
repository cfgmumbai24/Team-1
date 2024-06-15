import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker'
const SavingsCalculator = () => {
  const [amountToSave, setAmountToSave] = useState('');
  const [savingFrequency, setSavingFrequency] = useState('weekly');
  const [savingAmount, setSavingAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [timeToSave, setTimeToSave] = useState('');

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

    setTimeToSave(`To save ${goalAmount} of rupees, you will need to save for ${years} years and ${months} months.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount to be saved (in rupees)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amountToSave}
        onChangeText={setAmountToSave}
        placeholder="Enter amount to save"
      />
      <Text style={styles.label}>Saving Frequency</Text>
      <Picker
        selectedValue={savingFrequency}
        style={styles.picker}
        onValueChange={(itemValue) => setSavingFrequency(itemValue)}
      >
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Monthly" value="monthly" />
        <Picker.Item label="Yearly" value="yearly" />
      </Picker>
      <Text style={styles.label}>Amount you can save (in rupees)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={savingAmount}
        onChangeText={setSavingAmount}
        placeholder="Enter saving amount"
      />
      <Text style={styles.label}>Interest per annum (in percentage)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
        placeholder="Enter interest rate"
      />
      <Button title="Get Result" onPress={calculateTimeToSave} />
      {timeToSave !== '' && <Text style={styles.result}>{timeToSave}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefaea',
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
    marginBottom: 125,
    marginTop: -50
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SavingsCalculator;
