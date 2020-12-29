import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const GoalItems = (props) => {
    return (
        <View style={styles.listitem}  >
        <Text style={styles.text}>{props.title}</Text>
      </View>
    )
}

export default GoalItems;

const styles = StyleSheet.create({

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
})
