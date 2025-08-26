import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';

// Importa os dados do catálogo de um arquivo JSON.
import dadosDoCatalogo from './catalogo.json';

// Define a interface para tipar cada item do catálogo.
interface ItemDoCatalogo {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
}

// URL da imagem de fundo
const backgroundImageUri = 'https://i.pinimg.com/1200x/5c/ec/b1/5cecb16d56b8b81ebff2c70ebebd0c99.jpg';

const CatalogoScreen = () => {
  return (
    // Usa ImageBackground no lugar de View para exibir a imagem de fundo
    <ImageBackground
      source={{ uri: backgroundImageUri }}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#FDF0D5" />

      <Text style={styles.tituloPrincipal}>Minhas músicas mais escutadas</Text>

      {dadosDoCatalogo.map((item: ItemDoCatalogo) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.subtitulo}>{item.subtitulo}</Text>
          <Text style={styles.ano}>{item.ano}</Text>
        </View>
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 25,
    // A propriedade da imagem de fundo foi removida daqui
  },
  tituloPrincipal: {
  fontSize: 38, // Aumenta o tamanho da fonte para mais destaque
  fontWeight: 'bold', // Usa um peso mais forte para o texto
  marginBottom: 40,
  textAlign: 'center',
  color: '#FFFFFF', // Cor do texto branca para alto contraste
  letterSpacing: 1.5, // Adiciona um espaçamento entre as letras para um visual mais elegante
},
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 0,
    shadowColor: '#9A031E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '500',
    color: '#780000',
    fontFamily: 'System',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#9A031E',
    marginTop: 5,
    fontFamily: 'System',
    lineHeight: 24,
  },
  ano: {
    fontSize: 14,
    color: '#C1121F',
    marginTop: 20,
    textAlign: 'right',
    fontFamily: 'System',
  },
});

export default CatalogoScreen;