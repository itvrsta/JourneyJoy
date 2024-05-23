import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import React from 'react';

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{ uri: imageSrc }}  
        className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#3C5B6F] text-[18px] font-bold">{title}</Text>
      <View className="flex-row items-center space-x-1">
        <Fontisto name="map-marker-alt" size={18} color="#3C5B6F" />
        <Text className="text-[#428288] text-[15px] font-bold">{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
