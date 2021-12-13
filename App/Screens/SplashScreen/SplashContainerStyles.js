import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors'
import Fonts from '../../Themes/Fonts'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  headingTextStyle: {
    fontSize: Fonts.size.h1,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  subHeadingTextStyle: {
    fontSize: Fonts.size.h4,
    color: 'white',
    fontWeight: '500',
  },
  divider: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    width: 250,
    marginTop: 20,
  },
});
