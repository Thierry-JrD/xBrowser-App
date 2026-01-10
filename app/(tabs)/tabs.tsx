import { Colors } from '@/constants/theme';
import { Text, useColorScheme, View } from 'react-native';

export default function TabsScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors[colorScheme ?? 'light'].tint }}>Tabs Screen</Text>
    </View>
  )
}