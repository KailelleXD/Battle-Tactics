import React from "react";

export const PhysContext = React.createContext();
export const PhysConsumer = PhysContext.Consumer;

export class PhysProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    calcDistance = (event) => {
        let dx = Math.abs(
            event.nativeEvent.touches[0].pageX -
                event.nativeEvent.touches[1].pageX
        );
        let dy = Math.abs(
            event.nativeEvent.touches[0].pageY -
                event.nativeEvent.touches[1].pageY
        );
        let distant = Math.sqrt(dx * dx + dy * dy);
        this.distant = distant;
    };

    calcScale = () => {};

    render() {
        return (
            <PhysContext.Provider
                value={{
                    state: this.state,
                    cakcDistance: this.calcDistance
                }}
            >
                {this.props.children}
            </PhysContext.Provider>
        );
    }
}
