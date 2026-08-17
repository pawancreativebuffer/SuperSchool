import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar, Animated, StyleSheet, Dimensions, Linking, ScrollView } from 'react-native';
import { Text } from '@/components/Text';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Phone } from 'lucide-react-native';
import type { RootStackParamList } from '@/navigation/AppNavigator';
import Svg, { Defs, Pattern, Circle as SvgCircle, Rect, Path } from 'react-native-svg';
import { z } from 'zod';

import avatar1 from '@/assets/images/avatar1.png';
import avatar2 from '@/assets/images/avatar2.png';
import avatar3 from '@/assets/images/avatar3.png';
import logo from '@/assets/images/logo.png';

const phoneSchema = z.string().min(1, 'Mobile number is required').length(14, 'Invalid mobile number format');

const { width, height } = Dimensions.get('window');

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

// Dotted pattern from second image
const DotPattern = () => (
  <View style={StyleSheet.absoluteFill} pointerEvents="none">
    <Svg width="100%" height="100%">
      <Defs>
        <Pattern id="dots" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <SvgCircle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.40)" />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#dots)" />
    </Svg>
  </View>
);

// Exact floating circles from first image
const FloatingCircles = () => (
  <View style={StyleSheet.absoluteFill} pointerEvents="none" className="opacity-11">
    {/* Top Left Light Red */}
    <View className="absolute top-16 left-[-20px] w-16 h-16 rounded-full bg-[#FFB3B6]" />
    {/* Top Right Light Yellow */}
    <View className="absolute top-10 right-4 w-12 h-12 rounded-full bg-[#FDEC82]" />
    {/* Small Light Red Dot */}
    <View className="absolute top-24 right-16 w-3 h-3 rounded-full bg-[#FFB3B6]" />
    {/* Small White Dot */}
    <View className="absolute top-64 left-10 w-3 h-3 rounded-full bg-white" />
    {/* Middle Left Light Yellow */}
    <View className="absolute top-[45%] left-[-15px] w-14 h-14 rounded-full bg-[#FDEC82]" />
    {/* Middle Right Small Light Red */}
    <View className="absolute top-[48%] right-8 w-3 h-3 rounded-full bg-[#FFB3B6]" />
  </View>
);

// The curved bottom notch for the white card
const BottomNotch = () => (
  <View style={{ width: '100%', height: 80, marginTop: -1 }}>
    <Svg width="100%" height="100%" viewBox="0 0 375 80" preserveAspectRatio="none">
      <Path
        d="M 0 0 L 0 40 A 40 40 0 0 0 40 80 L 70 80 C 116 80, 140 15, 187.5 15 C 235 15, 259 80, 305 80 L 335 80 A 40 40 0 0 0 375 40 L 375 0 Z"
        fill="white"
      />
    </Svg>
  </View>
);

