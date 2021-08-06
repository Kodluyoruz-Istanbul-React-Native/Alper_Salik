import React from 'react';
import { SafeAreaView, View, TextInput, FlatList, StyleSheet, Image} from 'react-native';
import story_data from './story_data.json';
import Card from './Card/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Home = () => {
  const renderPost = ({ item }) => <Card news={item} />;
  const numColumns = 3;
  return (
    <SafeAreaView style={styles.container}>
      
        
        <FlatList 
          ListHeaderComponent={() => (
          <>
            <TextInput style={styles.input} placeholder={' Search'}></TextInput>
          </>
          )}
          data={story_data}
          renderItem={renderPost}
          numColumns={numColumns}
        />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "rgba(236, 236, 236, 0.5)",
    borderRadius: 10,
    margin: 10,
    padding: 4,
    fontSize:16,
    
    
    
  },
  
});

export default Home;