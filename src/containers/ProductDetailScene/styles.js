import {Dimensions} from 'react-native';
import {
  white,
  grey100,
  grey200,
  badgeBg,
  grey500,
  grey700,
  blueMain10,
  blueMain,
  grey300,
  blueGrey500,
} from '../../theme/variables/commonColor';
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
    backgroundColor: grey200,
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  carousel: {
    width: width,
    height: height / 3.1,
  },
  imgSlide: {
    width: width,
    height: height / 3.1,
  },
  bulletContainerStyle: {
    paddingTop: 20,
  },
  bulletsStyle: {
    backgroundColor: grey200,
    borderColor: 'transparent',
    width: 8,
    height: 8,
    margin: 6,
  },
  chosenStyle: {
    backgroundColor: white,
    width: 8,
    height: 8,
    margin: 6,
  },
  nameProductView: {
    marginBottom: 6,
    paddingVertical: 20,
    paddingHorizontal: 17,
    backgroundColor: white,
  },
  nameProductView2: {
    paddingVertical: 20,
    backgroundColor: white,
  },
  nameProductTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameProduct: {
    width: '80%',
    fontSize: 15,
    fontWeight: '600',
  },
  heartStyle: {
    fontSize: 20,
    color: grey700,
    marginRight: 0,
  },
  nameProductBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceStyle: {
    fontSize: 16,
    color: badgeBg,
    fontWeight: '700',
  },
  descritionStyle: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  descritionStyle2: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
    paddingHorizontal: 17,
  },
  descritionText: {
    fontSize: 12,
    color: grey700,
    marginBottom: 5,
  },
  productDetailTitle: {
    fontSize: 12,
    color: grey500,
    textTransform: 'capitalize',
  },
  productDetailMain: {
    fontSize: 12,
    color: grey700,
  },
  listView: {
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: grey100,
  },
  listItemView: {
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 0,
  },
  footerStyle: {
    backgroundColor: grey100,
  },
  buyBtnView: {
    flex: 1,
    padding: 5,
  },
  chatBtn: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    backgroundColor: white,
  },
  chatIcon: {
    color: blueMain10,
    fontSize: 18,
  },
  chatText: {
    color: blueMain10,
    fontSize: 11,
    textTransform: 'capitalize',
    paddingHorizontal: 20,
  },
  chatBtnView: {
    flex: 0,
    justifyContent: 'center',
  },
  buyBtn: {
    backgroundColor: blueMain,
    width: '100%',
  },
  buyText: {
    color: white,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  addCartBtnView: {
    flex: 0,
  },
  addCartBtn: {
    flexDirection: 'column',
    paddingHorizontal: 5,
    backgroundColor: white,
    marginLeft: 5,
  },
  cartIcon: {
    color: blueMain10,
    fontSize: 20,
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: white,
    marginRight: 2,
  },
  itemIcon: {
    color: blueMain10,
    fontSize: 25,
    marginRight: 15,
  },
  itemText: {
    width: 80,
    fontSize: 12,
    color: grey500,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  profileView: {
    flexDirection: 'row',
    paddingBottom: 0,
  },
  avtStyle: {
    // borderRadius: 8,
    // marginRight: 25,
  },
  nameView: {
    // alignSelf: 'center',
    marginLeft: 20,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: '700',
    width: 180,
  },
  subName: {
    fontSize: 13,
    color: grey500,
    marginBottom: 15,
  },
  border: {
    borderLeftColor: grey100,
    borderRightColor: grey100,
    borderLeftWidth: 2,
    borderRightWidth: 2,
  },
  itemNum: {
    fontSize: 14,
    color: badgeBg,
    textAlign: 'center',
  },
  itemNumText: {
    fontSize: 12,
    color: grey500,
    textAlign: 'center',
  },
  shopView: {
    marginBottom: 6,
    backgroundColor: white,
  },
  viewShopBtn: {
    marginLeft: 'auto',
    borderColor: grey500,
    borderRadius: 6,
    height: 25,
    marginTop: 5,
  },
  viewShopText: {
    color: grey500,
    fontSize: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  numReview: {
    fontSize: 12,
    color: grey700,
    marginLeft: 7,
  },
  moreBtn: {
    height: 20,
  },
  moreIcon: {
    color: grey500,
    marginRight: 0,
  },
  avtReview: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 12,
    fontWeight: '600',
  },
  dateReview: {
    fontSize: 10,
    color: grey500,
  },
  likeIcon: {
    fontSize: 18,
    color: grey500,
    marginRight: 0,
    marginLeft: 0,
  },
  likeBtn: {
    height: 30,
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  itemSameShop: {
    width: 100,
    marginRight: 12,
    marginLeft: 0,
  },
  itemSameImg: {
    height: height / 6.5,
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  itemSameTitle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 5,
  },
  titleItem: {
    fontSize: 12,
  },
  textPriceItem: {
    fontSize: 10,
    color: blueGrey500,
    textDecorationLine: 'line-through',
    paddingRight: 7,
  },
  saleItem: {
    fontSize: 10,
    color: grey500,
    paddingRight: 7,
  },
  soldItem: {
    fontSize: 10,
    color: grey500,
  },
  textPriceSale: {
    fontSize: 15,
    fontWeight: 'bold',
    color: badgeBg,
  },
  gridRecommend: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  colRecommend: {
    marginHorizontal: 4,
    marginBottom: 8,
    padding: 8,
    backgroundColor: grey100,
    borderRadius: 4,
    width: (width / 2) - 20,
  },
  imgRecommend: {
    width: '100%',
    height: height / 4.5,
    marginBottom: 5,
    borderRadius: 4,
    overflow: 'hidden',
  },
};
