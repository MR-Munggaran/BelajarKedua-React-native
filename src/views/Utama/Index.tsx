import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const dummyData = [
  {id: 'ajdnlakndowqhrlwenafl', name: 'Rafi'},
  {id: 'ehlwahtv98n343qweq2rv', name: 'Mung'},
  {id: 'r89y4nqwerqvhh4vq39cm', name: 'Robby'},
];

const Item = ({title}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);


export default function Index({navigation}) {
  const [listItem, setListItem] = useState(dummyData);
  const nav = () => navigation.navigate('Home');
  return (
    <View>
      <FlatList
        data={listItem}
        renderItem={({item}) => <Item title={item.name} />}
        keyExtractor={item => item.id}
      />
      <Button onPress={nav} title='Home'/>
    </View>
  );
}

const styles = StyleSheet.create({

  item: {
    flex: 1,
    backgroundColor: 'salmon',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
});
