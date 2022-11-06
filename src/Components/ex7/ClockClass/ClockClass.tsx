import {Component} from "react";
import "./ClockClass.css";
import moment from "moment";

interface ClockClassProps {

}

interface ClockClassState {
    time: Date;
}

class ClockClass extends Component<ClockClassProps, ClockClassState> {

    public constructor(props: ClockClassProps) {
        super(props);
        this.state = {
            'time': new Date()
        };
    }

    public componentDidMount(): void {
        setInterval(() => {
            this.setState({'time': new Date()})
        }, 1000);
    }

    public render(): JSX.Element {
        return (
            <div className="ClockClass cc">
                {moment(this.state.time).format("HH:mm:ss")}
            </div>
        );
    }
}

export default ClockClass;
