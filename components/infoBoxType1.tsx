import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const imageSize = 130;
const buttonSize = 20;

export default function InfoBoxType1({ color }: { color: string }) {
  return (
    <View style={styles.container}>
        <View style={{ width: '100%', height: 1, backgroundColor: color, marginBottom: 3 }}></View>
        <View style={{  flex: 1, gap: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <View style={{ flex: 1, gap: 10, flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: color, textAlign: 'justify' }}>
                      C’est un composant de React Native qui rend une zone cliquable (comme un bouton)
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: color }}>Actu Info</Text>
                        <Text style={{ fontSize: 10, color: color }}> 40 min ago</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={[styles.button, { borderColor: color }]}
                            onPressIn={() => alert("Article was deleted...")}
                        >
                            <Text style={{  fontSize: 10, color: color }}>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.imageContainer, { borderColor: color }]}>
                <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.image} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    width: '100%',
    borderRadius: 10,
  },
  imageContainer: {
    borderWidth: 1, 
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: { 
    width: imageSize, 
    height: '100%'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonSize,
    height: buttonSize,
    opacity: 0.5,
    borderWidth: 1,
    borderRadius: 5,
  }
});