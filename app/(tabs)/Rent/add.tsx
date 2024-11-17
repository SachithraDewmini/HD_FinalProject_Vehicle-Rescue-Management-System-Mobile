import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [form, setForm] = useState<{
    name: string;
    vehicleName: string;
    seats: string;
    About_Condition: string;
    location: string;
    value: string;
    photo?: string;
  }>({
    name: '',
    vehicleName: '',
    seats: '',
    About_Condition: '',
    location: '',
    value: '',
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handlePhotoUpload = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access the gallery is required!');
      return;
    }

    // Open image picker
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setForm({ ...form, photo: pickerResult.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.topHeader}>
        <Image source={require('@/assets/mainlogo.jpg')} style={styles.logo} />
        <Text style={styles.headerTitle}>FIX & GO</Text>
      </View>

      {/* Edit Profile Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add vehicle</Text>

        <TextInput
          style={styles.input}
          placeholder="Vehicle Name"
          value={form.vehicleName}
          onChangeText={(text) => handleChange('vehicleName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Seats"
          value={form.seats}
          onChangeText={(text) => handleChange('seats', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="About Condition"
          value={form.About_Condition}
          onChangeText={(text) => handleChange('About_Condition', text)}
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

        <TouchableOpacity style={styles.photoButton} onPress={handlePhotoUpload}>
          <Text style={styles.photoButtonText}>
            {form.photo ? 'Change Photo' : 'Upload Photo'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FF6D00' },
  topHeader: { paddingVertical: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 40, height: 40, marginRight: 10 },
  headerTitle: { fontSize: 24, color: '#FFFFFF', fontWeight: 'bold' },
  formContainer: { padding: 20, backgroundColor: '#FFFFFF', marginHorizontal: 20, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#FF6D00', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#F0F0F0', padding: 10, borderRadius: 5, marginBottom: 15 },
  photoButton: { backgroundColor: '#FF6D00', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginBottom: 15 },
  photoButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  submitButton: { backgroundColor: '#FF6D00', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  submitButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
