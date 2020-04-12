import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';
import {displayMonthNameWithDate} from '../../utils/DisplayFormatter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../commonStyleSheet/Color';

const Details = props => {
  return (
    <View style={[Styles.mh_2]}>
    <View style={[Styles.viewContainer]} key={`${props.index}`}>
      <TouchableOpacity
        style={[Styles.boxShadow, Styles.brb_2, Styles.pd_2]}
        onPress={() => props.getItem(props.item)}>
        <View style={[Styles.directionRow, Styles.pdb_2]}>
          <View style={[Styles.flex_05, Styles.directionRow]}>
            <Icon name="person" size={18} color={colors.themeColor} />
            <Text style={[Styles.pl_2, Styles.text_capitalize]}>
              {props.item.author}
            </Text>
          </View>
          <View
            style={[
              Styles.flex_05,
              Styles.directionRow,
              Styles.align_center,
              Styles.flex_end,
            ]}>
            <Icon name="schedule" size={18} color={colors.themeColor} />
            <Text style={[Styles.pl_2]}>
              {displayMonthNameWithDate(props.item.created_at)}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[Styles.txt_grey]}>
            Title: <Text style={[Styles.txt_black]}>{props.item.title}</Text>
          </Text>
        </View>
        <View>
          <Text style={[Styles.txt_grey]}>
            Url: <Text style={[Styles.txt_black]}>{props.item.url}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 0,}}>
      <Text style={[Styles.txt_grey]}>Index - {props.index}</Text>
    </View>
    </View>
  );
};

export default Details;
