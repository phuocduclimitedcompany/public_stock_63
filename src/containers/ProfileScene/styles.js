import {
  white,
  grey100,
  grey500,
  blueMain,
  minBlack,
} from '../../theme/variables/commonColor';

export default {
  contentContainer: {
    justifyContent: 'flex-start',
    backgroundColor: white,
    height: '100%',
  },
  content: {
    backgroundColor: white,
  },
  generateText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  mL0: {
    marginLeft: 0,
    alignSelf: 'center',
    paddingLeft: 30,
  },
  textListView: {
    marginLeft: 0,
    alignSelf: 'center',
  },
  profileView: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 30,
  },
  avtStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
    // marginRight: 25,
  },
  avtBg: {
    backgroundColor: minBlack,
    width: 80,
    height: 22,
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cameraBtn: {
    position: 'absolute',
    bottom: -12,
    justifyContent: 'center',
    alignSelf: 'center',
    right: -12,
  },
  cameraIcon: {
    color: white,
    fontSize: 15,
  },
  nameView: {
    alignSelf: 'center',
    marginLeft: 25,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: '700',
  },
  subName: {
    fontSize: 13,
    color: grey500,
    marginBottom: 15,
  },
  editBtn: {
    // backgroundColor: blueMain,
    borderColor: grey500,
    borderRadius: 4,
    height: 25,
  },
  editText: {
    color: blueMain,
    fontSize: 8,
    textTransform: 'uppercase',
  },
  listView: {
    marginTop: 30,
  },
  listItemView: {
    marginLeft: 0,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  listText: {
    fontSize: 12,
    color: grey500,
  },
};
