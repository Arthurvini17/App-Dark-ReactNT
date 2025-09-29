import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Styles from "./Styles";

export default function LogoApp() {
    return (
        <View style={Styles.IconContainer}>
            <Ionicons name="moon" size={32} color="white" />
            <Text style={Styles.title}>DarkModeApp</Text>
        </View>
    );
}
