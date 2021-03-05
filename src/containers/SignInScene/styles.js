import { Dimensions, Platform } from 'react-native';
import {
  backgroundApp,
  iconBack,
  fullBlack,
  btnPrimary,
  colorText,
  white, blueMain,
} from '../../theme/variables/commonColor';
let { height } = Dimensions.get('window');

if (Platform.OS !== 'ios') {
  height -= 25;
}
export default {
  contentContainer: {
    justifyContent: 'flex-start',
    backgroundColor: backgroundApp,
    minHeight: '100%',
  },
  btnBack: {
    height: 30,
    padding: 0
  },
  iconColor: {
    color: iconBack,
    marginLeft: 0
  },
  colorTitle: {
    marginTop:40,
    marginBottom: height/7,
    color: fullBlack,
    fontWeight: 'bold'
  },
  checkBox: {
    color: btnPrimary,
    borderColor: btnPrimary,
    marginRight: 10,
    height: 18,
    width: 18,
    paddingBottom: 0,
    marginTop: 0,
    fontSize: 15,
    marginLeft: 0,
    paddingLeft: 0,
  },
  colorText: {
    color: colorText,
    marginLeft: 10,
    fontSize: 13,
  },
  btnNext: {
    marginTop: 30,
    backgroundColor: blueMain,
    borderColor: blueMain,
    borderRadius: 7,
  },
  textNext: {
    fontSize: 13,
    color: white,
    fontWeight: 'bold'
  },
  viewWe: {
    marginTop: 30
  },
  colorTextFinal: {
    color: colorText,
    fontSize: 13,
    textAlign: 'center'
  },
  centerRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btnCol: {
    textAlign: 'center',
    justifyContent: 'center',
    padding:0,
    margin: 0,
    height: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  textSignUp: {
    color: blueMain,
    textTransform: 'capitalize',
    paddingLeft: 3,
  }
};
