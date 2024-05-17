import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { reporter } from '../assets';

const HomeScreen = () => {

        const navigation = useNavigation();

        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown:false,
            });
        },[]);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
        {/*First Section */}
        <View className="flex-row px-6 mt-8 items-center space-x-1">
                <Text className="text-[#67C6E3] text-5xl font-bold">News</Text>
            <View>
                <Text className="text-black text-4xl font-bold">Nexus</Text>
            </View>
        </View>

        {/*Second Section */}
            <View className="px-6 mt-6 space-y-3">
                <Text className="text-black text-[32px] font-semibold ">Enjoy your day with the Latest New</Text>
            <Text className="text-justify">
            Enjoy your day by following the latest news updates. By staying informed, you can face all the challenges and opportunities that arise throughout the day. Start the morning by reading the latest news to understand important events around you, both local and international. Keeping up with the latest developments can also enrich your conversations with friends and colleagues, providing a broader and deeper perspective on current issues. This way, you can enjoy your day more meaningfully and productively.
            </Text>
            </View>

             {/*Start Section */}
             <TouchableOpacity 
             onPress={() => navigation.navigate("Beranda")}
             className="ml-[150px] mt-6 w-[108px] h-10 border-dashed border-2 border-[#67C6E3]
        item s-center justify-center">
            
            <View className="ml-1 w-[95px] h-8 items-center justify-center bg-[#67C6E3]">
                <Text className="text-black text-[20px] font-semibold">Start</Text>
            </View>
            </TouchableOpacity>

        {/*Reporter Section */}
        <View className="flex-1 relative items-center justify-center">
        <Image
        source={reporter}
        className="w-full h- obfullject-cover mt-[300px]"
        />

        
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen