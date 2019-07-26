/**
 * This component presents the error message for login / registration form.
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { errorTextColor } from '../../../constants/colors';

type Props = {
  errorMessage: string
};

export default (props: Props) => (
  <View style={styles.errorTextWrapper}>
    <Text style={styles.error}>{props.errorMessage}</Text>
  </View>
);

const styles = StyleSheet.create({
  /** ******************
   * container styles *
   ******************* */
  errorTextWrapper: {
    flexDirection: 'row',
    paddingLeft: 3,
    paddingRight: 3,
  },

  /** ****************
   * element styles *
   ***************** */
  error: {
    color: errorTextColor,
    flexWrap: 'wrap',
    fontSize: 14,
    marginTop: -30,
    minHeight: 10,
    textAlign: 'center',
  },
});
