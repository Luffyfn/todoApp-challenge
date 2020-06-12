import React from 'react'
import Button from 'react-bootstrap/Button';

function Task(task) {
    return (
        <col>
            <row md-8>
                <span>{task.desc}</span>
            </row>
            <row md-2>
                <Button variant="warning">{task.isEdited ? "Save" : "Edit"}</Button>
            </row>
            <row md-2>
                <Button variant="danger">Delete</Button>
            </row>
        </col>
    )
}

export default Task
