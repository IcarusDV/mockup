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
    imageContainer: {        
        display: 'flex',
        alignItems: 'center',        
        marginTop: 16,                
      }, 
      profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 128,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: themas.colors.secondaryPurple,
        objectFit: 'cover'
      },
      profilePhotoEditButton: {
        backgroundColor: themas.colors.secondaryPurple,
        padding: 8,
        borderRadius: 128,
        position: 'absolute',
        right: 0,
        bottom: 12
      },
      inputContainer: {
        marginTop: 32,      
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
      label: {
        color: themas.colors.lightgray,
        fontSize: 16,
        marginBottom: 5,
      },
     saveButton: {
        backgroundColor: themas.colors.secondaryPurple,
        borderRadius: 8,
        marginTop: 16
      },
     saveButtonText: {
        color: "white",
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 12,        
      },
});