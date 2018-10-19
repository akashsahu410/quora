import {createStore} from 'redux'
export let initialState={
    
    like_count:0,
    upvote_toggle:false,
    
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "Print":{
            return state;
        }
        default:{
            return state;
        }
    }
}
const store=createStore(reducer)
export default store;