import actionType from "../constant/constant";

const INITIAL_STATE=[
    {
        name: 'jay'
    },
    {
        name: 'haridk'
    }
]
export default (states=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionType.CHANGENAME:
            return [...states,
            
                action.payload
            ]

        default:
            return states;
    }
}