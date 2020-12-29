import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button,Modal } from 'react-native'

const GoalInput = (props) => {

    const [enterdGoal, setenterdGoal] = useState('')

    const goalIputHandlear = (enteredtext) =>{
        setenterdGoal(enteredtext)
    }

    const addGaolHandeler =()=>{
        props.onAddGoal(enterdGoal)
        setenterdGoal('')
    }
    return (
        <Modal visible={props.visible} style={{padding:10}} animationType={'slide'}>
            <View style={styles.inputview}>
                <TextInput
                placeholder="Goal's"
                style={styles.inputtext}
                onChangeText={goalIputHandlear}
                value={enterdGoal}
                />
                <View style={styles.button}>
                    <View style={{width:'40%'}}>
                        <Button title="Cancel" color="red" onPress={props.cancel}/>
                    </View>
                    <View style={{width:'40%'}}>
                        <Button 
                        title='Add'
                        onPress={addGaolHandeler}
                        style={{borderRadius:10}}
                        color={'green'}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputview:{
        flex:1,
        // flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',     
    },
    inputtext:{
        width:'80%',
        borderColor:'black',
        borderBottomWidth:1,
        padding:10,
        marginBottom:10,
    },
    button :{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'50%'
    }
})
