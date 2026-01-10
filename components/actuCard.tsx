import { Image, StyleSheet, View } from 'react-native';

export default function ActuCard({ color }: { color: string }) {
  return (
    <View style={[styles.container, { borderColor: color, borderWidth: 1 }]}>
      <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 150,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        overflow: 'hidden',
    },
    image: { 
        width: '100%', 
        height: '100%',
        resizeMode: 'cover',
    },
});