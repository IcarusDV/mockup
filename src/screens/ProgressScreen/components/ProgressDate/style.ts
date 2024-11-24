import { StyleSheet } from "react-native";
import { themas } from "../../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginHorizontal: 8,
        borderRadius: 12
      },
      containerSelected: {
        flex: 1,
        backgroundColor: themas.colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginHorizontal: 8,
        borderRadius: 12
      },
      title: {
        color: themas.colors.primary,
        fontSize: 20,
        textAlign: "center"
      },
      titleSelected: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
      },
      dayNumber: {
        color: themas.colors.primary,
        fontSize: 36,
        textAlign: "center"
      },
      dayNumberSelected: {
        color: "white",
        fontSize: 36,
        textAlign: "center"
      }
})