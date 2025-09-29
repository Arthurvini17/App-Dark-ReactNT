import { Text, TouchableOpacity, View } from "react-native";
import Styles from "./Styles";

type ButtonProps = {
    title: string;
    backgroundColor?: string;
    textColor?: string;
    onPress?: () => void;
};

export default function ButtonPrimary({ title, backgroundColor, textColor, onPress }: ButtonProps) {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    Styles.Button,
                    { backgroundColor: backgroundColor || Styles.Button.backgroundColor },
                ]}
            >
                <Text style={[Styles.title, { color: textColor || Styles.title.color }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
