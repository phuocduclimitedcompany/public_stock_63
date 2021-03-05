import {
  white,
  colorClose,
  titleEnter,
  green27,
  colorText,
  borderCard,
  btnPrimary,
  blueMain
} from '../../theme/variables/commonColor';

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
    colorTitle: {
    marginTop: 10,
    marginBottom: 5,
    color: titleEnter,
    textAlign: 'center',
      fontWeight: 'bold'
  },
  greenFl: {
    color: green27,
    fontSize: 15,
    width: 25
  },
  viewText: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  viewWe: {
    marginTop: 30,
  justifyContent: 'center',
      alignItems: 'center',
  },
  colorText: {
    color: colorText,
    fontSize: 13,
    textAlign: 'center',
      width: '90%',
    fontWeight: 'bold'
  },
  verification: {
    width: 100,
    marginTop: 25,
    marginBottom: 25
  },
  centerRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
    cardVertical: {
    borderRadius: 8,
    borderColor: borderCard,
    marginTop: 30,
      paddingTop: 15,
      paddingBottom: 15
  },
  btnNext: {
    backgroundColor: blueMain,
    borderColor: blueMain,
    width: '100%',
      borderRadius: 7,
  },
  textSend: {
    fontSize: 13,
    fontWeight: 'bold',
  },
    colorReceive: {
    color: colorClose,
    fontSize: 13,
    textAlign: 'center',
      fontWeight: 'bold'
  },
  reSend: {
    fontSize: 14,
    color: blueMain,
    textTransform: 'capitalize',
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: 'center',
    justifyContent: 'center',
  },
  btnCol: {
    padding :0,
    margin: 0,
    height: 20,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%'
  }
};
