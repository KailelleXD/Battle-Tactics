import React from "react";

export const PhysContext = React.createContext();
export const PhysConsumer = PhysContext.Consumer;


export class PhysProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 1,
            lastScale: 1,
            offsetX: 0,
            offsetY: 0,
            lastX: 0,
            lastY: 0,
            distant: 150,
            maxWOffset: 0, 
            maxHOffset: 0
        };
    }

    updateScale = (newScale) => {
        this.setState({
            scale: newScale
        })
    };

    updateOffset = (x, y) => {
        this.setState({
            offsetX: x,
            offsetY: y
        })
    }

    updateLast = (lastX, lastY, lastScale) => {
        this.setState({
            lastX: lastX,
            lastY: lastY,
            lastScale: lastScale
        })
    }

    updateDistant = (distant) => {
        this.setState({
            distant: distant
        })
    }

    updateMaxOffset = (maxW, maxH) => {
        this.setState({
            maxWOffset: maxW, 
            maxHOffset: maxH
        })
    }

    render() {
        return (
            <PhysContext.Provider value={{
                state: this.state,
                updateScale: this.updateScale,
                updateOffset: this.updateOffset,
                updateLast: this.updateLast,
                updateDistant: this.updateDistant,
                updateMaxOffset: this.updateMaxOffset
            }}>
                {this.props.children}
            </PhysContext.Provider>
        );
    }
}
