import { brand, redA700, white, colorInput, fullWhite, grey500, blueMain, backgroundApp, borderCard, blueMain10 } from '../../theme/variables/commonColor';

export default {
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // viewSelect: { height: 40 },
  viewSelect: {
    height: 55,
    backgroundColor: white,
    borderRadius: 7,
    borderColor: backgroundApp,
    borderWidth: 1,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewSelectContainer: {
    borderRadius: 7,
    top: 0,
    width: '35%',
    marginLeft: 'auto',
  },
  // viewSelectContainer: { top: -9 },
  viewSelectLabel: {
    top: -6,
    paddingLeft: 10,
    paddingRight: 5,
  },
  // viewSelectLabel: {
  //   paddingLeft: 5,
  //   paddingRight: 5,
  // },
  labelDefaultEdit: {
    fontSize: 11,
    left: 10,
    top: 4,
    color: blueMain10,
    textTransform: 'capitalize',
  },
  labelDefaultDate: {
    fontSize: 11,
    left: 10,
    // bottom: 6,
    color: blueMain10,
  },
  labelDefaultDate3: {
    fontSize: 11,
    left: 0,
    bottom: 6,
    color: blueMain10,
  },
  labelDefaultDate2: {
    fontSize: 11,
    left: 4,
    bottom: -6,
    color: blueMain10,
  },
  viewSelectLabelBorder: { borderBottomWidth: 0 },
  viewSelectIcon: {
    fontSize: 10,
    marginTop: 0,
    marginRight: 8,
    color: grey500,
  },
  // viewSelectIcon: {
  //   fontSize: 10,
  //   marginTop: 3,
  //   color: brand,
  // },
  // select: {
  //   fontSize: 12,
  //   height: 15 * 1.1,
  // },
  select: {
    fontSize: 13,
    // marginTop: 6,
    marginLeft: 4,
  },
  defaultItem: {
    flex: 1,
  },
  fieldVertical: {
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 80,
  },
  labelVertical: {
    paddingHorizontal: 5,
  },
  fieldHorizontal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    shadowColor: borderCard,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.45,
  },
  // borderColorError: {
  //   borderColor: redA700,
  //   borderStyle: 'dashed'
  // },
  labelDefault: {
    fontSize: 9,
    left: 4,
    color: brand,
  },
  input: {
    top: 2,
    height: 40,
    fontSize: 13,
    color: colorInput,
    paddingLeft: 16,
  },
  input2: {
    top: 2,
    height: 40,
    fontSize: 13,
    color: colorInput,
    paddingLeft: 14,
  },
  fieldInput: {
    // borderBottomWidth: 0,
    backgroundColor: fullWhite,
    borderRadius: 8,
    height: 50,
    borderColor: backgroundApp,
    borderWidth: 1,
  },
  fieldInput2: {
    // borderBottomWidth: 0,
    backgroundColor: fullWhite,
    borderRadius: 8,
    height: 55,
    borderColor: backgroundApp,
    borderWidth: 1,
  },
  icon: {
    fontSize: 15,
    color: blueMain,
    marginLeft: 15,
    marginTop: 15,
  },
  labelError: {
    fontSize: 9,
    color: redA700,
    textAlign: 'right',
    marginBottom: 10,
  },
};
