import {white, grey100, blueMain, grey500, badgeBg} from '../../theme/variables/commonColor';

export default {
  contentContainer: {
    justifyContent: 'flex-start',
    backgroundColor: white,
    height: '100%',
  },
  content: {
    backgroundColor: grey100,
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  cardItemView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    marginVertical: 10,
  },
  addNewBtn: {
    backgroundColor: white,
  },
  addNewText: {
    color: blueMain,
    paddingLeft: 8,
    // fontSize: 14,
  },
  deleteBtn: {
    backgroundColor: grey100,
    marginHorizontal: 18,
    borderRadius: 8,
  },
  deleteText: {
    color: badgeBg,
    paddingLeft: 8,
    // fontSize: 14,
  },
  addIcon: {
    fontSize: 18,
    color: blueMain,
    marginRight: 0,
  },
  nameEditStyle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  subNameEdit: {
    fontSize: 13,
    color: grey500,
    marginBottom: 5,
  },
  iconModalClose: {
    color: blueMain,
    marginTop: 5,
  },
  viewModalEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 11,
    borderBottomWidth: 0.2,
  },
  titleModal: {
    fontWeight: 'bold',
    fontSize: 21,
    textTransform: 'capitalize',
  },
  saveView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  saveBtn: {
    backgroundColor: blueMain,
  },
  saveText: {
    color: white,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
};
