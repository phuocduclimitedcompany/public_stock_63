import {Dimensions, Platform} from 'react-native';
import {white, blueMain, yellow800, grey300, grey500, fullBlack} from './commonColor';
const {width} = Dimensions.get('window');
let {height} = Dimensions.get('window');

if (Platform.OS !== 'ios') {
  height -= 25;
}
export default {
  p3: {
    padding: 3,
  },
  p7: {
    padding: 7,
  },
  pV5: {
    paddingVertical: 5,
  },
  pV10: {
    paddingVertical: 10,
  },
  pH5: {
    paddingHorizontal: 5
  },
  pH10: {
    paddingHorizontal: 10
  },
  pH15: {
    paddingHorizontal: 15
  },
  ml0: {
    marginLeft: 0,
  },
  ml10: {
    marginLeft: 10
  },
  ml20: {
    marginLeft: 20,
  },
  mr0: {
    marginRight: 0,
  },
  mr10: {
    marginRight: 10
  },
  mr20: {
    marginRight: 20,
  },
  mtA5: {
    marginTop: -5,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mb0: {
    marginBottom: 0
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  pt0: {
    paddingTop: 0,
  },
  pt7: {
    paddingTop: 7,
  },
  pb0: {
    paddingBottom: 0,
  },
  pb7: {
    paddingBottom: 7,
  },
  pl0: {
    paddingLeft: 0,
  },
  pl5: {
    paddingLeft: 5,
  },
  pl12: {
    paddingLeft: 12,
  },
  pr0: {
    paddingRight: 0,
  },
  pr5: {
    paddingRight: 5,
  },
  pr7: {
    paddingRight: 7,
  },
  pr12: {
    paddingRight: 12,
  },
  colorWhite: {
    color: white
  },
  textTitleSearch: {
    fontSize: 35,
    marginLeft: 3,
    color: blueMain,
    marginBottom: 12,
    fontWeight: 'bold'
  },
  iconClose: {
    color: blueMain,
    marginLeft: 3,
    marginRight: 0,
  },
  rowCenter: {
    alignItems: 'center'
  },
  imgShop: {
    width: '100%',
    height: 120
  },
  fabStyle: {
    backgroundColor: yellow800,
    width: 50,
    height: 50
  },
};
