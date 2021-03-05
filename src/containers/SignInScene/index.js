/**
 *
 * SignInScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Button, CheckBox, Col,
    Container, Content, H1, Header, Icon, Row, Text, View,
} from 'native-base';
import { ScrollView } from 'react-native';
import SignInForm from "../../forms/SignInForm";
// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import { btnPrimary, blueMain } from '../../theme/variables/commonColor';
import Storage from '../../utils/DeviceStorage';
import AppHeaderSignIn from '../../components/AppHeaderSignIn';
import styleSignIn from "../../theme/variables/styleSignIn";
export class SignInScene extends React.Component { // eslint-disable-line
    onSubmit = value => {
        this.setState({ spinner: true });
        setTimeout(() => {
            this.setState({ spinner: false });
            Storage.save('currentUser', JSON.stringify(value.toJS()));
            Actions.reset('homePublic');
        }, 1000);
        // throw new SubmissionError({ email: ' ', password: ' ' });
    };

    render() {
        return (
            <Container>
               <AppHeaderSignIn />
                <ScrollView
                >
                    <View padder>
                        <View padder>
                            <H1 style={styles.colorTitle}>{translate('signIn')}</H1>
                        </View>
                        <View padder>
                            <SignInForm
                                onSubmit={(value, distch, form) => this.onSubmit(value, distch, form)}
                                setRef={e => {
                                    this.form = e;
                                }}
                                initialValid={{
                                    // email: { required: true, isEmail: true},
                                    // password: { required: true, minLength: 6},
                                }}
                            />
                        </View>
                        <View style={{marginTop: 10}}>
                            <Row>
                                <Col>
                                    <Row>
                                        {/*<CheckBox*/}
                                        {/*    checked*/}
                                        {/*    style={[styles.checkBox, {backgroundColor: btnPrimary}]}*/}
                                        {/*/>*/}
                                        {/*<Text style={styles.colorText}>Remember me</Text>*/}
                                    </Row>
                                </Col>
                                <Col style={{marginRight: 10}}>
                                    <Text style={[styles.colorText, {color: blueMain, textAlign: 'right'}]}>{translate('forgotPassword')}</Text>
                                </Col>
                            </Row>
                        </View>
                        <View padder>
                            <Button
                                style={styles.btnNext}
                                primary
                                block
                                onPress={() => this.form.props.onSubmit()}
                            >
                                <Text style={styles.textNext}>LOGIN</Text>
                            </Button>
                            <View padder>
                                <View style={styles.centerRow}>
                                    <Text style={styles.colorTextFinal}>New user</Text>
                                    <Button
                                        transparent
                                        onPress={() => {
                                            Actions.push('register');
                                        }}
                                        style={styles.btnCol}
                                    >
                                        <Text style={[styles.colorTextFinal, styles.textSignUp]}>Sign Up</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

SignInScene.defaultProps = {
};

SignInScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(SignInScene);
