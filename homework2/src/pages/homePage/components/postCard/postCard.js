import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const PostCard = (props) => {
    return (
        <View style={styles.container}>
            <View style = {styles.tab}>
                <Image style={styles.authorimage} source={{ uri: props.news.authorimageUrl }}/>
                <Text style={styles.author}>{props.news.author}</Text>
                <TouchableOpacity style={{marginLeft: 'auto', marginRight:10}}>
                    <Entypo name="dots-three-vertical" color={"black"} size={16} />
                </TouchableOpacity>
            </View>

            <Image style={styles.image} source={{ uri: props.news.imageUrl }} />

            <View style={styles.icons}>
                <TouchableOpacity>
                    <AntDesign name="hearto" color={"black"} size={24} style={{}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="comment-o" color={"black"} size={24} style={{marginHorizontal:15}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="send" color={"black"} size={24} style={{}}/>
                </TouchableOpacity>
                <TouchableOpacity  style={{marginHorizontal:5,marginLeft: 'auto'}} > 
                    <AntDesign name="tago" color={"black"} size={24} />
                </TouchableOpacity>
                
            </View>


            <View style={styles.info}>
                <Text style={{fontWeight: 'bold',}}>150 likes</Text>
                <Text > <Text style={{fontWeight: 'bold',}} >{props.news.author}  </Text>{props.news.description}</Text>
                <TouchableOpacity style={{margin:3}}>
                    <Text style={styles.comment}>View all comments</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <Image style={styles.commentimage} source={{ uri: props.news.authorimageUrl }}/>
                    <TextInput style={{marginHorizontal: 10,}} placeholder="Add a comment..." />
                </View>
                <Text style={styles.time}>1 hour ago</Text>
            </View>
            

            
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex:1
    },
    icons: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        height: 250,        
    },
    authorimage: {
        height: 35,
        width: 35,
        marginHorizontal: 10,
        borderRadius:30
    },
    commentimage: {
        height: 25,
        width: 25,
        borderRadius:30
    },
    info: {
        justifyContent:'center',
        marginHorizontal: 10,
        fontSize: 14,
    },
    description: {
        marginTop: 3,
    },
    like: {
        marginHorizontal:10,
        
        fontSize: 14,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tab: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems:'center'
    },
    time: {
        color: 'gray',
        fontSize: 12,
    },
    comment: {
        color: 'gray',
        opacity: 0.7
    }
});

export default PostCard;
