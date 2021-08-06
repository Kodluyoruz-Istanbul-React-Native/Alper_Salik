import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput} from 'react-native';


const storyCard = (props) => {
    return (
        <View style={styles.container}>
            <View  style={styles.innerContainer} >
                <View style={styles.outside}>
                    <Image style={styles.image} source={{ uri: props.data.imageUrl }} />
                </View>
                <Text>{props.data.author}</Text>
            </View>    
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 5,
    },
    innerContainer: {
        
        alignItems: 'center'
    },
    outside: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'red'
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
    },
    
});

export default storyCard;
