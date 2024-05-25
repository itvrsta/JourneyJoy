import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator, Image, TextInput } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuContainer from '../components/MenuContainer';
import { beach, mountain, museum, notfound } from '../assets';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ItemCardContainer from '../components/ItemCardContainer';

const Beranda = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [mainData, setMainData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dewalaravel.com/api/places');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setMainData(jsonData.data); // Menggunakan data langsung, sesuaikan dengan respons API
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const menuItems = [
    { key: 'beach', title: 'Beach', imageSrc: beach },
    { key: 'mountain', title: 'Mountain', imageSrc: mountain },
    { key: 'museum', title: 'Museum', imageSrc: museum },
  ];

  const setType = (type) => {
    console.log('Type:', type);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredData = mainData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-6 mt-8 items-center justify-between">
        <View className="flex-row px-3 mt-6 items-center space-x-1">
          <Text className="text-[#67C6E3] text-3xl font-bold">Journey</Text>
          <Text className="text-[#3C5B6F] text-3xl font-bold">Joy</Text>
        </View>
      </View>
      {/* Search Section */}
      <View className="flex flex-row items-center bg-white mx-6 my-5 p-2 border-2 rounded-full shadow-lg">
        <TextInput
          className="flex-1 px-4 text-sm text-gray-600"
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#3C5B6F" />
        </View>
      ) : filteredData.length === 0 ? (
        <View className="w-full h-[400px] items-center space-y-8 justify-center">
          <Image source={notfound} className="w-32 h-32 object-cover" />
          <Text className="text-2xl text-[#3C5B6F] font-semibold">Opps....No Data Found</Text>
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-2">
            {menuItems.map((item) => (
              <MenuContainer
                key={item.key}
                title={item.title}
                imageSrc={item.imageSrc}
                type={item.key}
                setType={setType}
                description={item.description}
              />
            ))}
          </View>

          <View className="px-4 mt-4">
            <View className="flex-row items-center justify-between px-4 mt-4">
              <Text className="text-[#3C5B6F] text-[18px] font-bold">Top List</Text>
            </View>
            {/* Card Section */}
            <View className="mt-2 flex-wrap">
              {filteredData.map((item, index) => (
                index % 2 === 0 && (
                  <View key={index} className="flex-row justify-between">
                    <ItemCardContainer
                      key={item.id}
                      imageSrc={item.photo}
                      title={item.name}
                      location={item.slug}
                      description={item.description}
                    />
                    {index + 1 < filteredData.length && (
                      <ItemCardContainer
                        key={filteredData[index + 1].id}
                        imageSrc={filteredData[index + 1].photo}
                        title={filteredData[index + 1].name}
                        location={filteredData[index + 1].slug}
                        description={filteredData[index + 1].description}
                      />
                    )}
                  </View>
                )
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Beranda;
