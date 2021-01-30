import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddTodo = ({addTodo}) => {

    const [inputValue, setInputValue] = useState('');

    const addTodoHandler = () => {
        if(inputValue) {
            addTodo(inputValue);
            setInputValue('');
        } else {
            Alert.alert('you need to enter a todo name');
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput 
                style={styles.input}
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                placeholder='enter new todo name here...'
                placeholderTextColor='#c8c8c8'
                autoCorrect={false}
            />
            <Button 
                color='#7952B3'
                title='add' onPress={addTodoHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#dadada',
        padding: 10,
        color: '#4a4a4a',
        
    },
    
})