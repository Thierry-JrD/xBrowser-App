import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function GoogleSearch() { 
    return ( 
        <View style={{ flex: 1, height: '100%', width: '100%', borderRadius: 30, overflow: 'hidden' }}>
            <WebView source={{ uri: "https://www.google.com" }} style={{ flex: 1 }} />
        </View>
    ); 
}