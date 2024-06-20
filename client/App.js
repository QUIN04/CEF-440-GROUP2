import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 import {useEffect, userState} from 'react';

export default function App() {

  const [backendData, setBackendDat] = useState ([{}])

  useEffect (() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
    
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
