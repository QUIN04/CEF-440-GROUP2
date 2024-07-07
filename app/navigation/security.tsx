// app/settings/security.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function Security() {
  return (
    <View style={styles.container}>
      <Text>Security Page</Text>
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
