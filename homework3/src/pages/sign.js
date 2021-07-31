import React, { Component } from 'react';
import { View, Text, TextInput, StatusBar, Image, Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height';
import Button from '../components/button';


const Sign = ({navigation}) => {

    function handleSubmit() {
        navigation.navigate('LoginPage')
    }
    return (

        <>
            <StatusBar backgroundColor={"black"} translucent />
            <View style={styles.container}>
                <View style={{ height: getSBH(), backgroundColor: "white" }} />

                <View style={{ justifyContent: "center", alignItems: "center"}}>
                    
                    <TextInput style={styles.textInput} placeholder="Telefon" />
                    <Button >İleri</Button>
       
                    <View style={{ flexDirection: 'row', height: 1, backgroundColor: 'black', width: "85%", marginTop: 200, opacity: 0.5 }} ></View>
                    <TouchableOpacity onPress={handleSubmit}>
                         <Text style={{ color: "gray", fontSize: 12, marginTop: 15 }}>  Hesabın zaten var mı? <Text style={{ fontWeight: 'bold', color: "#000080" }}>Giriş Yap.</Text></Text>
                    </TouchableOpacity>
               
                </View>

            </View>
        </>




    );
    

};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: 'column'

    },
    topArea: {
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        backgroundColor: "rgba(236, 236, 236, 0.3)",
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(189, 195, 199, 0.7)',
        borderRadius: 5,
        marginTop: 10,
        width: "85%",
    }
});
export default Sign;