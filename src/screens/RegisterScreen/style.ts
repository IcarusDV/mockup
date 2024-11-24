import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
        justifyContent: "center",
    },
    topBox: {
        alignItems: "center",
        marginBottom: 30,
    },
    logo: {
        width: 120,
        height: 120,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: themas.colors.lightgray,
        marginTop: 10,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 2,
    },
    label: {
        color: themas.colors.lightgray,
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: themas.colors.inputBackground,
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        color: themas.colors.lightgray,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: themas.colors.primary,
        borderStyle: 'solid'
    },
    button: {
        backgroundColor: themas.colors.primary,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: themas.colors.lightgray,
        fontSize: 16,
        fontWeight: "bold",
    },
    footerText: {
        textAlign: "center",
        color: themas.colors.lightgray,
        marginTop: 15,
        fontSize: 14,
    },
    linkText: {
        color: themas.colors.primary,
        textDecorationLine: "underline",
    },
    termsText: {
        color: themas.colors.low_opacity_white,
        textAlignVertical: 'top'
    },
    termsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16
    },
    checkbox: {
        borderColor: themas.colors.primary,
        borderRadius: 6
    }
})