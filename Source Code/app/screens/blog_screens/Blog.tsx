import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Prepared</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Get yourself prepared During these Disasters</Text>
        <Image source={require('./disaster.jpg')} style={styles.image} />
        <Text style={styles.text}>Here are some additional tips for preparing your home and family for a disaster:</Text>
      </View>
      {/* <View style={styles.tabBar}>
        <Text style={styles.tabItem}>Home</Text>
        <Text style={styles.tabItem}>Notifications</Text>
        <Text style={styles.tabItem}>Report a Disaster</Text>
        <Text style={styles.tabItem}>SOS</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  tabItem: {
    fontSize: 14,
  },
});

export default App;
