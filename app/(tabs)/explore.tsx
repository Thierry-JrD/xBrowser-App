import InstantGame from '@/components/instantGame';
import MusicEngine from '@/components/musicEngine';
import StatusSaver from '@/components/statusSaver';
import ToolsScreen from '@/components/tools';
import WeScore from '@/components/weScore';
import { Colors } from '@/constants/theme';
import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native';

export default function Explore() {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <View style={{ flex: 1, gap: 10, width: '98%', height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <ToolsScreen color={Colors[colorScheme ?? 'light'].tint} />
          <StatusSaver color={Colors[colorScheme ?? 'light'].tint} />
        </View>
        <View style={{ width: '98%', height: 300 }}>
          <WeScore color={Colors[colorScheme ?? 'light'].tint} />
        </View>
        <View style={{ width: '98%', height: 150 }}>
          <MusicEngine color={Colors[colorScheme ?? 'light'].tint} />
        </View>
        <View style={{ width: '98%', height: 300 }}>
          <InstantGame color={Colors[colorScheme ?? 'light'].tint} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flex: 1,
  },
});