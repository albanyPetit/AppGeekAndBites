import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContainer: {
      flexGrow: 1,
      padding: 20,
      alignItems: 'center', // Centra el contenido horizontalmente
    },
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent', // Asegura que sea transparente
    },
    text: {
      fontSize: 24,
      color: 'white', // Asegura que el texto sea visible sobre el fondo
      fontWeight: 'bold'
    },
    img: {
      width: 250,
      height: 250,
      borderRadius: 125, // Hacer la imagen redonda
    }
  });
  
  export default style;