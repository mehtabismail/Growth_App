import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Fonts from '../../Themes/Fonts';
import metrics from '../../Themes/Metrics';

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
    marginVertical: 20,
    marginHorizontal: metrics.baseMargin,
    height:"20%"
  },
  centerContainer: {
    height:"60%",
    justifyContent: "space-around",
    flexDirection:"column",
    alignItems:"center"
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    width: '50%',
    alignSelf: 'center',
  },
});
