import React, { Component } from 'react';
import { View, Text, TextInput, StatusBar, Image, Pressable } from 'react-native';
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height';
//import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';


const App = () =>{

    
        return (

            <>
                <StatusBar
                    backgroundColor={"black"}
                    translucent
                />


                <View style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: 'column'
                }}
                >
                    <View style={{ height: getSBH(), backgroundColor: "white" }} />

                    <View style={{
                       
                        justifyContent: "center",
                        alignItems: "center",
                        
                    }}>
                        <Text style={{ color: "gray", marginTop:20}}>
                            Türkçe ⌵
                        </Text>
                        <Image source={require('./insta2.png')} style={{ width: 180, height: 80, marginTop:80}} />
                    </View>

                    
                    <View style={{
                      
                        justifyContent: "center",
                        alignItems: "center"
                    }}>



                        <TextInput style={{
                            backgroundColor: "rgba(236, 236, 236, 0.3)",
                            padding: 10,
                            borderWidth: 1,
                            borderColor: 'rgba(189, 195, 199, 0.7)',
                            borderRadius: 5,
                            width: "85%"
                        }}
                            placeholder="Telefon numarası, e-posta adresi veya kullanıcı adı"
                        />
                        <TextInput style={{
                            backgroundColor: "rgba(236, 236, 236, 0.3)",
                            padding: 10,
                            borderWidth: 1,
                            borderColor: 'rgba(189, 195, 199, 0.7)',
                            borderRadius: 5,
                            marginTop: 10,
                            width: "85%"
                        }}
                            placeholder="Şifre"
                        >

                        </TextInput>
                        <Pressable style={{
                            backgroundColor: "rgb(135,206,250)",
                            padding: 10,
                            borderRadius: 5,
                            marginTop: 10,
                            width: "85%",
                            height: "12%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <Text style={{ color: "white", fontSize: 16 }}>Giriş Yap</Text>
                        </Pressable>
                        
                        <Text style={{ color: "gray", fontSize: 12, marginTop: 15 }}>
                            Giriş detaylarını mı unuttun? <Text style={{ fontWeight: 'bold', color:"#000080" }}>Giriş yapmak için yardım al.</Text>
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop:15, opacity:0.5}}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                            <View>
                                <Text style={{ width: 50, textAlign: 'center' }}>YA DA</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        </View>

                        <Text style={{ color: "#1E90FF", fontSize: 14, marginTop: 20, fontWeight:"bold" }}>
                           Facebook ile Giriş Yap
                        </Text>

                        
                        <View style={{ flexDirection: 'row', height: 1, backgroundColor: 'black', width: "85%", marginTop: 100, opacity: 0.5 }} ></View>
                        <Text style={{ color: "gray", fontSize: 12, marginTop: 15 }}>
                            Hesabın yok mu? <Text style={{ fontWeight: 'bold', color:"#000080" }}>Kaydol.</Text>
                        </Text>

                    </View>

                </View>
            </>




        );
    

}
export default App;