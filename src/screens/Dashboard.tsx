import React from 'react';
import { View, SafeAreaView, Platform, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from '@/components/Text';
import { Bell, Users, Briefcase, Film, Check, X, ChevronRight, UserCheck } from 'lucide-react-native';

import cloudyBg from '@/assets/images/cloudy_bg.png';
import avatar1 from '@/assets/images/avatar1.png';

const Dashboard = () => {
  const SafeAreaWrapper = Platform.OS === 'web' ? View : SafeAreaView;
  
  // Custom soft shadow that looks beautiful and premium on Web, iOS, and Android
  const softShadow = Platform.OS === 'web' 
    ? { boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.04)' } 
    : { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 2 };

  return (
    <View className="flex-1 bg-[#FFF9EE] overflow-hidden" style={Platform.OS === 'web' ? { height: '100vh' } : {}}>
      <ImageBackground
        source={cloudyBg}
        className="flex-1"
        resizeMode="cover"
        imageStyle={{ opacity: 0.9 }}
      >
        {/* Fake Gradient Overlay */}
        <View className="absolute bottom-0 w-full h-[55%] pointer-events-none flex-col justify-end z-0">
          {[...Array(30)].map((_, i) => (
            <View
              key={i}
              style={{
                height: `${100 / 6}%`,
                width: '100%',
                backgroundColor: 'white',
                opacity: Math.pow(i / 29, 1.5)
              }}
            />
          ))}
        </View>

        <SafeAreaWrapper className="flex-1 w-full max-w-lg self-center z-10">
          <ScrollView className="flex-1 pt-6" showsVerticalScrollIndicator={false}>
            
            {/* Header Section */}
            <View className="flex-row justify-between items-center mb-6 px-4">
              <View className="flex-row items-center">
                <View className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-white mr-3" style={softShadow}>
                  <Image source={avatar1} className="w-full h-full" resizeMode="cover" />
                </View>
                <View>
                  <Text className="text-[#7C7C7C] text-sm font-medium">Hello Admin,</Text>
                  <Text className="text-[#3A3A3A] text-xl font-bold">Super School</Text>
                </View>
              </View>
              <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center relative outline-none" style={softShadow}>
                <Bell size={20} color="#3A3A3A" />
                <View className="absolute top-2 right-2 w-2 h-2 bg-[#FF4757] rounded-full" />
              </TouchableOpacity>
            </View>

            {/* Horizontal Stats Carousel */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 mb-8" contentContainerStyle={{ paddingRight: 20 }}>
              {/* Students */}
              <View className="bg-[#EBE9FE] w-36 rounded-[20px] p-5 mr-4" style={softShadow}>
                <View className="w-10 h-10 bg-white/50 rounded-full items-center justify-center mb-3">
                  <Users size={20} color="#6366F1" />
                </View>
                <Text className="text-[#6366F1] font-bold text-sm mb-1">Students</Text>
                <Text className="text-[#3A3A3A] font-extrabold text-3xl">62</Text>
              </View>
              
              {/* Staff */}
              <View className="bg-[#D1FAE5] w-36 rounded-[20px] p-5 mr-4" style={softShadow}>
                <View className="w-10 h-10 bg-white/50 rounded-full items-center justify-center mb-3">
                  <Briefcase size={20} color="#10B981" />
                </View>
                <Text className="text-[#10B981] font-bold text-sm mb-1">Staff</Text>
                <Text className="text-[#3A3A3A] font-extrabold text-3xl">45</Text>
              </View>

              {/* Parents */}
              <View className="bg-[#FFEDD5] w-36 rounded-[20px] p-5 mr-4" style={softShadow}>
                <View className="w-10 h-10 bg-white/50 rounded-full items-center justify-center mb-3">
                  <UserCheck size={20} color="#F97316" />
                </View>
                <Text className="text-[#F97316] font-bold text-sm mb-1">Parents</Text>
                <Text className="text-[#3A3A3A] font-extrabold text-3xl">14</Text>
              </View>

              {/* Media */}
              <View className="bg-[#DBEAFE] w-36 rounded-[20px] p-5 mr-4" style={softShadow}>
                <View className="w-10 h-10 bg-white/50 rounded-full items-center justify-center mb-3">
                  <Film size={20} color="#3B82F6" />
                </View>
                <Text className="text-[#3B82F6] font-bold text-sm mb-1">Media</Text>
                <Text className="text-[#3A3A3A] font-extrabold text-3xl">29</Text>
              </View>
            </ScrollView>

            {/* Attendance Tracker */}
            <View className="px-4 mb-8">
              <Text className="text-[#3A3A3A] text-lg font-bold mb-4">Today Attendance</Text>
              <View className="bg-white rounded-[20px] p-5 flex-row items-center justify-between" style={softShadow}>
                
                {/* Present Pill */}
                <View className="items-center">
                  <Text className="text-[#7C7C7C] font-medium text-xs mb-2">Present</Text>
                  <View className="h-32 w-16 bg-[#F3F4F6] rounded-full overflow-hidden flex-col justify-end relative">
                    <View className="w-full bg-[#10B981] rounded-full" style={{ height: '0%' }}></View>
                    <View className="absolute inset-0 items-center justify-center">
                      <View className="w-10 h-10 bg-white rounded-full items-center justify-center" style={softShadow}>
                        <Text className="text-[#10B981] font-bold text-lg">0</Text>
                      </View>
                    </View>
                  </View>
                </View>

                {/* Absent Pill */}
                <View className="items-center">
                  <Text className="text-[#7C7C7C] font-medium text-xs mb-2">Absent</Text>
                  <View className="h-32 w-16 bg-[#F3F4F6] rounded-full overflow-hidden flex-col justify-end relative">
                    <View className="w-full bg-[#FF4757] rounded-full" style={{ height: '100%' }}></View>
                    <View className="absolute inset-0 items-center justify-center">
                      <View className="w-10 h-10 bg-white rounded-full items-center justify-center" style={softShadow}>
                        <Text className="text-[#FF4757] font-bold text-lg">62</Text>
                      </View>
                    </View>
                  </View>
                </View>
                
                <View className="flex-1 ml-6 justify-center">
                  <Text className="text-[#3A3A3A] font-bold text-2xl mb-1">62</Text>
                  <Text className="text-[#7C7C7C] text-sm">Total Students</Text>
                  <TouchableOpacity className="mt-4 flex-row items-center outline-none">
                    <Text className="text-[#FF4757] font-bold text-sm mr-1">View Details</Text>
                    <ChevronRight size={16} color="#FF4757" />
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            {/* Academic Progress */}
            <View className="px-4 mb-8">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-[#3A3A3A] text-lg font-bold">Academic Progress</Text>
                <TouchableOpacity className="outline-none"><Text className="text-[#FF4757] font-bold text-sm">See All</Text></TouchableOpacity>
              </View>
              
              <View className="bg-white rounded-[20px] p-4 flex-row items-center justify-between" style={softShadow}>
                <View className="flex-row items-center">
                  <View className="w-12 h-12 rounded-full bg-[#EBE9FE] items-center justify-center mr-3">
                    <Text className="text-[#6366F1] font-bold text-lg">A</Text>
                  </View>
                  <View>
                    <Text className="text-[#3A3A3A] font-bold text-base">Aditi</Text>
                    <Text className="text-[#7C7C7C] text-xs">Assessment: IND</Text>
                  </View>
                </View>
                <TouchableOpacity className="w-10 h-10 bg-[#F3F4F6] rounded-full items-center justify-center outline-none">
                  <ChevronRight size={20} color="#3A3A3A" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Recent Requests */}
            <View className="px-4 mb-10">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-[#3A3A3A] text-lg font-bold">Recent Requests <Text className="text-[#FF4757]">(30)</Text></Text>
                <TouchableOpacity className="outline-none"><Text className="text-[#FF4757] font-bold text-sm">View All</Text></TouchableOpacity>
              </View>

              {/* Request Card 1 (Note) */}
              <View className="bg-white rounded-[20px] p-5 mb-4" style={softShadow}>
                <View className="flex-row justify-between items-start mb-4">
                  <View>
                    <Text className="text-[#3A3A3A] font-bold text-base mb-1">New note created</Text>
                    <Text className="text-[#7C7C7C] text-xs">Test Note Details</Text>
                  </View>
                  <View className="bg-[#EBE9FE] px-2 py-1 rounded-[8px]">
                    <Text className="text-[#6366F1] text-[10px] font-bold">Jun 16, 2026</Text>
                  </View>
                </View>

                {/* Overlapping Avatars for Teacher/Student */}
                <View className="flex-row items-center mb-5">
                  <View className="flex-row items-center mr-4">
                    <View className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white -mr-2 z-10 overflow-hidden"><Image source={avatar1} className="w-full h-full" /></View>
                    <View className="w-8 h-8 rounded-full bg-[#D1FAE5] border-2 border-white items-center justify-center z-0"><Text className="text-[10px]">👩‍🏫</Text></View>
                    <View className="ml-3">
                      <Text className="text-[#3A3A3A] font-bold text-xs">Test Vishal</Text>
                      <Text className="text-[#10B981] text-[10px]">Teacher</Text>
                    </View>
                  </View>
                  <View className="w-[1px] h-6 bg-slate-200 mr-4"></View>
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-[#DBEAFE] border-2 border-white items-center justify-center"><Text className="text-[10px]">👧</Text></View>
                    <View className="ml-2">
                      <Text className="text-[#3A3A3A] font-bold text-xs">Aditi</Text>
                      <Text className="text-[#3B82F6] text-[10px]">Student</Text>
                    </View>
                  </View>
                </View>

                {/* Actions */}
                <View className="flex-row justify-between">
                  <TouchableOpacity activeOpacity={0.8} className="flex-1 bg-[#10B981] h-[50px] rounded-[10px] items-center mr-2 flex-row justify-center outline-none">
                    <Check size={16} color="white" className="mr-1" />
                    <Text className="text-white font-bold text-sm">Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8} className="flex-1 bg-[#FF4757] h-[50px] rounded-[10px] items-center ml-2 flex-row justify-center outline-none">
                    <X size={16} color="white" className="mr-1" />
                    <Text className="text-white font-bold text-sm">Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              {/* Request Card 2 (Media) */}
              <View className="bg-white rounded-[20px] p-5 mb-4" style={softShadow}>
                <View className="w-full h-32 bg-[#F3F4F6] rounded-[12px] mb-4 overflow-hidden items-center justify-center">
                  <Text className="text-4xl">🎥</Text>
                </View>
                <View className="flex-row justify-between items-start mb-4">
                  <View>
                    <Text className="text-[#3A3A3A] font-bold text-base mb-1">Testing video E1</Text>
                    <Text className="text-[#7C7C7C] text-xs">Video Upload</Text>
                  </View>
                  <View className="bg-[#EBE9FE] px-2 py-1 rounded-[8px]">
                    <Text className="text-[#6366F1] text-[10px] font-bold">May 28, 2026</Text>
                  </View>
                </View>

                {/* Actions */}
                <View className="flex-row justify-between">
                  <TouchableOpacity activeOpacity={0.8} className="flex-1 bg-[#10B981] h-[50px] rounded-[10px] items-center mr-2 flex-row justify-center outline-none">
                    <Check size={16} color="white" className="mr-1" />
                    <Text className="text-white font-bold text-sm">Approve</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8} className="flex-1 bg-[#FF4757] h-[50px] rounded-[10px] items-center ml-2 flex-row justify-center outline-none">
                    <X size={16} color="white" className="mr-1" />
                    <Text className="text-white font-bold text-sm">Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>

            <View className="h-20"></View>
          </ScrollView>
        </SafeAreaWrapper>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;
