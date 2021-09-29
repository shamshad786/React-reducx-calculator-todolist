export const incNumner = () =>{
    return {
        type: 'INCREMENT'
    }
}


export const decNumber = () =>{
    return {
        type: 'DECREMENT'
    }
}


export const multiply = () =>{
    return {
        type: 'MULTIPLY'
    }
}


export const divide = () =>{
    return {
        type: 'DIVIDE'
    }
}


//todo list ka action hai ye

export const addTodo = (data) => {
    return{
        type: 'ADD_TODO',
        payload :{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}


export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const removeAll = () =>{
    return {
        type: 'REMOVE_TODO'
    }
}