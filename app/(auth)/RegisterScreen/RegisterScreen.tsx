import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { supabase } from "../../../lib/supabase";
import Styles from "./RegisterStyles";

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignUp() {
        setLoading(true);


        //função de criar usuario do supabase e mandando os dados do usuario para o campo profiles
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: name
                }
            }
        });

        //se der erro mostrar o erro
        if (error) {
            Alert.alert('Error', error.message)
            setLoading(false)
            return;
        }

        //cancelar o carregamento
        setLoading(false);

        //se não der erro ir para tela home
        router.replace("/(auth)/LoginScreen/LoginScreen");

    }

    return (
        <View style={Styles.Container}>
            <View style={Styles.RegisterContainer}>
                <LogoApp />


                <Input label="Username"
                    onChageText={setName}
                    value={name}
                />
                <Input label="Email"
                    onChageText={setEmail}
                    value={email}
                />
                <Input label="Password" secureTextEntry
                    onChageText={setPassword}
                    value={password}
                />


                <ButtonPrimary
                    backgroundColor="#3B82F6"
                    title={loading ? 'Carregando' : 'Cadastrar'}
                    onPress={handleSignUp}
                />



                <Text style={Styles.TextLink}>Alredy have an account? Login</Text>
            </View>

            <Button title="Voltar" onPress={() => router.push("/AuthChoiceScreen/AuthChoiceScreen")} />

        </View>
    )
}