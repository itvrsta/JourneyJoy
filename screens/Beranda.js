import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuContainer from '../components/MenuContainer';
import { beach, mountain, museum } from '../assets';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Beranda = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('');

        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown:false,
            });
          },[]);

          const menuItems = [
            { key: "beach", title: "Beach", imageSrc: beach },
            { key: "mountain", title: "Mountain", imageSrc: mountain },
            { key: "museum", title: "Museum", imageSrc: museum }
          ];

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-6 mt-8 items-center justify-between px-8">
      <View className="flex-row px-3 mt-6 items-center space-x-1">
                <Text className="text-[#67C6E3] text-3xl font-bold">News</Text>
            <View>
                <Text className="text-[#3C5B6F] text-3xl font-bold">Nexus</Text>
            </View>

        </View>
      </View>
      {/*Search Section */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
       
      </View>
      {/*Menu Section */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          {menuItems.map((item) => (
            <MenuContainer
              key={item.key}
              title={item.title}
              imageSrc={item.imageSrc}
              type={type}
              setType={setType}
            />
          ))}
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#3C5B6F] text-[18px] font-bold">Top List</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#3C5B6F] text-[18px] font-bold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#3C5B6F" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
      
    
  )
}

export default Beranda