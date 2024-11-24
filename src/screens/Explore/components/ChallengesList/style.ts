import { StyleSheet } from "react-native";
import { themas } from "../../../../global/themes";

export const style = StyleSheet.create({
    container: {
        marginTop: 32
    },
    label: {
        color: themas.colors.lightgray,
        fontSize: 16,
        marginBottom: 5,
    },
    challengeList: {
        display:'flex',
        gap: 16
    },
})