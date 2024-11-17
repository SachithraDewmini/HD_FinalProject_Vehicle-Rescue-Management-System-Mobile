import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [form, setForm] = useState({
    name: '',
    vehicleName: '',
    seats: '',
    About_Condition: '', // Default value can be set to one of the options if desired
    location: '',
    value: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.topHeader}>
        <Image source={require('@/assets/images/fix & go.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>FIX & GO</Text>
      </View>

      {/* Edit Profile Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Towing Service</Text>

        <TextInput
          style={styles.input}
          placeholder="Towing Servicee Name"
          value={form.vehicleName}
          onChangeText={(text) => handleChange('Towing_service_Name', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Best for"
          value={form.seats}
          onChangeText={(text) => handleChange('best_for', text)}
        />
      
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={form.location}
          onChangeText={(text) => handleChange('location', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Value"
          value={form.value}
          onChangeText={(text) => handleChange('value', text)}
        />

        

        

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/fix & go.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/fix & go.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/fix & go.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/images/fix & go.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6D00',
  },
  topHeader: {
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6D00',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#FF6D00',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});
