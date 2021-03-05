import {
  iconBack,
  fullBlack,
  btnPrimary,
  backgroundApp,
  colorText,
  blueMain,
  white
} from '../../theme/variables/commonColor';

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
    marginTop: 25,
    marginBottom: 5,
    color: fullBlack,
    fontWeight: 'bold'
  },

  btnRadio: {
    color: btnPrimary
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
};
