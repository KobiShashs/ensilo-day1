import "./PlayerFunction.css";
import {useState} from "react";

interface PlayerFunctionProps {
    name: string;
    num: number;
}

//function PlayerFunction(props: PlayerFunctionProps): JSX.Element {
function PlayerFunction({num, name}: PlayerFunctionProps): JSX.Element {

    const [goals, setGoals] = useState<number>(num);

    const increase = () => {
        setGoals(goals + 1);
    }

    const decrease = () => {
        setGoals(goals - 1);
    }
    return (
        <div className="PlayerFunction fc">
            <p>{name}</p>
            <p>{goals}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default PlayerFunction;
