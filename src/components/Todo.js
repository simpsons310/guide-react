import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);
    // const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

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
                setTodoList(todos);
            });

        return () => {
            console.log('Cleanup');
        };
    }, []);

    const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    };

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
        // setTodoState({
        //     userInput: event.target.value,
        //     todoList: todoState.todoList
        // });
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
        // setTodoState({
        //     userInput: todoState.userInput,
        //     todoList: todoState.todoList.concat(todoState.userInput)
        // });
        axios.post('https://react-guide-41949-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json', {name: todoName})
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <React.Fragment>
            <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName} />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Todo;