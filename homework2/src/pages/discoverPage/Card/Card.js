import React from 'react';
import { View, Image, StyleSheet,} from 'react-native';


const PostCard = (props) => {
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={{ uri: props.news.imageUrl }} />
         
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        padding:1
    },
    image: {
        height: 150,
        width: 150
    },
   
});

export default PostCard;
