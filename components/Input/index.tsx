import { KeyboardTypeOptions, Text, TextInput, TextInputProps, View } from "react-native";
import Styles from "./Styles";

type InputProps = {
    label: string;
    secureTextEntry?: boolean;
    onChangeText?: (text: string) => void
    value?: string;
    error?: string;
    autoCapitalize?: TextInputProps['autoCapitalize']
    keyboardType?: KeyboardTypeOptions
}
export default function input({ label, secureTextEntry, onChangeText, value, error, autoCapitalize, keyboardType }: InputProps) {
    return (
        <View style={Styles.InputContainer}>
            <Text style={Styles.label}>{label}</Text>
            <TextInput
                style={Styles.input}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
            />
            {error && (
                <Text style={{ color: "red", marginTop: 4, fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View >
    );
}
