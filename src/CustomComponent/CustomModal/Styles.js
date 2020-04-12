import {StyleSheet} from 'react-native';
import colors from '../../commonStyleSheet/Color';
import {
  heightPercentageToDP,
  responsiveFontSize,
  responsiveVerticalSize,
  responsiveHorizontalSize,
  widthPercentageToDP,
} from '../../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';

const Styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: colors.white,
    // minHeight: heightPercentageToDP(35),
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
    padding: 12,
  },
  dialogViewContainer: {
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
    justifyContent: flexVariable.spaceAround,
  },
  dialogPosition: {
    flexDirection: flexVariable.column,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
  },
  flexDirection_row: {
    flexDirection: flexVariable.row,
  },
  txt_grey:{
    color: colors.dimGrey,
  },
  txt_black:{
    color: colors.black,
  },
  pl_5:{
      paddingLeft: 5
  },
  flex_warp:{
      flexWrap: flexVariable.wrap
  },
  flex_03:{
    flex: 0.4
  },
  flex_07:{
    flex: 0.6
  },
});

export default Styles;
