import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const Todo = props => {
    // const [todoName, setTodoName] = useState('');
    // const [submittedTodo, setSubmittedTodo] = useState(null);
    // const [todoList, setTodoList] = useState([]);
    // const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

    const todoInputRef = useRef();

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

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

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
        const todoName = todoInputRef.current.value;
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
                ref={todoInputRef}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Todo;