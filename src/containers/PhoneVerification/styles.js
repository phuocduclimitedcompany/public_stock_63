import { Dimensions } from 'react-native';
import {
  white,
  colorClose,
  colorText,
  btnPrimary,
  fullBlack,
  green27,
  grey700,
  borderCard,
  blueMain
} from '../../theme/variables/commonColor';
const { width } = Dimensions.get('window');
export default {
  contentContainer: {
    justifyContent: 'flex-start',
    backgroundColor: white,
    height: '100%',
  },
  btnBack: {
    height: 30,
    padding: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  iconColor: {
    color: colorClose,
    marginLeft: 0
  },
  verification: {
    width: 100,
    marginTop: 25,
    marginBottom: 25
  },
  colorText: {
    color: colorText,
    fontSize: 14,
    width: '80%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  centerRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  cardVertical: {
    borderRadius: 7,
    borderColor: borderCard,
    marginTop: 50,
    shadowColor: borderCard,
    paddingTop: 15,
    paddingBottom: 15,
  },
  btnNext: {
    backgroundColor: blueMain,
    borderColor: blueMain,
    width: '100%',
    borderRadius: 7,
  },
  textSend: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  cardItemPhone: {
    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingRight: 0,
    // paddingLeft: 0,
    // marginBottom: 30
  },
  viewFirst: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  inputFirst: {
    borderWidth: 1,
    borderColor: borderCard,
    height: 50,
    borderRadius: 8,
    color: fullBlack,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewSecond: {
    width: width - 144,
    height: 50,
    borderWidth: 1,
    borderColor: borderCard,
    borderRadius: 7,
    alignItems: 'center'
  },
  inputSecond: {
    height: 50,
    color: fullBlack,
    fontSize: 15,
    fontWeight: 'bold'
  },
  iconCheckMark: {
    marginRight: 10,
    color: green27
  }

};
