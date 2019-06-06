import actionType from "../constant/constant";

const INITIAL_STATE={
    userName:"juli",
    roll:101
}
export default (states=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionType.CHANGENAME:
            return ({
                ...states,
                userName:action.payload
            })

        default:
            return states;
    }
}