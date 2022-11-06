import {Component} from "react";
import "./CountdownClass.css";

interface CountdownClassProps {
    ticks: number;
    cb: Function;
}

interface CountdownClassState {
    ticks: number;
}

class CountdownClass extends Component<CountdownClassProps, CountdownClassState> {

    private timerId?: any;

    public constructor(props: CountdownClassProps) {
        super(props);
        this.state = {'ticks': props.ticks};
    }

    public render(): JSX.Element {
        return (
            <div className="CountdownClass cc">
                <p>{this.state.ticks}</p>
            </div>
        );
    }

    //After 1st time
    public componentDidMount(): void {
        this.timerId = setInterval(() => {
            this.setState({'ticks': this.state.ticks - 1})
        }, 1000);
    }

    //after every state change
    public componentDidUpdate() {
        if (this.state.ticks === 0) {
            this.props.cb();
        }
    }

    // just before clean up
    public componentWillUnmount() {
        clearInterval(this.timerId);

    }
}

export default CountdownClass;
