import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../../../global/themes";

export const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    videoContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    video: {
        width: "100%", 
        height: "100%",
    },
    actionsContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 32, 
    },
    userimage: {
      width: 45, 
      height: 45,
      objectFit: 'cover',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 128,      
    },
    userimagePlus: {       
      backgroundColor: '#007AFF',
      borderRadius: 128,
    },
    userimagePlusContainer: {       
      position: 'absolute',
      bottom: -6,    
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      left: 0,
      right: 0
    },
    videoAction: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      gap: 4
    },
    videoActionText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold'
    },
    userName: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 1,
      marginBottom: 6
    },
    videoDesc:{
      fontSize: 14,
      color: themas.colors.lightgray,
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 1,
      maxWidth: '90%'
    },
    translate: {
      fontSize: 12,
      color: themas.colors.low_opacity_white,
      marginTop: 6
    }
  });