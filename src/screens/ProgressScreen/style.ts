import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        color: themas.colors.lightgray,
        marginVertical: 48,
        textAlign: "center",
      },
      progressContainer: {
        backgroundColor: '#000',
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        paddingTop: 32,
        flex: 1
      },
      progressDateList: {
        display: 'flex', 
        flexDirection: 'row',
        gap: 16
      },
      progressBarList: {
        display: 'flex', 
        flexDirection: 'row',
        marginTop: 64,
      }
})