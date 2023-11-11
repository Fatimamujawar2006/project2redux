export const pdetailReducer=(state={details:''},action)=>{
    switch(action.type){
        case "P_DETAIL":
            return{
                ...state,
                details:action.payload
            }
    }
    return state
}