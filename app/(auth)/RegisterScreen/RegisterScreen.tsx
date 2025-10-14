import ButtonPrimary from "@/components/ButtonPrimary";
import Input from "@/components/Input";
import LogoApp from "@/components/LogoApp";
import { supabase } from "@/lib/supabase";
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    Alert,
    Button,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from "react-native";
import { signUpSchema, SignUpSchema } from "../../../schemas/SignUpSchema";
import Styles from "./RegisterStyles";

export default function RegisterScreen() {
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } =
        useForm<SignUpSchema>({

            resolver: zodResolver(signUpSchema),

            defaultValues: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
        });

    const handleSignUp = async (data: SignUpSchema) => {
        if (loading) return;
        const { name, email, password } = data;

        try {
            setLoading(true);

            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { name },
                },
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={Styles.Container}>
                        <View style={Styles.RegisterContainer}>
                            <LogoApp />

                            <Controller
                                control={control}
                                name="name"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        label="Username"
                                        value={value}
                                        onChangeText={onChange}
                                        error={errors.name?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        label="Email"
                                        value={value}
                                        onChangeText={onChange}
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        error={errors.email?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        label="Password"
                                        value={value}
                                        onChangeText={onChange}
                                        secureTextEntry
                                        error={errors.password?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="confirmPassword"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        label="Confirm Password"
                                        value={value}
                                        onChangeText={onChange}
                                        secureTextEntry
                                        error={errors.confirmPassword?.message}
                                    />
                                )}
                            />

                            <ButtonPrimary
                                backgroundColor="#3B82F6"
                                title={loading ? "Carregando..." : "Cadastrar"}
                                onPress={handleSubmit(handleSignUp)}
                            />

                            <Text style={Styles.TextLink}>
                                Ja tem uma conta? <Text style={{ textDecorationLine: "underline" }}>Login</Text>
                            </Text>
                        </View>

                        <Button
                            title="Voltar"
                            onPress={() => router.push("/AuthChoiceScreen/AuthChoiceScreen")}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
