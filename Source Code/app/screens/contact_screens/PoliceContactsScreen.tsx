import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const PoliceContactsScreen= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Police</Text>
      <Text style={styles.phoneNumber}>+237 6887779900</Text>
      <View style={styles.emergencyContainer}>
        <View style={styles.emergencyItem}>
          <Text style={styles.emergencyLabel}>Police</Text>
          <Text style={styles.emergencyLabel}>Fire Rescue</Text>
          <Text style={styles.emergencyLabel}>Ambulance</Text>
          <Text style={styles.emergencyLabel}>Hospital</Text>
        </View>
        <Image source={require('../assets/plus.png')} style={styles.plusIcon} />
      </View>
      <Text style={styles.emergencyLabel}>Emergency Responder</Text>
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/home.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/contacts.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/notifications.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/settings.png')} style={styles.navIcon} />
        </TouchableOpacity>
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
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  plusIcon: {
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

export default PoliceContactsScreen;
