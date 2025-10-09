import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import Styles from "./LoginStyles";




export default function LoginScreen() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignIn() {
        console.log({
            email,
            password
        })
    }

    return (
        <View style={Styles.Container}>
            <View style={Styles.LoginContainer}>
                <View style={Styles.IconAlign}>
                    <Ionicons style={Styles.back} name="arrow-back-sharp" size={32} color="white" onPress={() => router.back()} />
                    <LogoApp />
                </View>

                <Input label="Username"
                    onChageText={setEmail}
                    value={email}
                />
                <Input label="Password" secureTextEntry

                    onChageText={setPassword}
                    value={password} />
                <ButtonPrimary backgroundColor="#3B82F6" title="Login" onPress={handleSignIn} />
                <Text style={Styles.ForgetPassword}>Forgot Password?</Text>

            </View>


        </View>
    )
}


