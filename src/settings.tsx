import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const settingsOptions = [
  { title: 'Edit profile', icon: '👤' },
  { title: 'Security', icon: '🔒' },
  { title: 'Switch account', icon: '👥' },
  { title: 'Change Language', icon: '🌐' },
  { title: 'Offline mode', icon: '📴' },
  { title: 'System Update', icon: '🔄' },
  { title: 'Dark Mode', icon: '🌙' },
  { title: 'Log out', icon: '🔓' },
];

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => alert(`${option.title} clicked`)}>
          <Text style={styles.icon}>{option.icon}</Text>
          <Text style={styles.title}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default SettingsScreen;
