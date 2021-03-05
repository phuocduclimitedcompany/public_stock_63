import {Dimensions, Platform} from 'react-native';
import {
  white,
  blueMain,
  minBlack36,
  grey200,
  grey300,
  grey500,
  grey700,
} from './commonColor';
const {width} = Dimensions.get('window');
let {height} = Dimensions.get('window');

if (Platform.OS !== 'ios') {
  height -= 25;
}
export default {
  headerBackground: {
    backgroundColor: white,
    borderBottomWidth: 1,
    borderBottomColor: grey200,
  },
  mT20: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: grey300,
    marginHorizontal: 15,
  },
  pL0: {
    paddingLeft: 0,
  },
  pR0: {
    paddingRight: 0,
  },
  pR5: {
    paddingRight: 5,
  },
  leftView: {
    flex: 1,
    paddingLeft: 5,
  },
  rightView: {
    flex: 1,
    paddingRight: 5,
  },
  bodyView: {
    flex: 0,
  },
  homeTitle: {
    color: blueMain,
    fontSize: 20,
    fontWeight: '700',
  },
  pageTitle: {
    color: blueMain,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  btnLeft: {
    paddingLeft: 0,
  },
  textLeft: {
    color: blueMain,
    fontSize: 14,
    marginTop: 4,
  },
  iconLeft: {
    color: blueMain,
    fontSize: 28,
    marginLeft: 0,
    marginRight: 5,
  },
  iconRight: {color: blueMain},
  menuBg: {
    backgroundColor: white,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  topView: {
    // position: 'absolute',
    top: 5,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    // paddingLeft: 10,
  },
  buttonBack: {
    // position: 'absolute',
    // right: 5,
    // top: 5,
    // paddingLeft: 10,
  },
  iconBack: {
    fontSize: 24,
    color: blueMain,
    marginRight: 0,
  },
  headerStatusBar: {
    backgroundColor: white,
    height: 1,
    borderBottomWidth: 0,
    borderColor: white,
    elevation: 0,
  },
  logoutIcon: {
    color: blueMain,
    fontSize: 20,
  },
  logoutIconView: {
    backgroundColor: grey300,
    padding: 8,
    marginRight: 20,
    borderRadius: 20,
  },
  profileDrawView: {
    flexDirection: 'row',
    // marginTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    marginLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: grey300,
  },
  avtDrawStyle: {
    borderRadius: 8,
    marginRight: 15,
  },
  nameDrawStyle: {
    fontSize: 15,
    fontWeight: '700',
  },
  subNameDraw: {
    fontSize: 13,
    color: grey500,
  },
  listMenuView: {
    marginVertical: 25,
    marginLeft: 10,
  },
  badgeCartStyle: {
    height: 15,
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: -4,
  },
  badgeStyle: {
    height: 15,
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: 2,
  },
  badgeText: {
    fontSize: 8,
    lineHeight: 12,
  },
  settingBtn: {
    backgroundColor: grey700,
    height: 35,
    elevation: 0,
    marginRight: 10,
  },
  settingText: {
    fontSize: 12,
    paddingBottom: 3,
  },
  signOutBtn: {
    borderColor: blueMain,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderBottomWidth: 1.5,
    height: 35,
  },
  signOutText: {
    color: blueMain,
    fontSize: 12,
    paddingBottom: 3,
  },
  listBtnView: {
    flexDirection: 'row',
    padding: 25,
  },
  logo: {
    color: blueMain,
    marginRight: 7,
    fontWeight:'bold'
  }
};
