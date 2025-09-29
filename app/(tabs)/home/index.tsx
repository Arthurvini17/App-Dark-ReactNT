import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';



export default function HomeScreen() {
  return (
    <View>
      <Text>sla22222</Text>
      <Button title="AuthChoice" onPress={() => router.push("/AuthChoiceScreen/AuthChoiceScreen")} />
    </View>
  )
}