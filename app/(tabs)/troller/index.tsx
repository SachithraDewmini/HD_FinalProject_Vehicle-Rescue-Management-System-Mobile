import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* New FIX & GO Header Section */}
      <View style={styles.topHeader}>
        <Image source={require('@/assets/images/fix & go.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>FIX & GO</Text>
      </View>

      {/* Profile Header Section (Fixed) */}
      <View style={styles.profileContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/4451024.png')} style={styles.profileImage} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Sahanya Welivitiya</Text>
          <Text style={styles.userEmail}>📧 Sahanya@gmail.com</Text>
          <Text style={styles.userLocation}>📍 Galle | 📞 0713424532</Text>

          {/* Centered Button Container */}
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
          <Link href="/edit" asChild>
          <Text style={styles.buttonText}>Edit</Text>
          </Link>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button}>
          <Link href="/add" asChild>
          <Text style={styles.buttonText}>Add</Text>
          </Link>
         </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Scrollable Car Listings */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.card}>
          <Image source={require('@/assets/images/wheel-lift-tow-truck.webp')} style={styles.carImage} />
          <View style={styles.carDetails}>
            <Text style={styles.carTitle}>Wheel Lift Tow Truck</Text>
            <Text style={styles.carDescription}>Best For : Luxury cars,SUVs,damaged vehicles</Text>
             <Text style={styles.carDescription}>Galle</Text>
            <View style={styles.carFooter}>
              <Text style={styles.status}>Available</Text>
              <Text style={styles.rating}>Good 6.6/10</Text>
              <Text style={styles.price}>US$71.99</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
  <Image source={require('@/assets/images/flatbed_towtruck.png')} style={styles.carImage} />
  <View style={styles.carDetails}>
    <Text style={styles.carTitle}>Flatbed Tow Truck</Text>
    <Text style={styles.carDescription}>Best for:Long distance towing,small vehicles</Text>
    <Text style={styles.carDescription}>Baddegama</Text>
    <View style={styles.carFooter}>
      <Text style={styles.status}>Not Available</Text>
      <Text style={styles.rating}>Excellent 8/10</Text>
      <Text style={styles.price}>US$200.50</Text>
    </View>
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
        {/* Repeat more car listings as needed */}
      </ScrollView>

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
    backgroundColor: '#f5f5f5',
  },
  topHeader: {
    backgroundColor: '#FF6D00',
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
    marginTop: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  logoContainer: {
    marginLeft: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  userLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8D6E63',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFF',
  },
  card: {
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 150,
  },
  carDetails: {
    padding: 10,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carDescription: {
    fontSize: 14,
    color: '#666',
  },
  carFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  status: {
    color: 'green',
  },
  rating: {
    color: '#FF6D00',
  },
  price: {
    color: '#333',
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#8D6E63',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#B71C1C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
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
