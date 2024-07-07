// app/settings/switch-account.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function SwitchAccount() {
  return (
    <View style={styles.container}>
      <Text>Switch Account Page</Text>
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
