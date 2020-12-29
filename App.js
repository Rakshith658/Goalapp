import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput'

export default function App() {

  const [crouseGoal,setcrouseGoal] = useState([]);
  const [isAddMode, setisAddMode] = useState(false)

  

  const addGaolHandeler = (enterdGoal) => {
    setcrouseGoal(currentGoal=>[...currentGoal,{id : Math.random().toString(),value:enterdGoal}])
    setisAddMode(false)
  }

  const removeGoalHandeler = (goalid)=>{
    setcrouseGoal(currentGoal=>{
      return currentGoal.filter((goal)=>goal.id!==goalid)
    })
  }

  const cancelGoal =()=>{
    setisAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add a new Goal" onPress={()=>setisAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGaolHandeler} cancel={cancelGoal}/>
      <FlatList data={crouseGoal}
      keyExtractor={(item ,index)=>item.id} 
      renderItem={(itemData)=><GoalItems id={itemData.item.id} onDelete ={removeGoalHandeler} title={itemData.item.value}/>
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
