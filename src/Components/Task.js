import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

import {useDispatch} from 'react-redux';

function Task(task) {
    const [taskEdited, setTaskEdited] = useState(task.desc);
    const dispatch = useDispatch();

    const deleteTask = (id) => {
        dispatch({type: "DELETE_TASK"}, id)
    }
    const editTask = (payload) => {
        dispatch({type: "EDIT_TASK", payload});
        <input 
            type="text"
            value={taskEdited}
            onChange={(e) => setTaskEdited(e.target.value)}
        />
    }

    const toogleTask = (id) => {
        dispatch({type: "TOGGLE_TASK", id})
    }
    return (
        <col>
            <row md-8>
                <span>{task.desc}</span>
            </row>
            <row md-2>
                <Button 
                    variant="warning" 
                    onClick={editTask}
                >{task.isEdited ? "Save" : "Edit"}</Button>
            </row>
            <row md-2>
                <Button 
                    variant="danger"
                    onClick={deleteTask}
                >Delete</Button>
            </row>
        </col>
    )
}

export default Task
