import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageSrc, title, location, description }) => {
  const navigation = useNavigation();
  return (
          <TouchableOpacity 
        onPress={() => navigation.navigate("ItemScreen", { name: title, photo: imageSrc, description: description })}
        className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[175px] my-2"
      >
      <Image
        source={{ uri: imageSrc }}  
        className="w-full h-[150px] rounded-md object-cover"
      />

      {title ? (
        <>
      <Text className="text-[#3C5B6F] text-[18px] font-bold">{title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={18} color="#3C5B6F" />
        <Text className="text-[#428288] text-[15px] font-bold">{location}
          </Text>
      </View>
      </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
