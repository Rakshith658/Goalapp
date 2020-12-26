import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [gaol, setgaol] = useState('');
  const [crouseGoal,setcrouseGoal] = useState([]);

  const goalIputHandlear = (enteredtext) =>{
    setgaol(enteredtext)
  }

  const addGaolHandeler = () => {
    setcrouseGoal(currentGoal=>[...currentGoal,{id : Math.random().toString(),value:gaol}])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputview}>
        <TextInput
        placeholder="Goal's"
        style={styles.inputtext}
        onChangeText={goalIputHandlear}
        value={gaol}
         />
        <Button 
        title='Add'
        onPress={addGaolHandeler}
        style={{borderRadius:10}}
        />
      </View>
      <FlatList data={crouseGoal}
      keyExtractor={(item ,index)=>item.id} 
      renderItem={(Goal)=>
      <View style={styles.listitem} key={Goal} >
        <Text style={styles.text}>{Goal.item.value}</Text>
      </View>}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor: '#fff'
  },
  inputview:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center'
  },
  inputtext:{
    width:'80%',
    borderColor:'black',
    borderBottomWidth:1,
    padding:10,
  },
  listitem : {
    marginTop:10,
    padding:10,
    backgroundColor:'#009387',
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
  },
  text : {
    color:'#fff'
  }
});