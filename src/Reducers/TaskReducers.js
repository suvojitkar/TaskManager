const TaskReducer = (state, action) => {
    if(action.type === "ADD") {
        return [action.payload, ...state];
    } else if (action.type === "DELETE") {
        return state.filter(todos => todos.id !== action.payload.id);
    } else if (action.type === "EDIT") {
       return state.map(todos => {
            if(todos.id === action.payload.id) {
                return {...action.payload}
            }
            return todos;
       });
    } else {
        return state;
    }
};

export default TaskReducer;