import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListItem from '../components/ListItem';
import { fetchData } from '../api/api';
import CategoryItems from '../components/CategoryItems'; // Import CategoryItems component

const Beranda = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [mainData, setMainData] = useState({ places: [], categories: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null); // State to store the selected category
  const { places, categories } = mainData;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetchData();
        setMainData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        // Handle error here if needed
      }
    };

    fetchAllData();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  // Filtered places data based on search query and selected category
 // Filtered places data based on search query and selected category
const filteredPlacesData = mainData.places.filter(item =>
  item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  (!selectedCategory || item.category.name === selectedCategory)
);


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row px-6 mt-8 items-center justify-between">
        <View className="flex-row px-3 mt-6 items-center space-x-1">
          <Text className="text-[#67C6E3] text-3xl font-bold">Journey</Text>
          <Text className="text-[#3C5B6F] text-3xl font-bold">Joy</Text>
        </View>
      </View>

      {/* Search Section */}
      <View className="flex flex-row items-center bg-white mx-6 my-5 p-2 border border-gray-300 rounded-full shadow-lg">
        <TextInput
          className="flex-1 px-4 text-sm text-gray-600"
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {/* Category Section */}
      <View className="">
        <Text className="text-[#3C5B6F] text-[18px] font-bold mb-4 px-8">Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <View key={index} className="my-2 ml-6 px-4 bg-white border rounded-lg">
              <Text
                onPress={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)} // Toggle selected category
                className={`text-${selectedCategory === category.name ? 'blue' : 'gray'} font-bold mb-2`}
              >
                {category.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Top List Section */}
      <ScrollView className="mt-4">
        <View className="">
          <Text className="text-[#3C5B6F] text-[18px] font-bold mb-2 px-8">Top List</Text>
          <View className="px-2">
            {filteredPlacesData.map((item, index) => (
              index % 2 === 0 && (
                <View key={index} className="flex-row justify-between">
                  <ListItem
                    key={item.id}
                    imageSrc={item.photo}
                    title={item.name}
                    location={item.slug}
                    description={item.description}
                    category={item.category.name}
          
                  />
                  {/* Render the second card only if it's not the last item and the current index is not the last one */}
                  {index + 1 < filteredPlacesData.length && (
                    <ListItem
                      key={filteredPlacesData[index + 1].id}
                      imageSrc={filteredPlacesData[index + 1].photo}
                      title={filteredPlacesData[index + 1].name}
                      location={filteredPlacesData[index + 1].slug}
                      description={filteredPlacesData[index + 1].description}
                      category={filteredPlacesData[index + 1].category.name}
                    />
                  )}
                </View>
              )
            ))}
               {/* Show message if no places found */}
               {filteredPlacesData.length === 0 && (
              <Text className="text-gray-500 text-center">No places found.</Text>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Loading Indicator */}
      {isLoading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#3C5B6F"/>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Beranda;
