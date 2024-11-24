import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
      },
      editButtonContainer: {       
        display:'flex',
        alignItems:'flex-end',
        paddingVertical: 32
      },
      editButton: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 32
      },
      inputContainer: {
        marginTop: 80,
        paddingHorizontal: 24        
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
      bottonContainer: {
        position: 'relative',
        backgroundColor: '#000',
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        paddingTop: 32,
        flex: 1
      },
      imageContainer: {
        position: 'absolute',
        top: -70,
        display: 'flex',
        alignItems: 'center',        
        width: '100%',        
      }, 
      profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 128,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: '#000',
        objectFit: 'cover'
      },
      deleteButton: {
        backgroundColor: themas.colors.secondaryPurple,
        flex: 1,   
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderRadius: 20
      },
      exitButton: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: "white",
        flex: 1,        
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderRadius: 20
      },
      exitButtonText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      deleteButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      }
})