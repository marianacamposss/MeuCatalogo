import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'; // Importa StatusBar para gerenciar a barra de status

// Importa os dados do catálogo de um arquivo JSON.
// O caminho './catalogo' indica que o arquivo 'catalogo.json' está na mesma pasta.
import dadosDoCatalogo from './catalogo.json';

// Define a interface para tipar cada item do catálogo.
// Isso garante que cada objeto tenha as propriedades 'id', 'titulo', 'subtitulo' e 'ano'
// com os tipos corretos, ajudando na segurança e clareza do código.
interface ItemDoCatalogo {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
}

// Componente funcional principal que exibe o catálogo.
const CatalogoScreen = () => {
  return (
    // View principal que serve como container para toda a tela.
    // O estilo 'container' aplica flexbox para ocupar todo o espaço e define um fundo suave.
    <View style={styles.container}>
      {/* Configura a cor do texto da barra de status para ser escura para melhor contraste */}
      <StatusBar barStyle="dark-content" backgroundColor="#FDF0D5" />

      {/* Título principal do catálogo, agora mais refinado e minimalista. */}
      <Text style={styles.tituloPrincipal}>Os Nossos Momentos</Text>

      {/* Itera sobre cada item em 'dadosDoCatalogo' e renderiza um 'card' para cada um.
          O método .map() é ideal para transformar um array de dados em uma lista de componentes JSX. */}
      {dadosDoCatalogo.map((item: ItemDoCatalogo) => (
        // Cada 'card' é uma View que exibe os detalhes de um item.
        // A propriedade 'key' é crucial para o React identificar cada item de forma única,
        // o que melhora a performance e a renderização de listas.
        <View key={item.id} style={styles.card}>
          {/* Título do item, com estilo elegante e limpo. */}
          <Text style={styles.titulo}>{item.titulo}</Text>
          {/* Subtítulo do item, fornecendo detalhes adicionais com tipografia discreta. */}
          <Text style={styles.subtitulo}>{item.subtitulo}</Text>
          {/* Ano do item, alinhado à direita para um toque de sofisticação minimalista. */}
          <Text style={styles.ano}>{item.ano}</Text>
        </View>
      ))}
    </View>
  );
};

// Objeto StyleSheet para definir os estilos visuais dos componentes.
// O StyleSheet.create otimiza a performance dos estilos no React Native.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o container ocupe 100% da altura disponível.
    paddingTop: 80, // Espaçamento superior maior para um visual mais arejado.
    paddingHorizontal: 25, // Espaçamento horizontal ligeiramente maior.
    backgroundColor: '#FDF0D5', // Fundo creme muito claro da paleta, para uma base limpa e elegante.
  },
  tituloPrincipal: {
    fontSize: 34, // Tamanho de fonte generoso para o título.
    fontWeight: '300', // Fonte mais leve (light) para um toque elegante e moderno.
    marginBottom: 40, // Espaçamento maior abaixo do título.
    textAlign: 'center', // Centraliza o texto.
    color: '#780000', // Cor vermelho escuro/vinho da paleta para o título principal, profundo e sofisticado.
    fontFamily: 'System', // Mantido como 'System' para compatibilidade, mas o peso e o tamanho já conferem elegância.
    letterSpacing: 0.5, // Pequeno espaçamento entre letras para refinamento.
  },
  card: {
    backgroundColor: '#FFFFFF', // Fundo branco puro para os cards, para máxima clareza e contraste.
    padding: 25, // Preenchimento interno generoso.
    borderRadius: 8, // Cantos sutilmente arredondados para um toque moderno sem ser excessivo.
    marginBottom: 20, // Espaçamento entre os cards.
    borderWidth: 0, // Removida a borda para um visual mais limpo.
    shadowColor: '#9A031E', // Sombra muito discreta usando um tom de vermelho mais escuro da paleta.
    shadowOffset: { width: 0, height: 2 }, // Deslocamento vertical da sombra.
    shadowOpacity: 0.08, // Opacidade bem baixa para uma sombra quase imperceptível.
    shadowRadius: 6, // Raio da sombra para um efeito suave.
    elevation: 3, // Elevação para Android, simulando sombra.
  },
  titulo: {
    fontSize: 22, // Tamanho da fonte para o título do item.
    fontWeight: '500', // Peso médio para destaque, sem ser muito pesado.
    color: '#780000', // Vermelho escuro/vinho da paleta para o título do item, para elegância e consistência.
    fontFamily: 'System',
    marginBottom: 8, // Espaçamento abaixo do título do card.
  },
  subtitulo: {
    fontSize: 16, // Tamanho da fonte para o subtítulo.
    color: '#9A031E', // Um tom de vermelho mais escuro da paleta para o subtítulo, suave e discreto.
    marginTop: 5, // Pequeno espaçamento superior.
    fontFamily: 'System',
    lineHeight: 24, // Altura da linha otimizada para legibilidade.
  },
  ano: {
    fontSize: 14, // Tamanho da fonte para o ano.
    color: '#C1121F', // Vermelho vibrante da paleta para um pequeno contraste e toque de energia.
    marginTop: 20, // Espaçamento superior maior para separar visualmente do conteúdo.
    textAlign: 'right', // Alinha o texto à direita.
    fontFamily: 'System',
    // 'fontStyle: italic' removido para um visual mais reto e minimalista.
  },
});

// Exporta o componente para que possa ser usado em outros arquivos (como App.tsx).
export default CatalogoScreen;
