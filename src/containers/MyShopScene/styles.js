import {
  white,
  grey200,
  blueMain,
  minBlack,
  lightBlack,
  transparent,
  badgeBg,
  iconBack,
  blueGrey800,
  blueGrey500
} from '../../theme/variables/commonColor';
import {Dimensions} from 'react-native';
let {height} = Dimensions.get('window');
let {width} = Dimensions.get('window');
if (Platform.OS !== 'ios') {
  height -= 25;
}
export default {
  imgBg: {
    carouselImgStyle: {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
    },
  },
  avatar: {
    height: 55,
    width: 55,
    borderRadius: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  viewDot: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  btnEditBg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: minBlack,
    borderWidth: 0,
    borderColor: transparent,
    width: 23,
    height: 23,
    borderRadius: 11.5,
    justifyContent: 'center',
  },
  iconCamera: {
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    color: white,
  },
  cameraBg: {
    position: 'absolute',
    width: '100%',
    bottom: 8,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    right: 10
  },
  nameShop: {
    color: white,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  viewBg: {
      height: 250,
      width: width,
  },
  bgBlackOpacity: {
    width: '100%',
    height: 250,
    backgroundColor: lightBlack,
  },
  viewThumbnail: {
    width: '100%',
    alignItems: 'center',
  },
  btnEdit: {
    position: 'absolute',
    bottom: 11,
    left: width / 2 + 2,
    backgroundColor: minBlack,
    borderWidth: 0,
    borderColor: transparent,
    width: 23,
    height: 23,
    borderRadius: 11.5,
    justifyContent: 'center',
  },
  viewRow: {
    width: width,
    height: 40,
    alignItems: 'center'
  },
  rowStyle: {
    width: '80%',
    height: 40
  },
  followStyle: {
    fontSize: 10,
    marginTop: 6,
    fontWeight: 'normal'
  },
  iconStar: {
    fontSize: 17,
    paddingRight: 5
  },
  textStar: {
    fontSize: 12,
    paddingRight: 10
  },
  textMain: {
    fontSize: 14,
    color: badgeBg,
  },
  textExtra: {
    fontSize: 11,
    color: iconBack,
  },
  titleCard: {
    marginTop: 8,
    marginBottom: 5,
    paddingTop: 7,
    paddingBottom: 7,
  },
  titleCategory: {
    fontSize: 20,
    color: blueGrey800,
    fontWeight: 'bold'
  },
  myCard: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  imgContent: {
    width: width / 3,
    height: 110,
  },
  textPriceSale: {
    fontSize: 15,
    fontWeight: 'bold',
    color: badgeBg,
  },
  titleContent: {
    marginBottom: 3,
    fontSize: 12,
  },
  textPrice: {
    fontSize: 12,
    color: blueGrey500,
    textDecorationLine: 'line-through',
    paddingRight: 7
  },
};
