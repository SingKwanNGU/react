import { ADD_PERSON } from "../constant";

const initialState = []
export default function personReducer(previouState=initialState,action){
    const {type,data}=action

    switch (type) {
        case ADD_PERSON:
            return [data, ...previouState]
            
    
        default:
            return previouState
    }
}