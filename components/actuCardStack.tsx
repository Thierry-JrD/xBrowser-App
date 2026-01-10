import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import ActuCard from './actuCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function ActuCardStack({ color }: { color: string }) {
  return (
    <View style={styles.container}>
        <View style={{ width: '100%', height: 1, backgroundColor: color, marginBottom: 3 }}></View>
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                style={styles.scrollContainer}
            >
                <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                    {
                        cards.map((_, index) => (
                            <Link key={index} href="/pages/video"  dismissTo>
                                <ActuCard color={color} />
                            </Link>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
    scrollContainer: {
        flexDirection: 'row',
    },
});