import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [submittedTodo, setSubmittedTodo] = useState(null);
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

    useEffect(() => {
        if (submittedTodo) {
            setTodoList(todoList.concat(submittedTodo));
        }
    }, [submittedTodo]);

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
        // setTodoState({
        //     userInput: event.target.value,
        //     todoList: todoState.todoList
        // });
    };

    const todoAddHandler = () => {
        // setTodoState({
        //     userInput: todoState.userInput,
        //     todoList: todoState.todoList.concat(todoState.userInput)
        // });
        axios.post('https://react-guide-41949-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json', {name: todoName})
            .then(res => {
                setTimeout(() => {
                    const todoItem = {id: res.data.name, name: todoName};
                    setSubmittedTodo(todoItem);
                    // setTodoList(todoList.concat(todoItem));
                }, 3000);
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