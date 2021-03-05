import { blueGrey200, black06, white, brandLight, pureBlack, blueMain, generateBorder, blueMain10, green27, white7, white4 } from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
export default {
  contentStyle: {
    backgroundColor: white,
    paddingTop: 20,
    marginBottom: 20
  },
  footerMess: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: brandLight,
    paddingLeft: 18,
    paddingRight: 18,
    maxHeight: 48,
  },
  iconAdd: {
    marginLeft: 0,
    fontSize: 20,
    color: blueMain,
    marginRight: 0,
  },
  textareaMess: {
    width: '100%',
    maxHeight: 100,
    minHeight: 36,
    fontSize: 10,
    color: pureBlack,
    paddingTop: 23,
  },
  iconMicroRight: {
    width: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0,
    maxHeight: 100,
    minHeight: 36,
  },
  iconMicro: {
    marginLeft: 0,
    fontSize: 20,
    color: blueMain,
    marginRight: 0,
  },
  leftFooter: {
    width: 20,
    flex: 0,
    maxHeight: 100,
    minHeight: 36,
  },
  bodyFooter: {
    flex: 1,
    maxHeight: 100,
    minHeight: 36,
  },
  headerEven: {
    height: 70 + 13,
    paddingLeft: 0,
    paddingRight: 0,
  },
  flexStartBran: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: brandLight,
  },
  cardItemHeader: {
    width: '100%',
    backgroundColor: white,
    height: 70,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 0,
    borderRadius: 0
  },
  leftFeedDetail: {
    width: 40,
    flex: 0,
  },
  leftBtnFeedDetail: {
    borderRadius: 0,
    paddingRight: 0,
    borderColor: 0,
    height: '100%',
  },
  iconBackFeedDetail: {
    color: blueMain,
    fontSize: 24,
    marginLeft: 0,
    marginRight: 0,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0
  },
  viewPositionDetail: {
    width: 50,
    position: 'relative',
  },
  avtHeader: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  titleStyleFeedDetail: {
    fontSize: 13,
    color: blueMain,
    paddingLeft: 9,
    fontWeight: 'bold'
  },
  titleStyleFeedLine2: {
    lineHeight: 15,
    paddingTop: 10,
  },
  subTitleFeedDetail: {
    paddingLeft: 9,
    fontSize: 10,
    color: white,
  },
  viewCard: {
    marginLeft: 18,
    marginRight: 18,
    borderWidth: 0,
  },
  viewText: {
    backgroundColor: blueMain10,
    marginLeft: 82,
    marginRight: 82,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 6,
    borderRadius: 3,
    marginBottom: 30,
  },
  todayStyle: {
    fontSize: 9,
    color: generateBorder,
  },
  textLeft: {
    alignSelf: 'flex-start',
    maxWidth: width / 1.42,
    marginBottom: 10,
  },
  cardT: {
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingTop: 0,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  thumbT: {
    width: 36,
    flex: 0,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  thumbnailImage: {
    width: 28,
    height: 28,
    borderRadius: 28 / 2,
  },
  bodyT: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
  },
  bodyLeft: {
    alignItems: 'flex-start',
  },
  viewTextLeft: {
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 5,
    backgroundColor: blueGrey200,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 10,
    width: '80%',
  },
  textMessFirst: {
    fontSize: 10,
    color: white,
    marginRight: 35,
  },
  time: {
    fontSize: 8,
    color: white,
    alignSelf: 'flex-end',
    paddingRight: 5,
  },
  textRight: {
    alignSelf: 'flex-end',
  },
  viewTextRight: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 10,
    backgroundColor: blueMain,
  },
  textMessLong: {
    marginRight: 0,
  },
  viewImage: {
    height: 130,
    width: '80%',
    borderTopRightRadius: 10,
    position: 'relative',
    top: 0,
    left: 0,
  },
  styleImage: {
    height: 130,
    width: '100%',
  },
  Opp: {
    width: '100%',
    height: 30,
    backgroundColor: black06,
    position: 'absolute',
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOpp: {
    fontSize: 9,
    color: white,
  },
  viewTextImage: {
    borderTopRightRadius: 0,
  },
  iconDot: {
    color: white,
    fontSize: 6,
  },
  iconDotSecond: {
    color: white7,
    marginRight: 2,
    marginLeft: 2,
  },
  iconDotThirst: {
    color: white4,
  },
  dotStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
    width: null,
  },
};
