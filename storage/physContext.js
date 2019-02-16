import React from "react";
import { Dimensions } from 'react-native';

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
            startXY: { x: null, y: null},
            endXY: { x: null, y: null},
            screenWidth: 720,
            ppi: 1,
            distance: 150,
            inches: 0,
            distanceBetweenPoints: 0,
            TempX: 0,
            TempY: 0
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

    getPixelsPerInch = () => {
        let Window = Dimensions.get('window');
        const SCREEN_WIDTH = Window.width*this.state.scale;
        const PPI = SCREEN_WIDTH/48;
        // console.log("screenWidth: " + SCREEN_WIDTH);
        // console.log("Pixels/Inch: " + PPI);
        this.setState({
            screenWidth: SCREEN_WIDTH,
            ppi: PPI
        })
    }

    getStartXY = (x, y) => {
        // console.log("x: " + x + " | " + "y: " + y)
        let startObj = {
            x: x,
            y: y
        }
        this.setState({
            startXY: startObj
        })
    }

    getEndXY = (x, y) => {
        // console.log("x: " + x + " | " + "y: " + y)
        let endObj = {
            x: x,
            y: y
        }
        this.setState({
            endXY: endObj
        })
    }

    getTempXY = (x, y) => {
        console.log("x: " + x + " | " + "y: " + y)
        this.setState({
            tempX: x,
            tempY: y
        })
    }

    calcDistance = (gesture) => {
        if(this.state.endXY.x == null && this.state.endXY.y == null) {
            // console.log("Running Calc");
            let distance = Math.sqrt(gesture.dx * gesture.dx + gesture.dy * gesture.dy);
            // let scaleDistance = distance / this.state.scale;
            let inches = distance / this.state.ppi;
            // console.log("Total Distance in Pixels: " + distance);
            // console.log("Total Distance in Inches: " + inches);
            this.setState({
                distance: distance,
                inches: inches
            })
        }
    }

    distanceFromTwoPoints = (startXYObj, endXYObj) => {
        let dx = Math.abs(startXYObj.x - endXYObj.x);
        let dy = Math.abs(startXYObj.y - endXYObj.y);
        let distanceBetweenPoints = Math.sqrt(dx * dx + dy * dy);
        this.setState({
            distanceBetweenPoints: distanceBetweenPoints
        })
    }

    clearEndXY = () => {
        this.setState({
            endXY: {
                x: null,
                y: null
            }
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
                calcDistance: this.calcDistance,
                getStartXY: this.getStartXY,
                getEndXY: this.getEndXY,
                clearEndXY: this.clearEndXY,
                distanceFromTwoPoints: this.distanceFromTwoPoints,
                getTempXY: this.getTempXY
            }}>
                {this.props.children}
            </PhysContext.Provider>
        );
    }
}
