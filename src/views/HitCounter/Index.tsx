import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

export default function Index() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Kurangi 1"
          onPress={() => setNumber(number > 0 ? number - 1 : number)}
        />
      </View>
      <Text style={styles.txtAngka}>{number}</Text>
      <View>
        <Button title="tambah 1" onPress={() => setNumber(number + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txtAngka: {
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 100,
    shadowColor: 'grey',
    shadowOpacity: 10,
  },
});
