import {white, badgeBg, blueGrey500, blueMain, grey500, blueMain01, transparent, fullBlack, brandSidebar} from '../../theme/variables/commonColor';
import {Dimensions} from "react-native";
const {width} = Dimensions.get('window');
let {height} = Dimensions.get('window');
if (Platform.OS !== 'ios') {
  height -= 25;
}
export default {
  iconClose: {
    color: blueGrey500,
    marginLeft: 3,
  },
  imgContent: {
    width: width / 3,
    height: 110,
  },
  titleContent: {
    marginBottom: 3,
    fontSize: 13.5,
    paddingLeft: 7,
    fontWeight: 'bold'
  },
  textContent: {
    fontSize: 10,
    color: blueGrey500,
    paddingLeft: 7,
  },
  btnPlus: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: white,
    justifyContent: 'center',
    borderColor: brandSidebar,
    borderWidth: 0.3
  },
  iconPlus: {
    fontSize: 14,
    color: fullBlack
  },
  textPrice: {
    fontSize: 12,
    color: blueGrey500,
    paddingLeft: 7,
    textDecorationLine: 'line-through'
  },
  textPriceSale: {
    fontSize: 14,
    color: badgeBg,
    fontWeight: 'bold',
    paddingLeft: 7,
  },
  rowCenter: {
    alignItems: 'center',
  },
  btnNext: {
    backgroundColor: blueMain,
    borderColor: blueMain,
    borderRadius: 7,
  },
  textNext: {
    fontSize: 13,
    color: white,
    fontWeight: 'bold'
  },
  myCard: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  titlePrice: {
    fontSize: 13,
    color: blueGrey500,
    paddingLeft: 7
  },
  textTotal: {
    fontSize: 17,
    textAlign: 'right',
    marginRight: 7
  },
  inputSearch: {
    color: grey500,
    fontSize: 14,
    paddingRight: 15,
    height: 40,
  },
  searchItem: {
    backgroundColor: blueMain01,
    borderColor: transparent,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 40,
    borderRadius: 8,
  },
  btnPromo: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    backgroundColor: blueMain,
    justifyContent: 'center',
    marginLeft: -28
  },
  btnIconPromo: {
    fontSize: 18,
  },
  footerCart: {
   height: 145,
    backgroundColor: transparent
  }
};
