import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from './Firebaseconfig';
import { collection, addDoc, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email address.';
    if (!password) newErrors.password = 'Password is required.';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password.';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    if (!selectedRole) newErrors.selectedRole = 'Role is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      const counterRef = doc(db, 'counters', 'usersCounter');
      let newUserId = 1;

      const counterSnapshot = await getDoc(counterRef);
      if (counterSnapshot.exists()) {
        newUserId = counterSnapshot.data().currentId + 1;
        await updateDoc(counterRef, { currentId: increment(1) });
      } else {
        await setDoc(counterRef, { currentId: 1 });
      }

      await addDoc(collection(db, 'users'), {
        userid: newUserId,
        name,
        email,
        role: selectedRole,
        password, // Note: Hashing is recommended in production
      });

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setSelectedRole('');
      setErrors({});
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#000"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        placeholder="Email"
        placeholderTextColor="#000"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedRole}
          onValueChange={setSelectedRole}
          style={styles.picker}
          mode={Platform.OS === 'ios' ? 'dropdown' : 'dialog'}
        >
          <Picker.Item label="Select Role" value="" />
          <Picker.Item label="Mechanic" value="mechanic" />
          <Picker.Item label="Customer" value="customer" />
          <Picker.Item label="Rent Owner" value="rentOwner" />
          <Picker.Item label="Troller Driver" value="trollerDriver" />
        </Picker>
      </View>
      {errors.selectedRole && <Text style={styles.errorText}>{errors.selectedRole}</Text>}

      <TextInput
        placeholder="Password"
        placeholderTextColor="#000"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#000"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6D00',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#000',
  },
  button: {
    backgroundColor: '#8D6E63',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
