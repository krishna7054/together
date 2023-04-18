import Date from './DateAndDay'
import { useEffect, useState, useCallback } from 'react';

const api_base = 'http://localhost:3001';
// const api_base = 'mypendinglist.netlify.app';


function ToDo(props) {

    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, setNewTodo] = useState("");
    const [list, setList] = useState(false);
    const [userName, password, isSignIn] = props.data;

    console.log(`before list: ${list}`);

    const GetTodos = async () => {
        try {
            console.log(`startin list= ${list}`);
            const response = await fetch(api_base + '/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: userName
                })
            });
            console.log(`during list= ${list}`);
            if (response.ok) {
                console.log(`After: ${list}`);
                const todosData = await response.json();
                console.log(todosData);
                setTodos(todosData.text);
                console.log(todos);
            } else {
                console.log('Error fetching to-do list');
            }
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {

        GetTodos();
    }, []);

    const addTodo = async () => {
        const data = await fetch(api_base + "/todo/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: userName,
                text: newTodo
            })
        }).then(res => res.json());
        console.log(data.text);

        setTodos(data.text);

        setPopupActive(false);
        setNewTodo("");
    }

    const deleteTodo = async (userName, task_id) => {
        console.log(userName);
        console.log(task_id);
        const data = await fetch(api_base + "/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: userName,
                task_id: task_id
            })
        }).then(response => {
            if (response.ok) {
                console.log('Task deleted successfully');
                GetTodos();
            } else {
                throw new Error('Failed to delete task');
            }
        })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="App">
            <h1> <Date /> </h1>

            <h2>Hello {userName}</h2>




            <div className="todos">
                {console.log(todos)}
                {todos.length > 0 ? todos.map((todo, index) => (
                    <div className={
                        "todo"
                    } key={todo._id} >
                        <div className="checkbox"></div>

                        <div className="text" key={index}>{todo}</div>

                        <div className="delete-todo" onClick={() => {
                            console.log(todo.userName, todo.text)

                            deleteTodo(userName, todo)

                        }
                        }>x</div>
                    </div>
                )) : (
                    <p>You currently have no tasks</p>
                )}
            </div>

            <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

            {popupActive ? (
                <div className="popup">
                    <div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
                    <div className="content">
                        <h3>Add Task</h3>
                        <input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
                        <div className="button" onClick={addTodo}>Create Task</div>
                    </div>
                </div>
            ) : ''}
        </div>
    );
}

export default ToDo;