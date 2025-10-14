import ButtonPrimary from "@/components/ButtonPrimary";
import LogoApp from "@/components/LogoApp";
import { router } from "expo-router";
import { View } from "react-native";
import Styles from "./AuthChoiceStyles";


export default function AuthChoiceScreen() {

    return (
        <View style={Styles.Container}>

            <View style={Styles.Container}>
                <LogoApp />
                <View style={Styles.ContainerButtons}>
                    <ButtonPrimary title="Login" backgroundColor="#444444" onPress={() => router.push("/LoginScreen/LoginScreen")} />

                    <ButtonPrimary title="Signup" backgroundColor="#000000ff" onPress={() => router.push("/RegisterScreen/RegisterScreen")} />
                </View>
            </View>
        </View>
    )
}