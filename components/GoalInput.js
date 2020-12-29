import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native'

const GoalInput = (props) => {

    const [enterdGoal, setenterdGoal] = useState('')

    const goalIputHandlear = (enteredtext) =>{
        setenterdGoal(enteredtext)
    }
    return (
        <View style={styles.inputview}>
        <TextInput
        placeholder="Goal's"
        style={styles.inputtext}
        onChangeText={goalIputHandlear}
        value={enterdGoal}
         />
        <Button 
        title='Add'
        onPress={()=>props.onAddGoal(enterdGoal)}
        style={{borderRadius:10}}
        />
      </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
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
})
