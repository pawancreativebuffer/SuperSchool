/// <reference types="nativewind/types" />

import 'react-native';
import 'react';

declare module 'react' {
  interface Attributes {
    className?: string;
  }
}

declare module 'react-native' {
  interface ViewProps { className?: string; }
  interface TextProps { className?: string; }
  interface ScrollViewProps { className?: string; }
  interface TouchableOpacityProps { className?: string; }
  interface TouchableWithoutFeedbackProps { className?: string; }
  interface TouchableHighlightProps { className?: string; }
  interface ImageProps { className?: string; }
  interface SafeAreaViewProps { className?: string; }
  interface TextInputProps { className?: string; }
  interface StatusBarProps { className?: string; backgroundColor?: string; }
}

declare module 'react' {
  interface Attributes {
    backgroundColor?: string;
  }
}
