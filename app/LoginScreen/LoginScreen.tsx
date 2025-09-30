import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import Styles from "./LoginStyles";


export default function AuthChoiceScreen() {


    return (
        <View style={Styles.Container}>
            <View style={Styles.LoginContainer}>
                <View style={Styles.IconAlign}>
                    <Ionicons style={Styles.back} name="arrow-back-sharp" size={32} color="white" onPress={() => router.push("/AuthChoiceScreen/AuthChoiceScreen")} />
                    <LogoApp />
                </View>
                <Input label="Username" />
                <Input label="Password" secureTextEntry />
                <ButtonPrimary backgroundColor="#3B82F6" title="Login" />

                <Text style={Styles.ForgetPassword}>Forgot Password?</Text>


            </View>


        </View>
    )
}