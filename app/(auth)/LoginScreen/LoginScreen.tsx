import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { supabase } from "@/lib/supabase"; // 👈 ajuste o caminho conforme seu projeto
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";
import Styles from "./LoginStyles";
import { signInSchema, SignInSchema } from "../../../schemas/SignInSchema";


export default function LoginScreen() {
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } }
        = useForm<SignInSchema>({

            resolver: zodResolver(signInSchema),

            defaultValues: {
                email: "",
                password: "",
            },
        });

    const handleSignIn = async (data: SignInSchema) => {

        const { email, password } = data;

        try {
            setLoading(true);

            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            setLoading(false);

            if (error) {
                Alert.alert("Erro", error.message);
                return;
            }

            router.replace("/(tabs)/home");
        } catch (err: any) {
            setLoading(false);
            Alert.alert("Erro inesperado", err.message);
        }
    };

    return (
        <View style={Styles.Container}>
            <View style={Styles.LoginContainer}>
                <View style={Styles.IconAlign}>
                    <Ionicons
                        style={Styles.back}
                        name="arrow-back-sharp"
                        size={32}
                        color="white"
                        onPress={() => router.back()}
                    />
                    <LogoApp />
                </View>

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Email"
                            value={value}
                            onChangeText={onChange}
                            error={errors.email?.message}
                        />
                    )}
                />


                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <Input
                            label="Senha"
                            secureTextEntry
                            value={value}
                            onChangeText={onChange}
                            error={errors.password?.message}

                        />
                    )}
                />

                <ButtonPrimary
                    backgroundColor="#3B82F6"
                    title={loading ? "Carregando..." : "Login"}
                    onPress={handleSubmit(handleSignIn)}
                />

                <Text style={Styles.ForgetPassword}>Forgot Password?</Text>
            </View>
        </View>
    );
}
