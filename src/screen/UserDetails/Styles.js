import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../commonStyleSheet/Color';
import {
  responsiveFontSize,
  responsiveVerticalSize,
  responsiveHorizontalSize,
} from '../../commonStyleSheet/ResponsiveSize';
import {flexVariable} from '../../commonStyleSheet/FlexVariable';
const width = Math.round(Dimensions.get('window').width);

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginVertical: responsiveVerticalSize(1),
    backgroundColor: colors.white,
    position: flexVariable.relative,
  },
  mh_2:{
    marginHorizontal: responsiveHorizontalSize(2),

  },
  pd_2: {
    paddingHorizontal: responsiveHorizontalSize(2),
    paddingVertical: responsiveVerticalSize(1.5),
  },
  flex_05: {
    flex: 0.5,
  },
  align_center: {
    alignItems: flexVariable.center,
  },
  flex_end: {
    justifyContent: flexVariable.flexEnd,
  },
  pl_2: {
    paddingLeft: 2,
  },
  pr_2: {
    paddingRight: 2,
  },
  pdb_2: {
    paddingBottom: 2,
  },
  flex_wrap: {
    flexWrap: flexVariable.wrap,
  },
  brb_2: {
    borderBottomWidth: 2,
    borderColor: colors.themeColor,
  },
  br_grey: {
    borderColor: colors.grey,
  },
  directionRow: {
    flexDirection: flexVariable.row,
  },
  title: {
    color: colors.white,
    fontSize: responsiveFontSize(16),
    fontWeight: flexVariable.bold,
    textAlign: flexVariable.left,
    paddingLeft: responsiveHorizontalSize(4),
  },
  text: {
    color: colors.black,
    fontSize: responsiveFontSize(16),
    textAlign: flexVariable.left,
    fontWeight: flexVariable.bold,
  },
  text_capitalize: {
    textTransform: flexVariable.capitalize,
  },
  text_greyColor: {
    color: colors.dimGrey,
  },
  boxShadow: {
    borderColor: colors.grey,
    shadowColor: colors.grey,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: colors.lightWhite,
  },
  txt_grey: {
    color: colors.dimGrey,
  },
  txt_black: {
    color: colors.black,
  },
  flexDirection_column: {
    flexDirection: flexVariable.column,
  },
  input_container:{
    borderWidth: 2,
    borderColor: colors.mediumGrey,
    marginHorizontal: responsiveHorizontalSize(2),
    height: 40,
    borderRadius: 4,
    paddingHorizontal: responsiveHorizontalSize(4)
  },
  mv_2:{
    marginVertical: responsiveHorizontalSize(2),
  },
  justify_space_between:{
    justifyContent: flexVariable.spaceBetween
  }
});

export {Styles};
