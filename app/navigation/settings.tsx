import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

const settingsOptions = [
  { title: "Edit profile", icon: "👤", route: "./edit-profile" },
  { title: "Security", icon: "🔒", route: "./security" },
  { title: "Switch account", icon: "👥", route: "./switch-account" },
  { title: "Change Language", icon: "🌐", route: "./change-language" },
  { title: "Offline mode", icon: "📴", route: "./offline-mode" },
  { title: "System Update", icon: "🔄", route: "./system-update" },
  { title: "Dark Mode", icon: "🌙", route: "./dark-mode" },
  { title: "Log out", icon: "🔓", route: "./log-out" },
];

const languages = ['English', 'French', 'Spanish', 'German', 'Chinese', 'Japanese'];

const SettingsScreen = () => {
  const router = useRouter();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => {
            if (option.title === 'Change Language') {
              setLanguageModalVisible(true);
            } else {
              router.push(option.route);
            }
          }}
        >
          <Text style={styles.icon}>{option.icon}</Text>
          <Text style={styles.title}>{option.title}</Text>
        </TouchableOpacity>
      ))}

      {/* Modal for language selection */}
      <Modal
        visible={languageModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
              style={styles.picker}
            >
              {languages.map((language, index) => (
                <Picker.Item key={index} label={language} value={language} />
              ))}
            </Picker>
            <Button
              title="Close"
              onPress={() => setLanguageModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  icon: {
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
  },
});

export default SettingsScreen;
