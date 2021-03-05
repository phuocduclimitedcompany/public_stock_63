import {
  white,
  grey200,
  grey700,
  grey100,
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
  dropdownView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: grey200,
    height: 60,
  },
  dropText: {
    color: grey700,
    fontSize: 16,
  },
  downIcon: {
    color: grey700,
    fontSize: 18,
    marginRight: 0,
    marginTop: 4,
  },
  accordionStyle: {
    borderWidth: 0,
    borderLeftWidth: 0,
  },
  accordionHeader: {
    backgroundColor: white,
    marginLeft: 20,
    height: 60,
  },
  accordionContent: {
    marginLeft: 30,
    backgroundColor: grey200,
  },
};
