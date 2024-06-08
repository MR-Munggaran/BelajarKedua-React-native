import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count > 0 ? state.count - 1 : state.count};
    default:
      return state;
  }
};

const initialState = {count: 0};

export default function Index({navigation}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
      <View style={{margin: 20, gap: 20,}}>
        <Button
          title="Increment"
          onPress={() => dispatch({type: 'increment'})}
        />
        <Text style={{color: 'black', alignSelf:'center', fontSize:100}}>{state.count}</Text>
        <Button
          title="Decrement"
          onPress={() => dispatch({type: 'decrement'})}
        />
      </View>
    </View>
  );
}
