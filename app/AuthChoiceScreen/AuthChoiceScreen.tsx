import ButtonPrimary from "@/components/ButtonPrimary";
import LogoApp from "@/components/LogoApp";
import { router } from "expo-router";
import { Button, View } from "react-native";
import Styles from "./AuthChoiceStyles";


export default function AuthChoiceScreen() {
    return (
        <View style={Styles.Container}>

            <View style={Styles.Container}>
                <LogoApp />
                <Button title="Voltar" onPress={() => router.push("/(tabs)/home")} />

                <View style={Styles.ContainerButtons}>
                    <ButtonPrimary title="Login" backgroundColor="#444444" onPress={() => router.push("/LoginScreen/LoginScreen")} />
                    <ButtonPrimary title="Registrar" backgroundColor="#000000ff" />

                </View>

            </View>


        </View>
    )
}