import React from 'react';

import ADD_TASK from '../Constants/actionsTypes';
import DELETE_TASK from '../Constants/actionsTypes';
import EDIT_TASK from '../Constants/actionsTypes';
import ADD_TASK from '../Constants/actionsTypes';

const nextId = 4;

export const addTask = text => ({
    type: ADD_TASK,
    payload: text,
});

export const editTask = id => ({
    type: EDIT_TASK,
    payload,
})

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: id,
})