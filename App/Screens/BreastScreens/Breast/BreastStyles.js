import {StyleSheet} from 'react-native';
import Colors from '../../../Themes/Colors';
import Fonts from '../../../Themes/Fonts';
import metrics from '../../../Themes/Metrics';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: metrics.smallMargin,
  },
  timeCircleView: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  timeText: {
    fontSize: Fonts.size.timeCircleText,
    fontWeight: 'bold',
  },
  buttonView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  textMannual: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: metrics.smallMargin,
    marginTop: metrics.smallMargin,
    flexDirection: 'row',
  },
  playButton: {
    borderColor: Colors.primary,
    borderWidth: 1,
    paddingHorizontal: metrics.doubleBasePadding,
  },
});
