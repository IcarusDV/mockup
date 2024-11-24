import { StyleSheet } from "react-native";
import { themas } from "../../../../global/themes";

export const style = StyleSheet.create({
    container: {
        marginHorizontal: 10,
      },
    gradient: {
        minHeight: 180,
        width: '100%',
        minWidth: 32,
        borderRadius: 32
      },
      hourText: {
        color: themas.colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
})