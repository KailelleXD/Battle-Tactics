import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Test extends Component {
    constructor(props) {
        super(props);

        this.val = {...this.props.val};

      }

    render() {
        return (
        <View style={[{
            transform: [
            { translateX: this.val.x },
            { translateY: this.val.y }
            ]},
                styles.positionStyle,
                styles.containerStyle
            ]}>
            <Text style={styles.textStyle}>Test Modal</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        opacity: 0.55,
    },
    positionStyle: {
        position: 'absolute',
        top: 30,
        left: 30,
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 15,
        backgroundColor: '#cc2010',
        borderColor: '#000',
        borderRadius: 12,
        borderWidth: 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 100,
        height: 150,
    }
})
