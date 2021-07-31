import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import news_data from './components/news_data.json';
import news_banner_data from './components/news_banner_data.json';
import NewsCard from './components/postCard/postCard';

const Home = () => {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding:10}}>
        <Image source={require('./insta2.png')} style={{ width: 100, height: 50,}} />
      </View>
        
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView style={styles.scroll}  horizontal showsHorizontalScrollIndicator={false}>
            {
              //news_banner_data.map(bannerNews => (<Image style={styles.image} source= {{uri: bannerNews.imageUrl}} />))
            }
            </ScrollView>
          )}

          keyExtractor={item=> item.id.toString()}
          data={news_data}
          renderItem={renderNews}
        />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  image: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width/2,
  },
  scroll: {
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 50,
  }
});

export default Home;