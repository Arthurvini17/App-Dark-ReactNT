import { Text, TextInput, View } from "react-native";
import Styles from "./Styles";

type InputProps = {
    label: string;
    secureTextEntry?: boolean;
    onChageText?: (text: string) => void
    value?: string;
}
export default function input({ label, secureTextEntry, onChageText, value }: InputProps) {
    return (
        <View style={Styles.InputContainer}>
            <Text style={Styles.label}>{label}</Text>
            <TextInput style={Styles.input}
                secureTextEntry={secureTextEntry}
                onChangeText={onChageText}
                value={value}
            >
            </TextInput>
        </View>
    );
}
