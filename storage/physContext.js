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
            screenWidth: 720,
            ppi: 1,
            distance: 150,
            inches: 0
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

    getPixelsPerInch = (screenWidth) => {
        const PPI = screenWidth/48;
        console.log("screenWidth: " + screenWidth);
        console.log("Pixels/Inch: " + PPI);
        this.setState({
            screenWidth: screenWidth,
            ppi: PPI
        })
    }

    calcDistance = (xyObj1, xyObj2) => {
        let dx = Math.abs(xyObj1.x - xyObj2.x);
        let dy = Math.abs(xyObj1.y - xyObj2.y);
        let distance = Math.sqrt(dx * dx + dy * dy);
        let inches = distance / this.state.ppi;
        console.log("Total Distance in Pixels: " + distance);
        console.log("Total Distance in Inches: " + inches);
        this.setState({
            distance: distance,
            inches: inches
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
                getPixelsPerInch: this.getPixelsPerInch,
                calcDistance: this.calcDistance
            }}>
                {this.props.children}
            </PhysContext.Provider>
        );
    }
}
