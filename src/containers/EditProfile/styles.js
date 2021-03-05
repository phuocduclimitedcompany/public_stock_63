import {white, grey200, blueMain, minBlack} from '../../theme/variables/commonColor';

export default {
  contentContainer: {
    justifyContent: 'flex-start',
    backgroundColor: white,
    height: '100%',
  },
  content: {
    backgroundColor: white,
    paddingHorizontal: 5,
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  saveBtn: {
    backgroundColor: blueMain,
    elevation: 0,
    borderRadius: 5,
    marginHorizontal: 18,
  },
  saveText: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  avtView: {
    position: 'relative',
    // marginTop: 20,
    alignItems: 'center',
  },
  avtStyle: {
    width: 80,
    height: 80,
    borderRadius: 8,
    // marginRight: 25,
  },
};
