import{createStore} from 'redux'

const INITIAL_VALUE={
  counter:0,privacy_value:false
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
let newCounter=store
  if(action.type==="INCREMENT"){
newCounter={ ...store,counter: store.counter + 1 }
  }
  else if(action.type==="DECREMENT"){
    newCounter={ ...store,counter: store.counter -1 }
  }
  else if(action.type==="ADD"){
    newCounter={...store,counter:store.counter+Number(action.payload)}
  }
  else if(action.type==="SUB"){
    newCounter={...store,counter:store.counter-Number(action.payload)}
  
  }else if(action.type==="PRIVACY"){
    return {...store,privacy_value:!store.privacy_value}
  }
  return newCounter
}

const CounterStore=createStore(counterReducer)






export default CounterStore;