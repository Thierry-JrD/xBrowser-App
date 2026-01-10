import { Link } from 'expo-router';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const numColumns = 5;
const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / numColumns - 20; // 20 for padding/margin

const speedDials = [
  { id: 1, label: 'Dial 1', imageUrl: '', url: '' },
  { id: 2, label: 'Dial 2', imageUrl: '', url: '' },
  { id: 3, label: 'Dial 3', imageUrl: '', url: '' },
  { id: 4, label: 'Dial 4', imageUrl: '', url: '' },
  { id: 5, label: 'Dial 5', imageUrl: '', url: '' },
  { id: 6, label: 'Dial 6', imageUrl: '', url: '' },
  { id: 7, label: 'Dial 7', imageUrl: '', url: '' },
  { id: 8, label: 'Dial 8', imageUrl: '', url: '' },
  { id: 9, label: 'Dial 9', imageUrl: '', url: '' },
  { id: 10, label: 'Dial 10', imageUrl: '', url: '' },
  { id: 11, label: 'Dial 11', imageUrl: '', url: '' },
  { id: 12, label: 'Dial 12', imageUrl: '', url: '' },
  { id: 13, label: 'Dial 13', imageUrl: '', url: '' },
  { id: 14, label: 'Dial 14', imageUrl: '', url: '' },
  { id: 15, label: 'Dial 15', imageUrl: '', url: '' },  
];

export default function SpeedDialGrid({ color } : { color?: string }) {
  return (
    <View style={[styles.container, { borderColor: color || 'black' }]}>
      
        { speedDials.map((dial) => (
          <Link key={dial.id} href="/pages/dial" dismissTo style={{ marginBottom: 10 }}>
            <View
                style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }} 
            >
                <View style={[styles.dial, { borderColor: color }]}>
                </View>
                <Text style={{ color: color, fontSize: 14, textAlign: 'center', width: itemSize, marginTop: 5 }}>{dial.label}</Text>
            </View>
          </Link>
        ))}
      
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,        
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,    
  },
  dial: {
    width: itemSize,
    height: itemSize,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});