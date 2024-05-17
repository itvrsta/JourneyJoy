import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Beranda = () => {
  const navigation = useNavigation();

        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown:false,
            });
          },[]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-6 mt-8 items-center justify-between px-8">
      <View className="flex-row px-3 mt-6 items-center space-x-1">
                <Text className="text-[#67C6E3] text-5xl font-bold">News</Text>
            <View>
                <Text className="text-black text-5xl font-bold">Nexus</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
      
    
  )
}

export default Beranda