import { white, grey100, grey500, grey300,grey700, amber700, blueMain } from '../../theme/variables/commonColor';

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
  pT0: {
    paddingTop: 0,
  },
  filterText: {
    color: blueMain,
    fontSize: 14,
    textTransform: 'uppercase',
    paddingRight: 0,
    justifyContent: 'flex-end',
  },
  resultsView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: grey100,
  },
  resultsText: {
    fontSize: 14,
    fontWeight: '700',
    color: grey700,
  },
  listItemView: {
    marginLeft: 0,
    paddingLeft: 20,
    backgroundColor: white,
    borderBottomWidth: 1,
    borderBottomColor: grey100,
  },
  alignTop: {
    alignSelf: 'flex-start',
  },
  imgItem: {
    // marginTop: 17,
    width: 110,
    height: 110,
  },
  titleItem: {
    fontSize: 14,
    fontWeight: '500',
  },
  subTitleItem: {
    fontSize: 13,
    color: grey500,
  },
  textMoreItem: {
    fontSize: 12,
    color: grey500,
  },
  moreIcon: {
    color: grey500,
    marginRight: 0,
    marginLeft: 0,
  },
};
