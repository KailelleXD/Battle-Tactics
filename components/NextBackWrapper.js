import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import NextButton from './NextButton';
import BackButton from './BackButton';

const NextBackWrapper = (props) =>
    <Container>
      <Grid>
          <Col style={styles.col}>
            <BackButton />
          </Col>
          <Col style={styles.col}>
            <NextButton path={props.path} />
          </Col>
      </Grid>
    </Container>

const styles = StyleSheet.create({

})

export default NextBackWrapper
