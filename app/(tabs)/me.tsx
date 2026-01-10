import UserSessionComponent from '@/components/userSessionComponent';
import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

const userSessionInfos = [
  {
    session1: [
      { icon: 'book-outline', title: 'Bookmarks', url: '/bookmarks' },
      { icon: 'timer-outline', title: 'History', url: '/history' },
      { icon: 'person-outline', title: 'Following', url: '/following' },
      { icon: 'heart-outline', title: 'Likes', url: '/likes' },
      { icon: 'invert-mode', title: 'Dark mode', url: '/saved' },
    ],
  },
  {
    session2: [
      { icon: 'settings-outline', title: 'Settings', url: '@/(tabs)/home' },
    ]
  },
  {
    session3: [
      { icon: 'logo-facebook', title: 'Follow us on Facebook', url: '/facebook' },
      { icon: 'cloud-upload-outline', title: 'Upload Content on Phoenix', url: '/uploadContent' },
      { icon: 'share-outline', title: 'Share Phoenix', url: '/share' },
      { icon: 'help', title: 'Help & Feedback', url: '/help' },
    ]
  }
  
]

export default function MeScreen() {
  const colorScheme = useColorScheme();
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.notification}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={40} color={Colors[colorScheme ?? 'light'].tint} />
          </TouchableOpacity>
        </View>

        <View style={[styles.userSession, { borderColor: Colors[colorScheme ?? 'light'].tint }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={[styles.imageContainer, { borderColor: Colors[colorScheme ?? 'light'].tint }]}>
            </View>
            <View>
              <Text style={{ color: Colors[colorScheme ?? 'light'].tint, fontSize: 16 }}>You are not signed in</Text>
              <Text style={{ color: Colors[colorScheme ?? 'light'].tint, fontSize: 12 }}>Sign in to your account</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{ padding: 10, borderWidth: 2, borderRadius: 8, borderColor: Colors[colorScheme ?? 'light'].tint }}>
              <Text style={{ color: Colors[colorScheme ?? 'light'].tint }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.userBoxSession, { marginTop: 20 }]}>
          <View style={styles.userBoxComponentSession}>
            {
              userSessionInfos[0]?.session1?.map((item, index) => (
                <UserSessionComponent key={index} color={Colors[colorScheme ?? 'light'].tint} icon={item.icon} title={item.title} url={item.url} />
              ))
            }
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: Colors[colorScheme ?? 'light'].tint, marginBottom: 3 }}></View>
          <View>
            {
              userSessionInfos[1]?.session2?.map((item, index) => (
                <UserSessionComponent key={index} color={Colors[colorScheme ?? 'light'].tint} icon={item.icon} title={item.title} url={item.url} />
              ))
            }
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: Colors[colorScheme ?? 'light'].tint, marginBottom: 3 }}></View>
          <View>
            {
              userSessionInfos[2]?.session3?.map((item, index) => (
                <UserSessionComponent key={index} color={Colors[colorScheme ?? 'light'].tint} icon={item.icon} title={item.title} url={item.url} />
              ))
            }
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  userSession: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '98%',
    height: 100,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    gap: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  userBoxSession: {
    flex:1, 
    width: '98%' ,
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10,
  },
  userBoxComponentSession: {
    flex: 1, 
    flexDirection: 'column', 
    width: '100%'
  },
  notification: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '98%',
    height: 70,
    padding: 10,
  }
})