import CleanerEngine from '@/components/cleanerEngine';
import Downloads from '@/components/downloads';
import PdfTools from '@/components/pdfTools';
import PhoneWidgets from '@/components/phoneWidgets';
import Recents from '@/components/recents';
import { Colors } from '@/constants/theme';
import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native';

export default function FilesScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <View style={{ flex: 1, gap: 10, width: '98%', height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <Downloads color={Colors[colorScheme ?? 'light'].tint} />
          <PdfTools color={Colors[colorScheme ?? 'light'].tint} />
        </View>
        <View style={{ width: '98%', height: 150, overflow: 'hidden' }}>
          <PhoneWidgets color={Colors[colorScheme ?? 'light'].tint} />
        </View>
        <View style={{ width: '98%', height: 150 }}>
          <Recents color={Colors[colorScheme ?? 'light'].tint} />
        </View>
        <View style={{ width: '98%', height: 200, overflow: 'hidden' }}>
          <CleanerEngine color={Colors[colorScheme ?? 'light'].tint} />
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