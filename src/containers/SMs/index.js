/**
 *
 * SMs Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Button, Card, Col,
    Container, Content, H3, Icon, Row, Text, View, CardItem, Header
} from 'native-base';
import CodeInput from 'react-native-confirmation-code-input';
import { blueMain, stepSubTitle, } from '../../theme/variables/commonColor';
import Storage from '../../utils/DeviceStorage';
// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import headerStyle from "../../theme/variables/headerStyle";
import {ScrollView} from "react-native";
import AppHeaderSignIn from "../../components/AppHeaderSignIn";

export class SMs extends React.Component { // eslint-disable-line

    render() {

        return (
            <Container>
                <AppHeaderSignIn />
                <ScrollView>
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
                        <H3 style={styles.colorTitle}>Enter code</H3>
                        <View style={styles.centerRow}>
                            <Icon type="FontAwesome" name="asterisk" style={styles.greenFl}/>
                            <Icon type="FontAwesome" name="asterisk" style={styles.greenFl}/>
                            <Icon type="FontAwesome" name="asterisk" style={styles.greenFl}/>
                            <Icon type="FontAwesome" name="asterisk" style={styles.greenFl}/>
                            <Icon type="FontAwesome" name="asterisk" style={styles.greenFl}/>
                            <Icon type="FontAwesome" name="asterisk" style={styles.greenFl}/>
                        </View>
                        <View padder style={styles.viewWe}>
                            <Text style={styles.colorText}>We have sent you an SMS on +1 (510)-201-2217
                                with 6 digit verification code.</Text>
                        </View>
                        <View padder>
                            <Card style={styles.cardVertical}>
                                <CardItem>
                                    <CodeInput
                                        containerStyle={{top: -35, paddingVertical: 15, flex:1, justifyContent:'center' }}
                                        secureTextEntry
                                        className="border-b"
                                        codeLength={6}
                                        space={15}
                                        size={30}
                                        activeColor={blueMain}
                                        inactiveColor={stepSubTitle}
                                        inputPosition='left'
                                        onFulfill={(code) => console.log(code)}
                                    />
                                </CardItem>
                                <CardItem style={styles.centerRow}>
                                    <Button
                                        block
                                        style={styles.btnNext}
                                        onPress={() => {
                                            Storage.save('currentUser');
                                            Actions.reset('homePublic');
                                        }}
                                    >
                                        <Text style={styles.textSend}>SUBMIT</Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        </View>
                        <View padder>
                            <Text style={styles.colorReceive}>Did not receive the code?</Text>
                        </View>
                        <View padder>
                            <Row>
                                <Col>
                                    <Button style={styles.btnCol} transparent>
                                        <Text style={styles.reSend}>Re-send</Text>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button style={styles.btnCol} transparent>
                                        <Text style={styles.reSend}>Get a call now</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

SMs.defaultProps = {
};

SMs.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(SMs);
