import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [showMenu, setShowMenu] = useState(false); // State to track menu visibility
  const router = useRouter(); // Use router for navigation

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FIX & GO !!</Text>

      {/* Conditionally render Navigation Buttons */}
      {showMenu && (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('register')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('edit profile')}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          
          <Image source={require('@/assets/mecanic.webp')} style={styles.icon} />
          <Text style={styles.cardText}>Mechanic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/towing.webp')} style={styles.icon} />
          <Text style={styles.cardText}>Towing Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/rentacar.webp')} style={styles.icon} />
          <Text style={styles.cardText}>Rent Vehicles</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('@/assets/homeicon.jpg')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/noti.jpg')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('@/assets/menu.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('@/assets/go.jpg')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6D00',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8D6E63',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
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
    height: 30,
  },
});
