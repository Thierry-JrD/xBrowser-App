import { StyleSheet, Text, View } from 'react-native';

export default function Downloads({ color }: { color: string }) {
    return (
        <View style={[style.container, { borderColor: color }]}>
            <Text style={{ color }}>Downloads Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',  
        borderWidth: 1, 
        borderRadius: 10,
        height: '100%',
    },
})