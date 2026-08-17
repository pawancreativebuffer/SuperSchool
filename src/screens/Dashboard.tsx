import React, { useEffect, useRef } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, Animated, Image, Platform } from 'react-native';
import { Text } from '@/components/Text';
import avatar1 from '@/assets/images/avatar1.png';

const Dashboard = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const SafeAreaWrapper = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <View className="flex-1 bg-[#FDF8F5]" style={Platform.OS === 'web' ? { height: '100vh' } : {}}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDF8F5" />
      <SafeAreaWrapper className="flex-1 w-full max-w-lg self-center">
        <ScrollView className="flex-1 px-6 pt-10" showsVerticalScrollIndicator={false}>
          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
            
            {/* Header Section */}
            <View className="flex-row justify-between items-center mb-8">
              <View>
                <Text className="text-[#7C7C7C] text-lg font-medium">Good Morning,</Text>
                <Text className="text-[#3A3A3A] text-3xl font-bold mt-1">Student 🎓</Text>
              </View>
              <View className="w-14 h-14 rounded-[10px] items-center justify-center shadow-sm bg-white overflow-hidden border-2 border-white">
                <Image source={avatar1} className="w-full h-full" resizeMode="cover" />
              </View>
            </View>

            {/* Hero Card */}
            <View className="bg-[#FF4757] rounded-[10px] p-6 mb-8 shadow-[0_10px_20px_rgba(255,71,87,0.25)] relative overflow-hidden">
              <View className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full" />
              <View className="absolute -bottom-10 -left-10 w-24 h-24 bg-black/5 rounded-full" />
              
              <Text className="text-white/90 text-base font-medium mb-2">Today's Progress</Text>
              <Text className="text-white text-4xl font-extrabold mb-4">85%</Text>

              <View className="w-full h-2 bg-black/10 rounded-[10px] mb-4">
                <View className="w-[85%] h-full bg-white rounded-[10px]"></View>
              </View>

              <Text className="text-white/90 text-sm">Keep it up! You're almost there.</Text>
            </View>

            {/* Quick Actions Grid */}
            <Text className="text-[#3A3A3A] text-xl font-bold mb-4">Quick Actions</Text>
            <View className="flex-row flex-wrap justify-between">

              {/* Action 1 */}
              <TouchableOpacity activeOpacity={0.8} className="w-[48%] bg-white rounded-[10px] p-5 mb-4 shadow-sm items-center outline-none">
                <View className="w-12 h-12 bg-[#FFF5F5] rounded-[10px] items-center justify-center mb-3">
                  <Text className="text-2xl">📚</Text>
                </View>
                <Text className="text-[#3A3A3A] font-bold text-base">Courses</Text>
                <Text className="text-[#7C7C7C] text-xs mt-1">12 Active</Text>
              </TouchableOpacity>

              {/* Action 2 */}
              <TouchableOpacity activeOpacity={0.8} className="w-[48%] bg-white rounded-[10px] p-5 mb-4 shadow-sm items-center outline-none">
                <View className="w-12 h-12 bg-[#FFF5F5] rounded-[10px] items-center justify-center mb-3">
                  <Text className="text-2xl">📝</Text>
                </View>
                <Text className="text-[#3A3A3A] font-bold text-base">Assignments</Text>
                <Text className="text-[#7C7C7C] text-xs mt-1">3 Pending</Text>
              </TouchableOpacity>

              {/* Action 3 */}
              <TouchableOpacity activeOpacity={0.8} className="w-[48%] bg-white rounded-[10px] p-5 mb-4 shadow-sm items-center outline-none">
                <View className="w-12 h-12 bg-[#FFF5F5] rounded-[10px] items-center justify-center mb-3">
                  <Text className="text-2xl">📅</Text>
                </View>
                <Text className="text-[#3A3A3A] font-bold text-base">Schedule</Text>
                <Text className="text-[#7C7C7C] text-xs mt-1">Up next: Math</Text>
              </TouchableOpacity>

              {/* Action 4 */}
              <TouchableOpacity activeOpacity={0.8} className="w-[48%] bg-white rounded-[10px] p-5 mb-4 shadow-sm items-center outline-none">
                <View className="w-12 h-12 bg-[#FFF5F5] rounded-[10px] items-center justify-center mb-3">
                  <Text className="text-2xl">🏆</Text>
                </View>
                <Text className="text-[#3A3A3A] font-bold text-base">Grades</Text>
                <Text className="text-[#7C7C7C] text-xs mt-1">View Report</Text>
              </TouchableOpacity>

            </View>

            <View className="h-10"></View>
          </Animated.View>
        </ScrollView>
      </SafeAreaWrapper>
    </View>
  );
};

export default Dashboard;
