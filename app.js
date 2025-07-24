import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    // Remova importações não usadas se desejar um App.js mais limpo
    // StatusBar,
    // useColorScheme,
    // View,
    // Text,
} from 'react-native';

// IMPORTANTE: Importe sua tela de login aqui!
// O caminho './src/screens/LoginScreen' é relativo ao App.js
import LoginScreen from './src/screens/telalogin';

function App() {
    // Você pode remover o código relacionado a useColorScheme, StatusBar, etc.,
    // se não for usá-los no seu componente principal App e quiser que a LoginScreen
    // gerencie seu próprio estilo de barra de status, por exemplo.

    return (
        // Renderize sua LoginScreen aqui.
        // O estilo flex: 1 é importante para que a tela ocupe todo o espaço disponível.
        <SafeAreaView style={styles.container}>
            <LoginScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz com que o componente ocupe 100% da altura e largura disponíveis
        // backgroundColor: '#f0f0f0', // Se precisar de um fundo geral para o App.js
    },
});

export default App;