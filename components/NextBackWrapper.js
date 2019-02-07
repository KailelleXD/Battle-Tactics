import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import NextButton from './NextButton';
import BackButton from './BackButton';

const NextBackWrapper = (props) =>
      <Grid>
          <Col style={styles.col}>
            <BackButton />
          </Col>
          <Col style={styles.col}>
            <NextButton path={props.path} />
          </Col>
      </Grid>

const styles = StyleSheet.create({
    col: {
        display: "flex",
        alignItems: "center",
    }
})

export default NextBackWrapper
