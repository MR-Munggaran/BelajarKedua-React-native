import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';

export default function Index() {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState('');

  const prosesInput = () => {
    if (inputValue !== '') {
      const dataListBaru = [...dataList, inputValue];
      setDataList(dataListBaru);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Masukan Area"
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        style={{borderWidth: 1, padding: 10, width: 200, marginVertical: 20}}
      />
      <Button title="Tambahkan" onPress={prosesInput}></Button>
      <FlatList
        data={dataList}
        renderItem={({item, index}) => <Text>{index + 1}. {item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
