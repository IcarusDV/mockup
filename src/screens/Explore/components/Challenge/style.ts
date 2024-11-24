import { StyleSheet } from "react-native";
import { themas } from "../../../../global/themes";

export const style = StyleSheet.create({
    challengeImage: {
        width: 60,
        height: 60,
        borderRadius: 20
    },
    challengeGradient: {
        borderRadius: 24,
        paddingHorizontal: 8,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        gap: 24
    },
    challengeTitle: {
        color: themas.colors.lightgray,
        fontSize: 16
    },
    challengeStatus: {
        color: themas.colors.low_opacity_white,
        fontSize: 13
    },
    challengeRangeContainer: {
        marginTop: 20
    },
    challengeRange: {
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        height: 6,
        borderRadius: 10,        
    },
    challengeRangeValues: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    challengeRangeCurrentValue: {
        color: themas.colors.lightgray
    },
    challengeRangeFinalValue: {
        color: themas.colors.low_opacity_white
    }
})