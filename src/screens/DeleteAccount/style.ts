import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
        paddingVertical: 48,
        paddingHorizontal: 20
    },
    title: {
        color: "white",
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    label: {
        color: themas.colors.lightgray,
        fontSize: 16,
        marginBottom: 5,
        marginTop: 32
      },
      input: {
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        color: themas.colors.lightgray,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: themas.colors.primary,
        borderStyle: 'solid'
      },
      deleteButton: {
        backgroundColor: themas.colors.secondaryPurple,
        maxWidth: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 8
      }
});