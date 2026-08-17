import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {}

export const Text: React.FC<TextProps> = (props) => {
  // We automatically inject the 'font-sans' class here so it's applied globally
  return (
    <RNText {...props} className={`font-sans ${props.className || ''}`}>
      {props.children}
    </RNText>
  );
};
