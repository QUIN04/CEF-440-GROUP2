// app/settings/offline-mode.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function OfflineMode() {
  return (
    <View style={styles.container}>
      <Text>Offline Mode Page</Text>
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
