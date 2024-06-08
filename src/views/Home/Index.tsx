import {StyleSheet, View, Button, ImageBackground} from 'react-native';
import React from 'react';
const image = {
  uri: 'https://images.unsplash.com/photo-1708149421696-d9fa65123f10?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
export default function Index({navigation}) {
  return (  
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <View style={{margin:30}}>
          <Button
            title="Go to Main"
            onPress={() => navigation.navigate('Main')}
          />
          <View style={{marginTop: 30, justifyContent: 'center'}}>
            <Button
              title="Go to Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View style={{marginTop: 30, justifyContent: 'center'}}>
            <Button
              title="Go to Count"
              onPress={() => navigation.navigate('Counter')}
            />
          </View>
          <View style={{marginTop: 30, justifyContent: 'center'}}>
            <Button
              title="Go to Login Biasa"
              onPress={() => navigation.navigate('Biasa')}
            />
          </View>
          <View style={{marginTop: 30, justifyContent: 'center'}}>
            <Button
              title="Go to Latihan FlatList"
              onPress={() => navigation.navigate('Latihan')}
            />
          </View>
          <View style={{marginTop: 30, justifyContent: 'center'}}>
            <Button
              title="Go to Latihan UTS"
              onPress={() => navigation.navigate('Uts')}
            />
          </View>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({});
