import {createStore} from 'redux'
export let initialState={
    
    like_count:0,
    upvote_toggle:false,
    check:["what", "which", "where", "when", "why", "how", "who", "whom", "whose",
    "am", "are", "is", "do", "does", "have", "has", "can","was", "were", "did", "had", "could", "might", "will", "would", "should", "may",
    "aren’t", "isn’t", "don’t", "doesn’t", "haven’t", "hasn’t", "can’t", "wasn’t", "weren’t", "didn’t", "hadn’t", "couldn’t", "won’t", "wouldn’t",
    "you","your","to"
    ]
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