// app/settings/log-out.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function LogOut() {
  return (
    <View style={styles.container}>
      <Text>Log Out Page</Text>
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
