import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, PanResponder, ViewPropTypes } from 'react-native';

// Fallback when RN version is < 0.44
const viewPropTypes = ViewPropTypes || View.propTypes;

export default class PinchZoomView extends Component {
  static propTypes = {
    ...viewPropTypes,
    scalable: PropTypes.bool,
    minScale: PropTypes.number,
    maxScale: PropTypes.number
  };

  static defaultProps = {
    scalable: true,
    minScale: 0.5,
    maxScale: 2
  };

  constructor(props) {
    super(props);

    // const posData = this.props.posData
    // console.log("TEST " + posData);

    this.state = {
      scale: 1,
      lastScale: 1,
      offsetX: 0,
      offsetY: 0,
      lastX: 0,
      lastY: 0,
      lastMovePinch: false
    };
    this.distant = 150;
  }

  componentWillMount() {
    this.gestureHandlers = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminationRequest: event => true,
      onShouldBlockNativeResponder: event => false
    });
  }

  _handleStartShouldSetPanResponder = (event, gesture) => {
    // don't respond to single touch to avoid shielding click on child components
    return false;
  };

  _handleMoveShouldSetPanResponder = (event, gesture) => {
    return (
      this.props.scalable &&
      (Math.abs(gesture.dx) > 2 ||
        Math.abs(gesture.dy) > 2 ||
        gesture.numberActiveTouches === 2)
    );
  };

  _handlePanResponderGrant = (event, gesture) => {
    if (gesture.numberActiveTouches === 2) {
      let dx = Math.abs(
        event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX
      );
      let dy = Math.abs(
        event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY
      );
      let distant = Math.sqrt(dx * dx + dy * dy);
      this.distant = distant;
      console.log(this.distant);

    }
  };

  _handlePanResponderEnd = (event, gesture) => {
    this.setState({
      lastX: this.state.offsetX,
      lastY: this.state.offsetY,
      lastScale: props.state.scale
    });
  };

  _handlePanResponderMove = (event, gesture) => {
    // console.log("scale: " + this.state.scale + "\nlastscale: " + this.state.lastScale)
    // zoom
    if (gesture.numberActiveTouches === 2) {
      let dx = Math.abs(
        event.nativeEvent.touches[0].pageX - event.nativeEvent.touches[1].pageX
      );
      let dy = Math.abs(
        event.nativeEvent.touches[0].pageY - event.nativeEvent.touches[1].pageY
      );
      let distant = Math.sqrt(dx * dx + dy * dy);
      let scale = (distant / this.distant) * this.state.lastScale;
      //check scale min to max hello
      if (scale < this.props.maxScale && scale > this.props.minScale) {
        this.props.updateScale(scale);
        this.setState({ lastMovePinch: true });

      }
    }
    // translate
    else if (gesture.numberActiveTouches === 1) {
      if (this.state.lastMovePinch) {
        gesture.dx = 0;
        gesture.dy = 0;
      }
      let offsetX = this.state.lastX + gesture.dx / props.state.scale;
      let offsetY = this.state.lastY + gesture.dy / props.state.scale;
      // if ( offsetX < 0  || offsetY <  0 )
      this.setState({ offsetX, offsetY, lastMovePinch: false });
    }
  };

  render() {
    return (
      <View
        {...this.gestureHandlers.panHandlers}
        style={[
          styles.container,
          this.props.style,
          {
            transform: [
              { scaleX: props.state.scale },
              { scaleY: props.state.scale },
              { translateX: this.state.offsetX },
              { translateY: this.state.offsetY }
            ]
          }
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});