import React, { useEffect, useRef } from 'react';
import { View, StatusBar, Animated, ImageBackground, Image } from 'react-native';
import { Text } from '../components/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import cloudyBg from '../assets/images/cloudy_bg.png';
import logoImg from '../assets/images/logo.png';
import childGif from '../assets/images/child.gif';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const Splash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const wipeAnim = useRef(new Animated.Value(0)).current; // For logo reveal

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(wipeAnim, {
        toValue: 288, // 288px is equivalent to Tailwind w-72
        duration: 1500, // 1.5 seconds for slow reveal
        useNativeDriver: false, // Layout animations cannot use native driver
      })
    ]).start();
  }, [fadeAnim, scaleAnim, wipeAnim]);

  // Navigate to Login after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-[#FFF9EE] overflow-hidden">
      <ImageBackground
        source={cloudyBg}
        className="flex-1"
        resizeMode="cover"
        imageStyle={{ opacity: 0.9 }}
      >
        {/* @ts-ignore: translucent is Android-only but perfectly valid, TS sometimes complains based on active platform types */}
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

        {/* Fake Gradient Overlay (Works flawlessly on Web & Native without libraries) */}
        <View className="absolute bottom-0 w-full h-[55%] pointer-events-none flex-col justify-end z-0">
          {[...Array(30)].map((_, i) => (
            <View
              key={i}
              style={{
                height: `${100 / 6}%`,
                width: '100%',
                backgroundColor: 'white',
                opacity: Math.pow(i / 29, 1.5) // Non-linear fade for smoother gradient
              }}
            />
          ))}
        </View>

        {/* Main Center Content (Logo & Text) */}
        <View className="flex-1 justify-center items-center px-4 z-10">
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
              alignItems: 'center',
              width: '100%',
              paddingBottom: 80, // Push up slightly to avoid GIF
            }}
          >
            {/* User's Logo (Wipe Reveal Effect) */}
            <View className="mb-2 items-center justify-center" style={{ width: 288, height: 144 }}>
              <Animated.View style={{ width: wipeAnim, height: 144, overflow: 'hidden', alignItems: 'flex-start' }}>
                <Image
                  source={logoImg}
                  style={{ width: 288, height: 144 }}
                  resizeMode="contain"
                />
              </Animated.View>
            </View>

            <Text className="text-[#3A3A3A]/90 text-center font-bold text-md w-[80%] mt-3 leading-relaxed">
              Empowering unique journeys with love, care, and smart learning.
            </Text>
          </Animated.View>
        </View>

        {/* User's GIF positioned at the bottom center */}
        <View className="absolute bottom-[-30px] w-full items-center justify-center pointer-events-none z-10">
          <Image
            source={childGif}
            className="w-64 h-64 scale-[1.4]"
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
