import { useState } from 'react';
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

import { IconSymbol } from './ui/icon-symbol';

export default function SearchBar({ color }: { color: string }) {
    const colorScheme = useColorScheme();
    const [searchText, setSearchText] = useState('');

  return (
    <View style={[styles.container, { borderColor: color }]}>
        <View style={styles.subContainer}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                <IconSymbol name='magnifyingglass' size={20} color={color} />
            </Text>
            <TextInput 
                placeholder='Search or type web address' 
                style={{ fontSize: 15, fontWeight: 'bold', color: color, height: '100%' }}
                placeholderTextColor='gray'
                value={searchText}
                onChangeText={(text) => setSearchText(text)} 
            />
        </View>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: color }}>AI</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});