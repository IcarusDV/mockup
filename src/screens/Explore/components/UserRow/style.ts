import { StyleSheet } from "react-native";
import { themas } from "../../../../global/themes"; 

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: themas.colors.lightgray,
        paddingVertical: 8
    },
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        color: themas.colors.lightgray,
        fontSize: 16
    },
    followButton: {
        backgroundColor: themas.colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6
    },
    followButtonText: {
        color: themas.colors.lightgray
    },
    userImage: {
        backgroundColor: themas.colors.tertiary,
        width: 38,
        height: 38,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        marginRight: 16
    },
    userImageText: {
        color: themas.colors.primary,
        fontSize: 16
    }
})