/**
 *
 * PhoneVerification Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Button, Card, CardItem,
    Container, Content, Form, Icon, Input, Text, View, Body, Header,
} from 'native-base';
import {Image, ScrollView} from 'react-native';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import headerStyle from "../../theme/variables/headerStyle";
import AppHeaderSignIn from "../../components/AppHeaderSignIn";

export class PhoneVerification extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  // componentDidMount() {
  // }

    render() {
        return (
            <Container>
                <AppHeaderSignIn />
                <ScrollView
                >
                    <View padder>
                        <View padder>
                            <View padder>
                                <Button
                                    transparent
                                    onPress={() => {
                                        Actions.pop();
                                    }}
                                    style={styles.btnBack}
                                >
                                    <Icon type="AntDesign" name="close" style={styles.iconColor}/>
                                </Button>
                            </View>
                        </View>
                        <View style={styles.centerRow}>
                            {/* eslint-disable-next-line global-require */}
                            <Image source={require('../../assets/images/verification.png')} style={styles.verification}/>
                        </View>
                        <View style={styles.centerRow}>
                            <Text style={styles.colorText}>Enter your mobile number we will send you the OTP to verify later</Text>
                        </View>
                        <View padder>
                            <Card style={styles.cardVertical}>
                                <CardItem style={styles.cardItemPhone}>
                                    <Form style={styles.centerRow}>
                                        <View style={styles.viewFirst}>
                                            <Input style={styles.inputFirst} keyboardType="numeric" value = "+1"/>
                                        </View>
                                        <View style={[styles.centerRow, styles.viewSecond]}>
                                            <Input style={styles.inputSecond} keyboardType="numeric" value = "(510)-201-2217"/>
                                            <Icon name='checkmark-circle' style={styles.iconCheckMark}/>
                                        </View>
                                    </Form>
                                </CardItem>
                                <CardItem>
                                    <Button
                                        block
                                        onPress={() => {
                                            Actions.push('sMS');
                                        }}
                                        style={styles.btnNext}
                                    >
                                        <Text style={styles.textSend}>SEND</Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

PhoneVerification.defaultProps = {
};

PhoneVerification.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(PhoneVerification);
