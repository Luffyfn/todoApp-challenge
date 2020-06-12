import React from 'react';
import {useSelector} from 'react-redux';

import Task from './Task';

function TasksList() {
    const taskList = useSelector(state => state.tasksReducer.tasks)
    return (
        <>
            {taskList.map((task, key) => (
                <Task task={task} key={key} />
            ))}  
        </>
    );
}

export default TasksList;
