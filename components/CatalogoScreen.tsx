import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, ScrollView } from 'react-native';
// Importa os dados do catálogo de um arquivo JSON.
import dadosDoCatalogo from './catalogo.json';

// Define a interface para tipar cada item do catálogo.
interface ItemDoCatalogo {
  id: number;
  titulo: string;
  subtitulo: string;
  emoji: string;
}

// URL da imagem de fundo
const backgroundImageUri = 'https://wallpapers.com/images/hd/4k-black-3840-x-2160-background-rc6l1azrlg604s51.jpg';

const CatalogoScreen = () => {
  return (
    <ImageBackground
      source={{ uri: backgroundImageUri }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Envolva o conteúdo com o ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.tituloPrincipal}>Minhas frases preferidas</Text>

        {dadosDoCatalogo.map((item: ItemDoCatalogo) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.subtitulo}>{item.subtitulo}</Text>
            <Text style={styles.ano}>{item.emoji}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Novo componente de rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Feito por Mariana Meirelles</Text>
      </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  scrollContent: {
    paddingTop: 80,
    paddingHorizontal: 25,
    // Adiciona margem na parte inferior para o rodapé.
    paddingBottom: 70, 
  },
  tituloPrincipal: {
    fontSize:65,
    fontWeight: '900', 
    marginBottom: 40,
    textAlign: 'center',
    color: '#FFFFFF',
    letterSpacing: 1.5,
    fontFamily: 'Montserrat',
    fontStyle: 'italic', 
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
    color: '#000000ff',
    fontFamily: 'Montserrat',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#343333ff',
    marginTop: 5,
    fontFamily: 'Story Script',
    lineHeight: 24,
  },
  ano: {
    fontSize: 14,
    color: '#C1121F',
    marginTop: 20,
    textAlign: 'right',
    fontFamily: 'System',
  },
  // Estilos do novo rodapé
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semitransparente
    padding: 15,
    alignItems: 'center',
    position: 'absolute', // Permite que ele fique fixo
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'System',
  },
});

export default CatalogoScreen;