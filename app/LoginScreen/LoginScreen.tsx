import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import Styles from "./LoginStyles";

export default function AuthChoiceScreen() {


    return (
        <View style={Styles.Container}>
            <View style={Styles.LoginContainer}>
                <LogoApp />
                <Input label="Username" />
                <Input label="Password" secureTextEntry />
                <ButtonPrimary backgroundColor="#3B82F6" title="Login" />
                <Text style={Styles.ForgetPassword}>Forgot Password?</Text>
            </View>

            <Button title="Voltar" onPress={() => router.push("/(tabs)/home")} />

        </View>
    )
}