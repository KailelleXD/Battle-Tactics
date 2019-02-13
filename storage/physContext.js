import React from "react";

export const PhysContext = React.createContext();
export const PhysConsumer = PhysContext.Consumer;


export class PhysProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 1,
            offsetX: 0,
            offsetY: 0
        };
    }

    updateOffset = (newOffsetX, newOffsetY) => {
        this.setState({
            offsetX: newOffsetX,
            offsetY: newOffsetY
        })
    }

    updateScale = (newScale) => {
        this.setState({
            scale: newScale
        })
    };

    render() {
        return (
            <PhysContext.Provider value={{
                state: this.state,
                updateScale: this.updateScale,
                updateOffset: this.updateOffset
            }}>
                {this.props.children}
            </PhysContext.Provider>
        );
    }
}
