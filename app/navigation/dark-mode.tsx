// app/settings/dark-mode.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function DarkMode() {
  return (
    <View style={styles.container}>
      <Text>Dark Mode Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});
