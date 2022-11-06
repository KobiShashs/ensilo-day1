import React, {useState} from 'react';
import './App.css';
import HelloFunction from "./Components/ex3-4/HelloFunction/HelloFunction";
import HelloClass from "./Components/ex3-4/HelloClass/HelloClass";
import PlayerClass from "./Components/ex5/PlayerClass/PlayerClass";
import PlayerFunction from "./Components/ex5/PlayerFunction/PlayerFunction";
import CountdownClass from "./Components/ex6/CountdownClass/CountdownClass";
import CountdownFucntion from "./Components/ex6/CountdownFucntion/CountdownFucntion";

function App() {

    const [flag, setFlag] = useState<boolean>(true);


    const turn = () => {
        setFlag(!flag);
    }

    return (
        <div className="App">
            {/*Exercises 3-4*/}
            {/*<HelloFunction txt={'hello from fc as props'}/>*/}
            {/*<HelloClass txt={'hello from cc as props'}/>*/}
            {/*Exercises 5*/}
            {/*<PlayerClass goals={750} name={'Messi'}/>*/}
            {/*<PlayerFunction num={800} name={'CR7'}/>*/}
            {flag && <CountdownFucntion ticks={5} cb={turn}/>}
        </div>
    );
}

export default App;
