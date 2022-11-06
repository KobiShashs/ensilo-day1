import {Component} from "react";
import "./PlayerClass.css";

interface PlayerClassProps {
    name: string;
    goals: number;
}

interface PlayerClassState {
    goals: number;
}

class PlayerClass extends Component<PlayerClassProps, PlayerClassState> {

    private increase = () => {
        this.setState({'goals': this.state.goals + 1});
    }

    private decrease = () => {
        this.setState({'goals': this.state.goals - 1});
    }

    public constructor(props:PlayerClassProps) {
        super(props);

        this.state = {'goals': props.goals};
    }

    public render(): JSX.Element {
        return (
            <div className="PlayerClass cc">
                <p>{this.props.name}</p>
                <p>{this.state.goals}</p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>

            </div>
        );
    }
}

export default PlayerClass;
