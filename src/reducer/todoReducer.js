const initialState = {
    list: []
}
const todoReducer = (state = initialState ,action) => {
        switch (action.type) {
            case 'ADD_TODO':
               
            const {id,data} = action.payload;
                    if (data){ // ye isliye hai jab input box me data hoga to hi add hoga list me warna nahi hoga
                        return{
                            ...state, //ye purane inpute data ko add kar ke rakhega
                            list:[
                                ...state.list,
                                {
                                    id:id,
                                    data:data
                                }
                            ]
                        } 
                    }
                    return state;
           
            case 'DELETE_TODO':
               
              const newList =  state.list.filter((receiveData)=> receiveData.id !== action.id)
                return{
                    ...state, //ye purane inpute data ko add kar ke rakhega
                    list: newList // todo list pr delete karne pr basically wo us list ke id ko chhod ke baki ke saare list ko return kar ke show kar rha hai
                }

                case 'REMOVE_TODO':
                return {
                    ...state,
                    list:[]
                }
            default: return state
        }
       
}

export default todoReducer;