import ButtonPrimary from "@/components/ButtonPrimary";
import { router } from "expo-router";
import { Button, View } from "react-native";
import Styles from "./AuthChoiceStyles";


export default function AuthChoiceScreen() {


    return (
        <View style={Styles.Container}>
            <Button title="Voltar" onPress={() => router.push("/(tabs)/home")} />
            <ButtonPrimary title="sla" backgroundColor="#af5252ff" />
        </View>
    )
}