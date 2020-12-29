import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput'

export default function App() {

  const [crouseGoal,setcrouseGoal] = useState([]);

  

  const addGaolHandeler = (enterdGoal) => {
    setcrouseGoal(currentGoal=>[...currentGoal,{id : Math.random().toString(),value:enterdGoal}])
  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGaolHandeler}/>
      <FlatList data={crouseGoal}
      keyExtractor={(item ,index)=>item.id} 
      renderItem={(itemData)=><GoalItems title={itemData.item.value}/>
      }
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor: '#fff'
  },
});
