// MenuContainer.js
import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {   
    if (!title) {
      return null; 
    }
  
    const handlePress = () => {
      setType(title.toLowerCase()); 
    };
  
    return (
      <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
        <View
          className={`w-24 h-24 shadow-sm rounded-full items-center justify-center ${
            type === title.toLowerCase() ? "bg-gray-200" : ""
          }`}
        >
          <Image source={imageSrc} className="w-full h-full object-contain" />
        </View>
        <Text className="text-[#67C6E3] text-xl font-semibold">{title}</Text>
      </TouchableOpacity>
    );
  };
  
  export default MenuContainer;
