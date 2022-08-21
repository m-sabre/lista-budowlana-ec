import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)


    return (
        <div>
            <h3>Counter: {counter.counter}</h3>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        </div>

    );
}

export default App;
