import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native';

import ActuCardStack from '@/components/actuCardStack';
import InfoBoxType1 from '@/components/infoBoxType1';
import InfoBoxType2 from '@/components/infoBoxType2';
import SearchBar from '@/components/searchBar';
import SpeedDialGrid from '@/components/speedDialGrid';
import { Colors } from '@/constants/theme';
;


const array = [1, 2];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  
  return (
    
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={{ flex: 1, gap: 10, flexDirection: 'column', height: 50 }}>
          <SearchBar color={Colors[colorScheme ?? 'light'].tint} />
        </View>

        <View>
          <SpeedDialGrid color={Colors[colorScheme ?? 'light'].tint} />
        </View>

        <View>
          <ActuCardStack color={Colors[colorScheme ?? 'light'].tint} />
        </View>

        <View>
          {
            array.map((_, index) => (
              <View key={index} style={styles.box}>
                <InfoBoxType1 color={Colors[colorScheme ?? 'light'].tint} />
              </View>
            ))
          }
        </View>

        <View>
          {
            array.map((_, index) => (
              <View key={index} style={styles.box}>
                <InfoBoxType2 color={Colors[colorScheme ?? 'light'].tint} />
              </View>
            ))
          }
        </View>
      
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flex: 1,
  },
  box: { 
    margin: 2,  
    justifyContent: "center", 
    alignItems: "center",
  }
});