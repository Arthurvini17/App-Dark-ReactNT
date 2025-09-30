import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },

    LoginContainer: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        gap: 20,

    },

    ForgetPassword: {
        color: '#2d87fdff',
        alignSelf: 'flex-start',
        textDecorationLine: "underline",
    }


});

export default Styles;
