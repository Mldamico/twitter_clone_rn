import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import TweetList from '../components/Home/TweetList';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>


      <TweetList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
