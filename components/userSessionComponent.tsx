import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

import Ionicons from '@expo/vector-icons/Ionicons';
 
type Props = {
  color: string,
  icon: string,
  title: string,
  url: string
}

export default function UserSessionComponent({ color, icon, title, url }: Props) {

  const handlePress = async () => { 
    if (url) { 
      const supported = await Linking.canOpenURL(url); 

      if (supported) { await Linking.openURL(url); } 
      else { console.warn("Impossible d'ouvrir l'URL :", url); } 
    } 
  };

  return (
    <TouchableOpacity style={[styles.container]} onPress={handlePress}>
        <View style={[styles.box, { width: '100%' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Ionicons name={icon} size={20} color={color} />
            <Text style={{ color: color, }}>{title}</Text>
          </View>
          <View>
            <IconSymbol name='chevron.right' size={25} color={color} />
          </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      width: '100%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10
    }
});