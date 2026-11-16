import { ThemedText } from '@/components/themed-text';
import { StyleSheet } from 'react-native';

export default function listScreen() {
  return(
    <ThemedText type="title" style={styles.title}>
      Hails to the&nbsp; King of the Shopping list!
    </ThemedText>
  )
}

const styles = StyleSheet.create({
    title: {
    textAlign: 'center',
  },
  });