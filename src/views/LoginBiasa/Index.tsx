import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      alert('Login berhasil!');
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>

      <Button title="Login" color="crimson" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  textLogin: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  textInput: {
    borderColor: 'crimson',
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Index;
