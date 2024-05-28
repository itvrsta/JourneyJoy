import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const Item = () => {
  const route = useRoute();
  const { name, photo, description } = route.params;
  const navigation = useNavigation();
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white">
  <View className="flex-row px-6 mt-8 items-center justify-between">
    <View className="flex-row px-3 mt-6 items-center space-x-1">
    <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full items-center justify-center bg-[#3C5B6F] shadow-md"
        >
          <FontAwesome5 name="chevron-left" size={24} color="#06b2be" />
        </TouchableOpacity>
      <Text className="text-[#67C6E3] text-3xl font-bold"> Journey</Text>
      <Text className="text-[#3C5B6F] text-3xl font-bold">Joy</Text>
    </View>
  </View>

    <ScrollView className="flex-1 px-4 py-6">
    <View className="relative bg-white shadow-lg rounded-xl">
      <Image
        source={{ uri: photo }}
        className="w-full h-52 rounded-lg"
      />

        <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
      </View>
    </View>

      <View className="mt-4">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>
        <Text className="text-gray-600 mt-2 text-justify">{description}</Text>
      </View>

  </ScrollView>
</SafeAreaView>

  );
};


export default Item