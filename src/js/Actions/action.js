import React from 'react';

import ADD_TASK from '../Constants/actionsTypes';
import DELETE_TASK from '../Constants/actionsTypes';
import EDIT_TASK from '../Constants/actionsTypes';
import ADD_TASK from '../Constants/actionsTypes';
import TOGGLE_TASK from '../Constants/actionsTypes';

const nextId = 4;

export const addTask = desc => ({
    type: ADD_TASK,
    payload: desc,
});

export const editTask = () => ({
    type: EDIT_TASK,
    payload,
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: id,
})

export const toggleTask = id => ({
    type: TOGGLE_TASK,
    payload: id,
})