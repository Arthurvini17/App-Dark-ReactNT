import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import Styles from "./RegisterStyles";


export default function AuthChoiceScreen() {


    return (
        <View style={Styles.Container}>
            <View style={Styles.RegisterContainer}>
                <LogoApp />
                <Input label="Username" />
                <Input label="Email" secureTextEntry />
                <Input label="Password" />
                <ButtonPrimary backgroundColor="#3B82F6" title="Signup" />
                <Text style={Styles.TextLink}>Alredy have an account? Login</Text>
            </View>

            <Button title="Voltar" onPress={() => router.push("/AuthChoiceScreen/AuthChoiceScreen")} />

        </View>
    )
}