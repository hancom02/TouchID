import { ScrollView, Text, View } from "react-native";

export default function Latest() {
    return (
       <View>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View>
                    <Text>aaa</Text>
                </View>
            </ScrollView>
       </View> 
    );
}