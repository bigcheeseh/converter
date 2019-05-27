import * as React from "react";
import arrows from "../images/arrows.png";
import "./SwitchButton.css";

interface IProps {
    onClick: () => void;
}

class SwitchButton extends React.PureComponent<IProps> {
    public render() {
        return (
            <img src={arrows}
                onClick={this.props.onClick}
                className="switch-image" />
        );
    }
}

export default SwitchButton;
