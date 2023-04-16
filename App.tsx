import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    type trollyObject = {
        name: string,
        count: number,
        id: number
    }
    const [trollyArray, setTrollyArray] = useState(
        [
            { 'name': 'a person', 'count': 0, id: 0},
            { 'name': '5 people', 'count': 0, id: 1},
            { 'name': '10 people', 'count': 0, id: 2},
            { 'name': 'a bag of puppies', 'count': 0, id: 3},
            { 'name': 'a bag of kittens', 'count': 0, id: 4},
            { 'name': 'a cow', 'count': 0, id: 5},
            { 'name': 'a trolley', 'count': 0, id: 6},
        ]
    );

    // let trollyArray: trollyObject[] = [
    //     { 'name': '1 person', 'count': 0, id: 0},
    //     { 'name': '5 people', 'count': 0, id: 1},
    //     { 'name': '10 people', 'count': 0, id: 2},
    // ];

    const [oneState, setOne] = useState(randomItem())
    const [twoState, setTwo] = useState(randomItem())
  return (
    <View style={styles.container}>
        <Text>Would you save {oneState.name}, or {twoState.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {selected(oneState.id)}}>
            <Text style={styles.textB32}>
                {oneState.name}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {selected(twoState.id)}}>
            <Text style={styles.textB32}>
                {twoState.name}
            </Text>
            </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );

  function randomItem(): { name: string; count: number; id: number;} {
    let rNum = Math.floor(Math.random() * trollyArray.length);
    return {
        name: trollyArray[rNum].name,
        count: trollyArray[rNum].count,
        id: trollyArray[rNum].id
    };
  }
  function selected(id: number): void {
    let tmpArray: trollyObject[] = trollyArray;
    tmpArray[id].count += 1;
    setTrollyArray(tmpArray);
    setOne(randomItem());
    setTwo(randomItem());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideBySide: {
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    margin: 5,
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  textB32: {
    color: '#000',
    fontSize: 32,
  },
});
