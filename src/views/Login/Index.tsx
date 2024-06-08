import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useReducer} from 'react';

const initialState = {
  username: '',
  password: '',
  ShowButton: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USERNAME':
      return {...state, username: action.payload};
    case 'PASSWORD':
      return {...state, password: action.payload};
    case 'TURNON':
      return {...state, ShowButton: action.payload};
    default:
      return state;
  }
};

export default function Index({navigation}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {username, password, ShowButton} = state;
  const uname = 'Rafi';
  const pass = '1234';

  const Tampilkanbutton = () => {
    if (username === uname) {
      dispatch({type: 'TURNON', payload: true});
      if (password === pass) {
        navigation.navigate('Utama');
      } else if (password !== pass) {
        Alert.alert('Password Salah');
      }
    } else {
      Alert.alert('Login Gagal');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="black"
        style={styles.txtInput}
        onChangeText={text => dispatch({type: 'USERNAME', payload: text})}
      />
      {ShowButton && (
        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          style={styles.txtInput}
          onChangeText={text => {
            dispatch({type: 'PASSWORD', payload: text});
          }}
        />
      )}

      <TouchableOpacity style={styles.btnLogin} onPress={Tampilkanbutton}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'salmon',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: 'black',
    padding: 10,
    fontSize: 35,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  txtInput: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 15,
    color: 'black',
    marginVertical: 15,
    padding: 10,
  },
  btnLogin: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
});
