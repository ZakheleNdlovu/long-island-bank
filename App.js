import { StyleSheet, View } from 'react-native';
import Navigators from './components/Navigation/Navigators';

export default function App() {
  return (
    <View style={styles.box}>
      <Navigators />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingTop: 28,
    height: '100%',

  }
})
