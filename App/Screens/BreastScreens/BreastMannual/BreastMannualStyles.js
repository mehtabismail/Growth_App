import {StyleSheet} from 'react-native';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    color: Colors.primary,
    fontSize: Fonts.size.medium,
    fontWeight: 'bold',
  },
  caretDownImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  topContainer: {
    paddingTop: metrics.smallPadding,
    marginBottom: metrics.regularMargin,
    marginHorizontal: metrics.regularMargin,
  },
  totalDurationContainer: {
    alignSelf: 'center',
    width: '90%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border_line,
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
});
