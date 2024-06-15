import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { useLanguage } from '../../LanguageContext';
import data from '../../data.js'

const BudgetCalculator = () => {
    const { language, setLanguage } = useLanguage();
    let homedata = data[2]['calculators']
  const [payFrequency, setPayFrequency] = useState('daily');
  const [salary, setSalary] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [monthlyExpense, setMonthlyExpense] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState(null);

  const calculateMonthlyBudget = () => {
    const salaryNum = parseFloat(salary);
    const otherIncomeNum = parseFloat(otherIncome);
    const expenseNum = parseFloat(monthlyExpense);

    let monthlySalary = payFrequency === 'daily' ? salaryNum * 30 : salaryNum;

    const totalIncome = monthlySalary + otherIncomeNum;
    const budget = totalIncome - expenseNum;

    setMonthlyBudget(budget);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{homedata[language]['BudgetCalculator']['h1']}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={payFrequency}
          onValueChange={(itemValue) => setPayFrequency(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label={homedata[language]['BudgetCalculator']['h12']} value="daily" />
          <Picker.Item label={homedata[language]['BudgetCalculator']['h11']} value="monthly" />
        </Picker>
      </View>
      <Text style={styles.label}>{homedata[language]['BudgetCalculator']['h3']}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={salary}
        onChangeText={setSalary}
      />
      <Text style={styles.label}>{homedata[language]['BudgetCalculator']['h4']}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={otherIncome}
        onChangeText={setOtherIncome}
      />
      <Text style={styles.label}>{homedata[language]['BudgetCalculator']['h5']}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={monthlyExpense}
        onChangeText={setMonthlyExpense}
      />
      <Button title={data[4]['getResults'][language]} onPress={calculateMonthlyBudget} />
      {monthlyBudget !== null && (
        <Text style={styles.result}>
          {language=="en"?"Your monthly budget is:":"आपका मासिक बजट है:"} ₹{monthlyBudget.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     marginBottom: 20,
//   },
picker: {
    height: 50,
    width: '100%',
    marginBottom: 125,
    marginTop: -50
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BudgetCalculator;
