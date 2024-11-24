import { StyleSheet } from "react-native";
import { themas } from "../../../../global/themes";

export const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: themas.colors.primary,
        paddingVertical: 16,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        borderRadius: 30
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    title: {
        color: themas.colors.lightgray,
        fontSize: 14,
        textAlign: "center",
        fontWeight: 'bold'
    },
    grandient: {
        marginTop: 12,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 10,
        height: 6,
        maxWidth:100,
        margin: 'auto',
        width: '100%'
    }
})