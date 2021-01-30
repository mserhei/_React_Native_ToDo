import React, {useState} from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import {AddTodo } from './src/AddTodo';
import {NavBar} from './src/NavBar';
import {Todo} from './src/Todo';

export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title: title,
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(
      todo => todo.id !== id
    ))
  }

  return (
    <View style={styles.container}>
      <NavBar/>
      <AddTodo addTodo={addTodo}/>
      {todos.length ? 
        <FlatList
          style={styles.todosList}
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} removeTodo={removeTodo}/>
        )}/> :
        <View style={styles.footer}>
          <Text style={styles.footerText}>no todos</Text>
        </View>
      }
      <View style={styles.footer}>
        <Text style={styles.footerText}>Serhei Mikhailov, 2021</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%' ,
    backgroundColor: '#fff'
  },
  todosList: {
    paddingHorizontal: 30,
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 70
  },
  footerText: {
    paddingBottom: 30,
    paddingHorizontal: 30,
    color: '#7952B3',
  }
});
