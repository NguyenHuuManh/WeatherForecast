import React, { useCallback, useState, useEffect } from 'react';
import { TextInput, ViewStyle } from 'react-native';
import get from 'lodash/get';
import AppText from '../AppText';
import styles from './styles';
import { Field, FastField } from 'formik';
import { color } from '../../Helpers';
import AppField from '../AppField';
interface Props {
  name: any;
  form?: any;
  field?: any;
  onChangeCustom?: any;
  placeholder?: any;
  memo?: boolean;
  customInputStyle?: ViewStyle;
}

const Input = (props: Props) => {
  const { form, field, onChangeCustom, placeholder, customInputStyle } = props;
  const { name, value } = field;
  const { errors, setFieldValue } = form;

  const error = get(errors, name);

  const onChange = useCallback(
    (text) => {
      setFieldValue(name, text);
    },
    [name, setFieldValue],
  );

  return (
    <>
      <TextInput
        name={name}
        onChangeText={onChangeCustom || onChange}
        placeholder={placeholder || name}
        value={value}
        placeholderTextColor={color.gray}
        style={[styles.input, customInputStyle]}
      />
      <AppText>{error}</AppText>
    </>
  );
};

export default (props: Props) => {
  const { memo, name, ...remainProps } = props;

  return <AppField name={name} component={Input} {...remainProps} />;
};
