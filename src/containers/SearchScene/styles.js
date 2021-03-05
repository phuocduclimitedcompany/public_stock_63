import {  white,
    grey200,
    blueGrey400,
    blueGrey100,
    blueMain,
    blueMain01,
    grey500,
    blueGrey200,
    indigo200,
    greyD1,
    grey400,
    grey600,
    blueMainLightBg,
    blueGrey500,
    blueMain200, } from '../../theme/variables/commonColor';
import {Dimensions} from "react-native";
const {width} = Dimensions.get('window');
let {height} = Dimensions.get('window');
if (Platform.OS !== 'ios') {
    height -= 25;
}
export default {
    searchItem: {
        backgroundColor: blueMain01,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8,
    },
    iconSearch: {
        color: grey500,
        fontSize: 20,
    },
    inputSearch: {
        color: grey500,
        fontSize: 14,
        paddingRight: 15,
        height: 40,
    },
    scrollBtn: {
        marginRight: 10,
        marginLeft: 2,
        borderRadius: 6,
        height: 36,
        elevation: 0,
    },
    activeBg: {
        backgroundColor: blueGrey400,
    },
    noActiveBg: {
        backgroundColor: blueGrey100,
    },
    scrollText: {
        fontSize: 12,
        paddingLeft: 13,
        paddingRight: 13,
    },
    titleRecent: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 0,
        marginLeft: 0,
        color: blueMain,
    },
    showAllText: {
        color: grey500,
        fontSize: 12,
        paddingRight: 6,
    },
    imgContent: {
        width: width / 2,
        height: 100,
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
    viewImg: {
        width: width / 2 - 30,
        overflow: 'hidden',
    },
    textMoreItem: {
        fontSize: 12,
        color: grey500,
    },
    colTab: {
        borderColor: grey400,
        borderWidth: 1,
        borderRadius: 8
    },
    btnTab: {
        paddingTop: 0,
        paddingBottom: 0,
        height: 30,
    },
    textTab: {
        fontSize: 12,
        color: grey600,
        paddingLeft: 5,
        paddingRight: 5,
    },
    iconTab: {
        fontSize: 13,
        color: blueMain,
        marginLeft: 0,
        marginRight: 0
    },
    viewModal: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 11,
        borderBottomWidth: 0.2,
    },
    textFilter: {
       fontWeight: 'bold',
        fontSize: 21,
    },
    titleFilter: {
        marginTop: 10,
        marginBottom: 15,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5
    },
    btnFilterActive: {
        backgroundColor: blueMain,
    },
    btnColFilter: {
        marginHorizontal: 5,
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    btnFilter: {
        borderColor: blueMain,
    },
    btnShow: {
        backgroundColor: blueMain,
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        height: 40,
        marginBottom: 15
    }
};
