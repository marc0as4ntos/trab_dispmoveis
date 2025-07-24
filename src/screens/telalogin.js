import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Container Superior Azul */}
            <View style={styles.header}>
                <Text style={styles.headerText}>UPAÍ</Text>
            </View>

            {/* Container de Login Central */}
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário ou E-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                />

                {/* Botão de Login */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>

                {/* Links Adicionais */}
                <TouchableOpacity>
                    <Text style={styles.linkText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountLink}>
                    <Text style={styles.linkText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Um fundo claro para o restante da tela
    },
    header: {
        width: '100%',
        height: 150, // Altura do cabeçalho
        backgroundColor: '#007bff', // Azul do container superior
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30, // Curvas na parte inferior para um visual mais moderno
        borderBottomRightRadius: 30,
        elevation: 5, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerText: {
        color: '#fff', // Texto branco
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 20, // Espaçamento para não colidir com a barra de status
    },
    loginContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: -50, // Puxa o container para cima, sobrepondo o header
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 10, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#28a745', // Verde para o botão de login
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#007bff', // Azul para os links
        fontSize: 14,
        marginTop: 15,
    },
    createAccountLink: {
        marginTop: 10, // Espaçamento extra para "Criar conta"
    },
});

export default LoginScreen;