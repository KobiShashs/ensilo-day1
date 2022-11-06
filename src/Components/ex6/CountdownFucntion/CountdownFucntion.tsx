import "./CountdownFucntion.css";
import {useEffect, useState} from "react";

interface CountdownFunctionProps {
    ticks: number;
    cb: Function;
}

function CountdownFucntion(props: CountdownFunctionProps): JSX.Element {

    let timerId: any;
    const [ticks, setTicks] = useState<number>(props.ticks);

    useEffect(() => {

        if (!timerId) {
            //Mounting - componentDidMount
            timerId = setInterval(() => {
                console.log('Ticks : ' + timerId)
                setTicks(ticks - 1);
            }, 1000);
        }

        //Updating
        if (ticks === 0) {
            console.log('Updating')
            props.cb();


        }
        //UnMounting
        return () => {
            console.log('Bye Bye')
            clearInterval(timerId)
        }

    }, [ticks])


    return (
        <div className="CountdownFucntion">
            <p>{ticks}</p>
        </div>
    );
}

export default CountdownFucntion;
