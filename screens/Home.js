import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { traveling } from '../assets';

const Home = () => {

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
                <Text className="text-[#67C6E3] text-4xl font-bold">Journey</Text>
            <View>
                <Text className="text-[#3C5B6F] text-4xl font-bold">Joy</Text>
            </View>
        </View>

        {/*Second Section */}
            <View className="px-6 mt-4 space-y-3">
                <Text className="text-black text-[25px] font-semibold ">Best Destinations, Unforgettable Experiences</Text>
            <Text className="text-justify">
            Of course! Get ready for an incredible adventure you will never forget! With JourneyJoy Travel, you not only discover the world's best places, but also create memories that will last a lifetime. Through our services, you can explore awe-inspiring natural wonders, experience the awe-inspiring beauty of cultures, and be enchanted by the charm of great cities around the world. From enchanting mountain ranges to enchanting exotic beaches, every trip you take will be filled with unforgettable wonders. Make your travel dreams come true with the ease and comfort offered by JourneyJoy. Start your dream adventure right now with us!
            </Text>
            </View>

             {/*Start Section */}
             <TouchableOpacity 
             onPress={() => navigation.navigate("Beranda")}
             className="ml-[100px] mt-6 w-[208px] h-10 border-dashed border-2 border-[#67C6E3]
        item s-center justify-center">
            
            <View className="ml-1 w-[195px] h-8 items-center justify-center bg-[#67C6E3]">
                <Text className="text-black text-[20px] font-semibold">Start</Text>
            </View>
            </TouchableOpacity>

        {/*Pesawat Section */}
        <View className="flex-1 relative items-center justify-center">
        <Image
        source={traveling}
        className="w-full obfullject-cover"
        />

        </View>
    </SafeAreaView>
  );
};

export default Home