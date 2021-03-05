/**
 *
 * EditAddressScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  Container,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  View,
  Alert,
  Body,
  Right,
} from 'native-base';
import {ScrollView, Modal} from 'react-native';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';
import AppHeader from '../../components/AppHeader';

// ./
import styles from './styles';
import AppHeaderSignIn from '../../components/AppHeaderSignIn';
import styleSignIn from '../../theme/variables/styleSignIn';
import EditAddressForm from '../../forms/EditAddressForm';
import EditProfileForm from '../../forms/EditProfileForm';

export class EditAddressScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      modalEditAddress: false,
      modalAddNew: false,
    };
  }

  // componentDidMount() {
  // }
  setModalEdit(visible) {
    this.setState({modalEditAddress: visible});
  }
  setModalNew(visible) {
    this.setState({modalAddNew: visible});
  }

  render() {
    return (
      <Container>
        <AppHeader
          title="editAddress"
          hasRightCart={false}
          hasRightSet={false}
          hasRightSearch={false}
        />
        <ScrollView style={styles.content}>
          <Card transparent>
            <CardItem
              style={styles.cardItemView}
              button
              onPress={() => {
                this.setModalEdit(true);
              }}>
              <Text style={styles.nameEditStyle}>Cassie Donk</Text>
              <Text style={styles.subNameEdit}>(+66)083225666</Text>
              <Text style={styles.subNameEdit}>England</Text>
              {/*//country*/}
              <Text style={styles.subNameEdit}>Herts AL9 2RS</Text>
              {/*//post code*/}
              <Text style={styles.subNameEdit}>St Albans</Text>
              {/*//city*/}
              <Text style={styles.subNameEdit}>20, London Road</Text>
              {/*street*/}
            </CardItem>
          </Card>
          <Button
              full
              transparent style={styles.addNewBtn}
              onPress={() => {
              this.setModalNew(true);
          }}>
            <Icon name="add" style={styles.addIcon} />
            <Text style={styles.addNewText}>{translate('addNewAddress')}</Text>
          </Button>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalEditAddress}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <AppHeaderSignIn />
            <View style={styles.viewModalEdit}>
              <Left style={{flex: 1}}>
                <Button
                  transparent
                  onPress={() => {
                    this.setModalEdit(!this.state.modalEditAddress);
                  }}>
                  <Icon
                    name="close"
                    type="AntDesign"
                    style={styles.iconModalClose}
                  />
                </Button>
              </Left>
              <Body style={{flex: 0, paddingTop: 4}}>
                <Text style={styles.titleModal}>
                  {translate('editAddress')}
                </Text>
              </Body>
              <Right style={{flex: 1}} />
            </View>
            <EditAddressForm
              initialValues={{
                name: 'Cassie Donk',
                phoneNumber: '(+66)083225666',
                country: 'England',
                postCode: 'Herts AL9 2RS',
                city: 'St Albans',
                district: '083225666',
                localAddress: '20, London Road',
              }}
            />
            <Button full transparent style={styles.deleteBtn}>
              <Text style={styles.deleteText}>
                {translate('deleteAddress')}
              </Text>
            </Button>
            <View style={styles.saveView}>
              <Button
                full
                transparent
                style={styles.saveBtn}
                onPress={() => {
                  this.setModalEdit(!this.state.modalEditAddress);
                }}>
                <Text style={styles.saveText}>{translate('saveChange')}</Text>
              </Button>
            </View>
          </Modal>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalAddNew}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <AppHeaderSignIn />
            <View style={styles.viewModalEdit}>
                <Left style={{flex: 1}}>
                    <Button
                        transparent
                        onPress={() => {
                            this.setModalNew(!this.state.modalAddNew);
                        }}>
                        <Icon
                            name="close"
                            type="AntDesign"
                            style={styles.iconModalClose}
                        />
                    </Button>
                </Left>
                <Body style={{flex: 0, paddingTop: 4}}>
                    <Text style={styles.titleModal}>
                        {translate('newAddress')}
                    </Text>
                </Body>
                <Right style={{flex: 1}} />
            </View>
            <EditAddressForm />
            <View style={styles.saveView}>
                <Button
                    full
                    transparent
                    style={styles.saveBtn}
                    onPress={() => {
                        this.setModalNew(!this.state.modalAddNew);
                    }}>
                    <Text style={styles.saveText}>{translate('save')}</Text>
                </Button>
            </View>
        </Modal>
        </ScrollView>
      </Container>
    );
  }
}

EditAddressScene.defaultProps = {};

EditAddressScene.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(EditAddressScene);
