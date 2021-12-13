import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'
import metrics from '../../Themes/Metrics';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  headingTextContainer: {
    fontSize: Fonts.size.h1,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  subHeadingTextContainer: {
    fontSize: Fonts.size.h4,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  textContainer: {
    alignSelf:"center",
    textAlign:"center",
  fontSize: Fonts.size.input,
  color: 'white',
  fontWeight: '100',
},
buttonContainerStyle: {
    width: '100%', 
    alignItems:"center", 
    paddingVertical: metrics.smallPadding
},
labelStyle: {
    fontWeight: '100',
    fontSize: Fonts.size.medium,
    color: Colors.secondary,
  }
});
