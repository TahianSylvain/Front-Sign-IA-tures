// const { useReducer } = require("react");
// import { useReducer } from "react";


export function reducer(state: any, action: any) {
    switch (action.type) {
        case 'extend':
            let new_state = action.event.target.value
            console.log(new_state);
            return new_state
    
        default:
            throw new Error(
                "Action not defined!\n" +
                ">>>>>"+action.type+"<<<<<<"
            )
    }
}
