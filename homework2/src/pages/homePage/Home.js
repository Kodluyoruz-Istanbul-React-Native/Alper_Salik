import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import post_data from './components/post_data.json';
import story_data from './components/story_data.json';
import PostCard from './components/postCard/postCard';
import StoryCard from './components/storyCard/storyCard';

const Home = () => {
  const renderPost = ({ item }) => <PostCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('./insta2.png')} style={{ width: 120, height: 60, }} />
        <TouchableOpacity style={{marginLeft: 'auto'}}>
          <Ionicons name="add-circle-outline" color={"black"} size={26} />
        </TouchableOpacity>
         <TouchableOpacity style={{marginHorizontal: 20,}}>
          <AntDesign name="hearto" color={"black"} size={26}  />
        </TouchableOpacity>
         <TouchableOpacity>
          <AntDesign name="message1" color={"black"} size={26} style={{}}/>
        </TouchableOpacity>
      </View>
        
        <FlatList
        ListHeaderComponent={() => (
          <>
            <ScrollView style={styles.scroll}  horizontal showsHorizontalScrollIndicator={false}>
            {
              story_data.map(story_data => (<StoryCard  data={story_data} />))
            }
            
            </ScrollView>
            <View style={{ flexDirection: 'row', height: 1, backgroundColor: 'gray',  opacity: 0.2 }} ></View>
          </>
          )}

          keyExtractor={item=> item.id.toString()}
          data={post_data}
          renderItem={renderPost}
        />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
   
    
  },
  header: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  topBar: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Home;