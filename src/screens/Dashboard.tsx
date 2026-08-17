import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" />
      <ScrollView className="flex-1 px-6 pt-10" showsVerticalScrollIndicator={false}>

        {/* Header Section */}
        <View className="flex-row justify-between items-center mb-10">
          <View>
            <Text className="text-slate-400 text-lg font-medium">Good Morning,</Text>
            <Text className="text-white text-3xl font-bold mt-1">Student 🎓</Text>
          </View>
          <View className="w-14 h-14 bg-indigo-500 rounded-full items-center justify-center border-2 border-slate-700 shadow-lg">
            <Text className="text-white text-xl font-bold">S</Text>
          </View>
        </View>

        {/* Hero Card */}
        <View className="bg-indigo-600 rounded-3xl p-6 mb-8 shadow-xl shadow-indigo-500/30">
          <Text className="text-indigo-100 text-base font-medium mb-2">Today's Progress</Text>
          <Text className="text-white text-4xl font-extrabold mb-4">85%</Text>

          <View className="w-full h-2 bg-indigo-900/50 rounded-full mb-4">
            <View className="w-[85%] h-full bg-white rounded-full"></View>
          </View>

          <Text className="text-indigo-100 text-sm">Keep it up! You're almost there.</Text>
        </View>

        {/* Quick Actions Grid */}
        <Text className="text-white text-xl font-bold mb-4">Quick Actions</Text>
        <View className="flex-row flex-wrap justify-between">

          {/* Action 1 */}
          <TouchableOpacity className="w-[47%] bg-slate-800 rounded-2xl p-5 mb-4 shadow-sm border border-slate-700/50 items-center">
            <View className="w-12 h-12 bg-blue-500/20 rounded-full items-center justify-center mb-3">
              <Text className="text-blue-400 text-2xl">📚</Text>
            </View>
            <Text className="text-white font-semibold">Courses</Text>
            <Text className="text-slate-400 text-xs mt-1">12 Active</Text>
          </TouchableOpacity>

          {/* Action 2 */}
          <TouchableOpacity className="w-[47%] bg-slate-800 rounded-2xl p-5 mb-4 shadow-sm border border-slate-700/50 items-center">
            <View className="w-12 h-12 bg-emerald-500/20 rounded-full items-center justify-center mb-3">
              <Text className="text-emerald-400 text-2xl">📝</Text>
            </View>
            <Text className="text-white font-semibold">Assignments</Text>
            <Text className="text-slate-400 text-xs mt-1">3 Pending</Text>
          </TouchableOpacity>

          {/* Action 3 */}
          <TouchableOpacity className="w-[47%] bg-slate-800 rounded-2xl p-5 mb-4 shadow-sm border border-slate-700/50 items-center">
            <View className="w-12 h-12 bg-orange-500/20 rounded-full items-center justify-center mb-3">
              <Text className="text-orange-400 text-2xl">📅</Text>
            </View>
            <Text className="text-white font-semibold">Schedule</Text>
            <Text className="text-slate-400 text-xs mt-1">Up next: Math</Text>
          </TouchableOpacity>

          {/* Action 4 */}
          <TouchableOpacity className="w-[47%] bg-slate-800 rounded-2xl p-5 mb-4 shadow-sm border border-slate-700/50 items-center">
            <View className="w-12 h-12 bg-pink-500/20 rounded-full items-center justify-center mb-3">
              <Text className="text-pink-400 text-2xl">🏆</Text>
            </View>
            <Text className="text-white font-semibold">Grades</Text>
            <Text className="text-slate-400 text-xs mt-1">View Report</Text>
          </TouchableOpacity>

        </View>

        <View className="h-10"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
