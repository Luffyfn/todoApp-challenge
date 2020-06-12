import React, {useState} from 'react'
import {useDispatch} from 'react-redux';

function AddTask() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    
    const addTask = () => {
        dispatch({type: 'ADD_TASK', desc: description})
        setDescription('');
    }

    return (
        <div>
            <input 
                type="text" 
                value={description}
                placeholder="Put New Task"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button 
                variant="primary" 
                onClick={addTask} 
            >Add</button>
        </div>
    )
}

export default AddTask;
