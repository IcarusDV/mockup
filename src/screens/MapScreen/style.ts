import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      map: {
        flex: 1,
        width: "100%",
      },
    buttonsContainer: {
        position: 'absolute',
        width: "100%",        
        bottom: 0
    },
    buttonsGroup: {
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        minHeight: 250,
        backgroundColor: "#000",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        padding: 40,
        paddingBottom: 90,
        alignItems: 'center',    
    },
    button: {
        display:'flex',
        alignItems: 'center',
        justifyContent: "center",
        gap: 12,
        backgroundColor: themas.colors.primary,
        flex: 1,
        height: "100%",
        borderRadius: 32
    },
    buttonText: {
        color: themas.colors.lightgray,
        fontSize: 16,
        fontWeight: '700'
    },
    markerImage: {
        width: 35,
        height: 35,
        objectFit: 'cover',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 128,        
    },
    pausedContainer: {
        position: 'absolute',
        backgroundColor: '#000',
        width: '85%',
        bottom: 90,
        borderRadius: 16,
        padding: 20
    },
    pausedBackButton: {
        backgroundColor: themas.colors.secondaryPurple,
        padding: 8,
        borderRadius: 12
    },
    pausedItem: {
        flex: 1,
        width: "100%",
        padding: 4,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },    
    pausedItemValue: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
        textAlign: 'right'
    },
    pausedItemDesc: {
        color: themas.colors.low_opacity_white,
        textAlign: 'right'
    },
    divider: {
        width:2,
        height: "100%",
        backgroundColor: themas.colors.low_opacity_white,
        marginHorizontal: 8,
        borderRadius: 6
    }
})