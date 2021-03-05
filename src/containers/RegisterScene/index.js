/**
 *
 * RegisterScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Button,
    Container, Content, H1, Header, Icon, Text, View,
} from 'native-base';
import { ScrollView, StatusBar } from 'react-native';
import RegisterForm from "../../forms/RegisterForm";
// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import Storage from "../../utils/DeviceStorage";
import AppHeaderSignIn from "../../components/AppHeaderSignIn";

export class RegisterScene extends React.Component { // eslint-disable-line
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
        };
    }

    onSubmit = (value, distch, form) => {
        const data = value.toJS();
        this.setState({ spinner: true });
        setTimeout(() => {
            this.setState({ spinner: false });
            Storage.save('currentUser', JSON.stringify(data));
            Actions.push('phoneVerification');
        }, 1000);
    };

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
                                <Icon type="MaterialIcons" name="keyboard-backspace" style={styles.iconColor}/>
                            </Button>
                            <H1 style={styles.colorTitle}>Register</H1>
                        </View>
                    </View>
                    <View padder>
                        <RegisterForm
                            onSubmit={(value, distch, form) =>
                                this.onSubmit(value, distch, form)
                            }
                            setRef={e => {
                                this.form = e;
                            }}
                            initialValid={{
                                // firstName: { required: true},
                                // lastName: { required: true},
                                // email: { required: true, isEmail: true },
                                // phone: { required: true},
                                // address: { required: true},
                            }}
                        />
                        <Button
                            style={styles.btnNext}
                            primary
                            block
                            onPress={() => this.form.props.onSubmit()}
                        >
                            <Text style={styles.textNext}>NEXT</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
  }
}

RegisterScene.defaultProps = {
};

RegisterScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(RegisterScene);
