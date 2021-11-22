import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import axios from 'axios';

import List from './List';
import { useFormInput } from '../hooks/form';

const Todo = props => {
    const [inputIsValid, setInputIsValid] = useState(false);
    // const [todoName, setTodoName] = useState('');
    // const [submittedTodo, setSubmittedTodo] = useState(null);
    // const [todoList, setTodoList] = useState([]);
    // const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

    const todoInputRef = useRef();
    const todoInput = useFormInput();

    const todoListReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                return action.payload;
            case 'REMOVE':
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    };

    useEffect(() => {
        axios.get('https://react-guide-41949-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json')
            .then(result => {
                console.log(result);
                const todoData = result.data;
                const todos = [];
                for (const key in todoData) {
                    todos.push({
                        id: key,
                        name: todoData[key].name
                    });
                }
                // setTodoList(todos);
                dispatch({type: 'SET', payload: todos});
            });

        return () => {
            console.log('Cleanup');
        };
    }, []);

    const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    };

    const inputValidationHandler = event => {
        if (event.target.value.trim() === '') {
            setInputIsValid(false);
        } else {
            setInputIsValid(true);
        }
    };

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    // useEffect(() => {
    //     document.addEventListener('mousemove', mouseMoveHandler);
    //     return () => {
    //         document.removeEventListener('mousemove', mouseMoveHandler);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (submittedTodo) {
    //         // setTodoList(todoList.concat(submittedTodo));
    //         dispatch({type: 'ADD', payload: submittedTodo});
    //     }
    // }, [submittedTodo]);

    // const inputChangeHandler = (event) => {
    //     setTodoName(event.target.value);
    //     // setTodoState({
    //     //     userInput: event.target.value,
    //     //     todoList: todoState.todoList
    //     // });
    // };

    
    const todoAddHandler = () => {
        const todoName = todoInput.value;
        // setTodoState({
        //     userInput: todoState.userInput,
        //     todoList: todoState.todoList.concat(todoState.userInput)
        // });
        axios.post('https://react-guide-41949-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json', {name: todoName})
            .then(res => {
                setTimeout(() => {
                    const todoItem = {id: res.data.name, name: todoName};
                    dispatch({type: 'ADD', payload: todoItem});
                    // setSubmittedTodo(todoItem);
                    // setTodoList(todoList.concat(todoItem));
                }, 3000);
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const todoRemoveHandler = todoId => {
        axios.delete(`https://react-guide-41949-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${todoId}.json`)
            .then(res => {
                dispatch({type: 'REMOVE', payload: todoId});
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={todoInput.conChange}
                value={todoInput.value}
                style={{backgroundColor: todoInput.validity === true ? 'transparent' : 'red'}}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            {useMemo(() => 
                <List items={todoList} onClick={todoRemoveHandler}/>,
                [todoList]
            )}
        </React.Fragment>
    );
};

export default Todo;