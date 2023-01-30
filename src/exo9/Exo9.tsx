import { useReducer } from 'react'

interface Action {
    type: string;
    payload?: number;
}
  
interface CountState {
    count: number;
}

const init = (initialValue : number) => {
    return  {
        count: initialValue
    }
}

const reducer = (state: CountState, action: Action) => {
    switch(action.type) {
        case 'increment': 
            return {count: state.count + (action.payload || 1)}
        case 'decrement': 
            if(state.count <= 0) {
                return state
            }
            return {count: state.count + (action.payload || 1)}
        case 'reset':
            return init(0)
        default:
            throw new Error(`L'action ${action.type} est inconnue`)
    }
}

const Child = () => {
    console.log('render')
    return <div>Hello</div>
}
export const Exo9 = () => {
    const [count, dispatch] = useReducer(reducer, 0, init)

    return (
        <>
            Compteur : {JSON.stringify(count)}
            <button onClick={() => dispatch({ type: 'increment'})}>Incrémenter</button>
            <button onClick={() => dispatch({ type: 'increment', payload:10})}>Incrémenter par 10</button>
            <button onClick={() => dispatch({ type: 'decrement'})}>Décémenter</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({ type: 'faire_un_chocolat_chaud'})}>Faire un chocolat chaud</button>
            <Child/>
        </>
    )
}