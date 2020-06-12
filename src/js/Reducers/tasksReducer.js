const initialState = {
    tasks: [
        { desc: "To Do 1", isEdited: false },
        { desc: "To Do 2", isEdited: false },
        { desc: "To Do 3", isEdited: false },
    ]
};
function tasksReducers(state=initialState, task) {
    switch(task.type) {
        case "ADD_TASK":
            return ({
                ...state,
                tasks: [...state.tasks, {id: new Date.now(), desc: task.desc}],
            });
        case "DELETE_TASK":
            return ({
                ...state,
                tasks: state.tasks.filter(el => el.id !== task.id),
            });
        case "EDIT_TASK":
            return ({
                ...state,
                tasks: state.tasks.map(
                    el => el.id === task.id ? {...el, isEdited: !el.isEdited} : el,
                )
            })
        case "TOGGLE_TASK":
            return ({
                ...state,
                tasks: state.tasks.map(
                    el => el.id === task.id ? {...el, isEdited: false, desc: el.desc} : el,
                )
            })
        
    }; 
}

export default tasksReducers;
