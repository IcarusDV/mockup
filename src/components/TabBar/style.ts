import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    tabBarContainer: {        
        position: 'absolute',
        bottom: 0,        
        zIndex: 9
    },
    tabBarButtons: {
        position: 'absolute',
        bottom: 0,
        display: "flex",
        flexDirection: 'row',
        height: "100%", 
        width: "100%",
        justifyContent: 'space-between',
    },
    tabButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        gap: 2
    },
    centerButton: {
        backgroundColor: 'black',
        position: 'absolute',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 128,
        top: -30,
        padding: 5
    },
    centerButtonSelected: {
        backgroundColor: themas.colors.secondaryPurple,
        position: 'absolute',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 128,
        top: -30,
        padding: 5
    },
    selectedRoutePin: {
        width: 6,
        height: 6,
        borderRadius: 128,
        backgroundColor: themas.colors.secondaryPurple
    }
})