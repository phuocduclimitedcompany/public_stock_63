import {
  white,
  grey100,
  grey500,
  grey300,
  grey700,
  amber700,
  blueMain10,
} from '../../theme/variables/commonColor';

export default {
  pT0: {
    paddingTop: 0,
  },
  pB0: {
    paddingBottom: 0,
  },
  mT5: { marginTop: 5,},
  flexRow: {
    flexDirection: 'row',
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  starFull: {
    color: amber700,
    fontSize: 14,
    marginRight: 3,
  },
  starHalf: {
    color: amber700,
    fontSize: 14,
    marginRight: 3,
  },
  starOutLine: {
    color: grey300,
    fontSize: 14,
    marginRight: 3,
  },
  leftAuto: {
    marginLeft: 'auto',
  },
  moreText: {
    fontSize: 12,
    color: blueMain10,
    textTransform: 'capitalize',
  },
  // btnTop: {
  //   width: 40,
  //   height: 40,
  //   // position: 'absolute',
  //   right: 15,
  //   bottom: 50,
  //   borderRadius: 20,
  //   backgroundColor: blueMain,
  // },
  // iconTop: {
  //   marginLeft: 0,
  //   marginRight: 0,
  //   fontSize: 30,
  //   color: white,
  //   textAlign: 'center',
  // },
};
