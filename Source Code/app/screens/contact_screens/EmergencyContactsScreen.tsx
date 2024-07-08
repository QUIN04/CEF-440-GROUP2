import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  // TouchableOpacity,
} from 'react-native';

const EmergencyContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <View style={styles.emergencyContainer}>
        <View style={styles.emergencyItem}>
          <Text style={styles.emergencyLabel}>Police</Text>
          <Text style={styles.emergencyLabel}>Fire Rescue</Text>
        </View>
        <Image source={require('@/assets/images/icon.png')} style={styles.profileIcon} />
        <View style={styles.emergencyItem}>
          <Text style={styles.emergencyLabel}>Ambulance</Text>
          <Text style={styles.emergencyLabel}>Hospital</Text>
        </View>
      </View>
      <Text style={styles.emergencyLabel}>Emergency Responder</Text>
      <View style={styles.navContainer}>
        {/* <TouchableOpacity style={styles.navButton}>
          <Image source={require('@/assets/images/icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('@/assets/images/icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('@/assets/images/icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('@/assets/images/icon.png')} style={styles.navIcon} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emergencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  emergencyItem: {
    flexDirection: 'column',
  },
  emergencyLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 40,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default EmergencyContactsScreen;
