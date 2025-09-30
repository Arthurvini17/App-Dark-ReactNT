import { Text, TextInput, View } from "react-native";
import Styles from "./Styles";

type InputProps = {
    label: string;
    secureTextEntry?: boolean;
}
export default function LogoApp({ label, secureTextEntry }: InputProps) {
    return (
        <View style={Styles.InputContainer}>
            <Text style={Styles.label}>{label}</Text>
            <TextInput style={Styles.input}
                secureTextEntry={secureTextEntry}>
            </TextInput>
        </View>
    );
}
