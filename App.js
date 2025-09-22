import { StyleSheet, Text, View } from 'react-native';
//here is a comment
const styles = StyleSheet.create({
  paragraph: {
    margin: 36,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default function App() {
  return (
    <View>
      <Text style={styles.paragraph}>Hello, World</Text>
    </View>
  );
};
