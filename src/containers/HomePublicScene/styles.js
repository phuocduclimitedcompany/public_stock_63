import {Dimensions, Platform} from 'react-native';
import {white, grey100, minBlack36} from '../../theme/variables/commonColor';

const {width} = Dimensions.get('window');
let {height} = Dimensions.get('window');

if (Platform.OS !== 'ios') {
  height -= 25;
}
export default {
  contentContainer: {
    justifyContent: 'flex-start',
    backgroundColor: white,
    height: '100%',
  },
  content: {
    backgroundColor: white,
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  gridView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  colView: {
    borderRadius: 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: width / 2.5,
    height: width / 2.8,
    alignSelf: 'center',
    position: 'relative',
  },
  btnView: {
    position: 'absolute',
    width: width / 2.5,
    height: width / 2.8,
    backgroundColor: minBlack36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: white,
    fontSize: 15,
    // fontFamily: fontFamily.MontserratMedium,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginHorizontal: 10,
  },
};
