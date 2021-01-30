import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const Todo = ({todo, removeTodo}) => {



    return (
        <TouchableOpacity activeOpacity={.5} 
            onPress={() => {console.log('Pressed', todo.id)}}
            onLongPress={() => removeTodo(todo.id)}
        >
            <View style={styles.wrapper}>
                <Text style={styles.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = {
    wrapper: {
        borderStyle: 'solid',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7952B3',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#7952B3'
    },
    text: {
        color: '#fff',
    }
}