// Custom composed avatar group (Triangular Layout - matching the true reference)
const AvatarGroup = () => (
  <View className="items-center justify-center w-full mb-6 mt-6">
    <View className="relative w-[250px] h-[250px]">

      {/* Top Left (Largest: 115x115) */}
      <View
        className="absolute top-0 left-0 w-[130px] h-[130px] rounded-full overflow-hidden bg-[#FFB3B6] z-10"
      >
        <Image source={avatar1} className="w-full h-full" resizeMode="cover" />
      </View>

      {/* Top Right (Smallest: 85x85) */}
      <View
        className="absolute top-[25px] left-[150px] w-[100px] h-[100px] rounded-full overflow-hidden bg-[#FDEC82] z-10"
      >
        <Image source={avatar2} className="w-full h-full" resizeMode="cover" />
      </View>

      {/* Bottom Center (Medium: 100x100) */}
      <View
        className="absolute top-[130px] left-[80px] w-[110px] h-[110px] rounded-full overflow-hidden bg-[#FFDCA8] z-10"
      >
        <Image source={avatar3} className="w-full h-full" resizeMode="cover" />
      </View>

      {/* Center Logo Badge */}
      <View
        className="absolute top-[60px] left-[85px] bg-white w-[100px] h-[100px] rounded-full border-2 border-white z-20 items-center justify-center"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.30,
          shadowRadius: 30,
          elevation: 5
        }}
      >
        <Image source={logo} style={{ width: 80, height: 80 }} resizeMode="contain" />
      </View>

    </View>
  </View>
);

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handlePhoneChange = (text: string) => {
    setErrorMsg(''); // Clear error when typing
    // Remove all non-numeric characters
    const cleaned = text.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length > 6) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length > 3) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}`;
    } else if (cleaned.length > 0) {
      formatted = `(${cleaned}`;
    }
    setPhoneNumber(formatted);
  };

  const handleSendOTP = () => {
    const result = phoneSchema.safeParse(phoneNumber);
    if (!result.success) {
      setErrorMsg(result.error.issues[0].message);
    } else {
      setErrorMsg('');
      console.log('Sending OTP to', phoneNumber);
      navigation.replace('Dashboard');
    }
  };

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const KeyboardWrapper = Platform.OS === 'ios' ? KeyboardAvoidingView : View;
  const SafeAreaWrapper = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <View className="bg-[#FF4757] overflow-hidden w-full" style={Platform.OS === 'web' ? { height: '100vh' } : { flex: 1 }}>
      {/* @ts-ignore: translucent is Android-only but perfectly valid, TS sometimes complains based on active platform types */}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      {/* Background Elements */}
      <DotPattern />
      <FloatingCircles />

      <SafeAreaWrapper className="flex-1 z-10 w-full">
        <KeyboardWrapper
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          className="flex-1 w-full"
        >
          <ScrollView
            className="w-full"
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {/* Spacer pushes everything to the bottom on tall screens */}
            <View style={{ flex: 1, minHeight: 32 }} />

            {/* Top Header Section */}
            <Animated.View
              className="items-center justify-center"
              style={{
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              }}
            >
              <AvatarGroup />
              <Text className="text-[34px] leading-[42px] font-bold text-white text-center mb-10">
                Let's get you{'\n'}signed in!
              </Text>
            </Animated.View>

            {/* Bottom White Card Area */}
            <View className="w-full px-[8px] pb-[8px] relative">
              <View className="w-full relative">
                <View className="bg-white rounded-t-[40px] w-full pt-10 px-8 items-center">

                  <Text className="text-[#3A3A3A]/90 text-center font-bold text-md leading-relaxed mb-6">
                    Enter your registered mobile number to get started
                  </Text>

                  {/* Form Fields exactly like the image */}
                  <View className="w-full max-w-sm self-center">

                    {/* Phone Number Input */}
                    <View className="w-full mb-6">
                      <View className={`flex-row items-center w-full bg-[#F3F4F6] rounded-2xl px-5 py-4 ${errorMsg ? 'border border-red-500' : ''}`}>
                        <Phone size={20} color="#3A3A3A" />
                        <View className="w-[1px] h-6 bg-gray-300 mx-3" />
                        <TextInput
                          className="flex-1 font-sans text-base text-black outline-none"
                          placeholder="(000) 000-0000"
                          placeholderTextColor="#9CA3AF"
                          keyboardType="phone-pad"
                          value={phoneNumber}
                          onChangeText={handlePhoneChange}
                          maxLength={14}
                        />
                      </View>
                      {errorMsg ? (
                        <Text className="text-red-500 text-sm mt-2 ml-2 font-medium">
                          {errorMsg}
                        </Text>
                      ) : null}
                    </View>

                    <Text className="text-center text-md font-medium text-gray-500 mb-5 w-[250px] m-auto leading-relaxed">
                      By continuing you agree to our{' '}
                      <Text
                        className="font-bold text-[#FF4757]"
                        onPress={() => Linking.openURL('https://superschool.org/privacy-policy')}
                      >
                        privacy policy
                      </Text>
                    </Text>

                  </View>
                </View>

                {/* Inverted Cutout (Notch) SVG */}
                <BottomNotch />

                {/* "Send OTP" Button placed perfectly inside the black space of the notch */}
                <TouchableOpacity
                  className="absolute w-full items-center justify-center z-20 outline-none"
                  style={Platform.OS === 'web' ? { bottom: 12, height: 40, outlineStyle: 'none' } as any : { bottom: 12, height: 40 }}
                  onPress={handleSendOTP}
                  activeOpacity={0.8}
                >
                  <Text className="text-white font-bold text-lg">
                    Send OTP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardWrapper>
      </SafeAreaWrapper>
    </View>
  );
};

export default Login;
