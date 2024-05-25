import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuContainer from '../components/MenuContainer';
import { beach, mountain, museum, notfound } from '../assets';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ItemCardContainer from '../components/ItemCardContainer';



const Beranda = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [mainData, setMainData] = useState([]);


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
      {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#3C5B6F"/>
        </View> :
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

          {/*Card Section */}
          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
           {mainData?. length > 0 ? ( <> 
           <ItemCardContainer key={"101"} 
            imageSrc={"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/08/24.jpg"} 
            title={"Tanah Lot"} 
            location={"Bali"}/>

            <ItemCardContainer key={"102"} 
            imageSrc={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.travelloratour.com%2Fpantai-wisata-balekambang%2F&psig=AOvVaw2a41-H5zYwSiSltG6g8V0x&ust=1716560357606000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID-jeX7o4YDFQAAAAAdAAAAABAE"}
             title={"Balekambang"} 
             location={"Malang"}
             />
             </>) 
             :( <>
             <View className="w-full h-[400px] items-center space-y-8 justify-center">
              <Image source={notfound} className="w-32 h-32 object-cover"/>
              <Text className="text-2xl text-[#3C5B6F] font-semibold">Opps....No Data Found</Text>
             </View>
             </>)}
          </View>
        </View>
      </ScrollView>

      }
      
    </SafeAreaView>
      
    
  )
}

export default Beranda