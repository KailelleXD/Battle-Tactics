import React from "react";

export const PhysContext = React.createContext();
export const PhysConsumer = PhysContext.Consumer;


export class PhysProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 1
        };
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
                updateScale: this.updateScale
            }}>
                {this.props.children}
            </PhysContext.Provider>
        );
    }
}
