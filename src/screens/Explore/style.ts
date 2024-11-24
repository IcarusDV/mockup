import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        color: themas.colors.lightgray,
        marginTop: 32,
        textAlign: "center",
      },
      label: {
        color: themas.colors.lightgray,
        fontSize: 16,
        marginBottom: 5,
    },
    achievementIcon: {
      backgroundColor: themas.colors.primary,
      padding: 16,
      borderRadius: 48
    },
      searchInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 16,
        alignItems: 'center',
        gap: 12,
      },
      searchInput: {
        flex: 1,
        padding: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        fontSize: 16,
        color: themas.colors.secondary,
        backgroundColor: 'white'
      },
      noUsersFoundText: {
        color: themas.colors.low_opacity_white,
        fontSize: 16,
        textAlign: 'center'
      },
      enviteButtonContainer: {
        maxWidth: 300,
        marginHorizontal: 'auto',
        marginTop: 32
      },
      achievementsContainer: {
        marginTop: 32
      },
      enviteText: {
        color: themas.colors.low_opacity_white,
        fontSize: 14,
        textAlign: 'center'
      },
      enviteButton: {
        backgroundColor: themas.colors.primary,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'center',
        paddingVertical: 4,
        marginTop: 8,
        borderRadius: 6
      },
      enviteButtonText: {
        color: themas.colors.lightgray,
        fontSize: 20
      },
      achievementList: {
        display: 'flex', 
        flexDirection: 'row',
        gap: 20,
        marginBottom: 80
      }
})