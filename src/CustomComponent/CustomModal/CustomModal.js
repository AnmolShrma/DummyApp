import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import styles from './Styles';
import {displayMonthNameWithDate} from '../../utils/DisplayFormatter';

const CustomModal = props => {
  return (
    <Dialog
      visible={props.isModal}
      title=""
      onTouchOutside={props.closeDialog}
      onRequestClose={props.closeDialog}
      dialogStyle={[styles.dialogContainer]}>
      <View style={[styles.flexDirection_row]}>
        <View>
          <Text style={[styles.txt_grey]}>ObjectID:</Text>
        </View>
        <View>
          <Text style={[styles.txt_black]}>{props.data.objectID}</Text>
        </View>
      </View>
      <View style={[styles.flexDirection_row]}>
        <View>
          <Text style={[styles.txt_grey]}>Author:</Text>
        </View>
        <View>
          <Text style={[styles.txt_black]}>{props.data.author}</Text>
        </View>
      </View>
      <View style={[styles.flexDirection_row]}>
        <View>
          <Text style={[styles.txt_grey]}>Title:</Text>
        </View>
        <View>
          <Text style={[styles.txt_black]}>{props.data.title}</Text>
        </View>
      </View>
      <View style={[styles.flexDirection_row]}>
        <View>
          <Text style={[styles.txt_grey]}>URL:</Text>
        </View>
        <View>
          <Text style={[styles.txt_black]}>{props.data.url}</Text>
        </View>
      </View>
      <View style={[styles.flexDirection_row]}>
        <View>
          <Text style={[styles.txt_grey]}>Created:</Text>
        </View>
        <View>
          <Text style={[styles.txt_black]}>
            {' '}
            {displayMonthNameWithDate(props.data.created_at)}
          </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={[styles.txt_grey]}>Tags:</Text>
        </View>

        {props.data._tags.map((item, index) => (
          <View>
            <Text style={[styles.txt_black, styles.pl_5, styles.flex_warp]}>
              {item}
              {`${props.data._tags.length - 1 == index ? '' : ','}`}
            </Text>
          </View>
        ))}
      </View>
    </Dialog>
  );
};

export default CustomModal;
