import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';

const data = [
  {
    name: 'Munggaran',
    jurusan: 'Informatika',
  },
  {
    name: 'Robert',
    jurusan: 'DKV',
  },
  {
    name: 'Arif',
    jurusan: 'Arsitektur',
  },
];

// const List = ({nama, prodi}) => {
//   return(
//     <View>
//     <Text>{nama} - {prodi}</Text>
//   </View>
{
  /* <List nama={item.name} prodi={item.jurusan}/>  */
}
//   )

// };

// <View style={{justifyContent: 'center', alignItems: 'center'}}>
// <FlatList
//   data={data}
//   renderItem={({item}) => <Text>{item.name} - {item.jurusan}</Text>}
//   keyExtractor={item => item.name}
// />
// </View>

export default function Index() {
  const [value, setValue] = useState('');
  const [addList, setAddList] = useState('');

  const databaru = () => {
    if (value !== ''){
      const Datamasuk = [...addList, value];
      setAddList(Datamasuk);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Masukan Nama Anda"
        value={value}
        onChangeText={text => setValue(text)}
        style={{borderWidth: 1, margin: 10}}
      />
      <Button title="Tambahkan" onPress={databaru} />
      <FlatList
        data={addList}
        renderItem={({item}) => <Text>{item}</Text>}
        // keyExtractor={item => }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
