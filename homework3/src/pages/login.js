import React, { Component, useState } from 'react';
import { View, Text, TextInput, StatusBar, Image, Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height';
import Button from '../components/button';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth'
import { showMessage } from "react-native-flash-message";
import authErrors from '../components/authErrors';
const initialFormValues = {
    usermail: '',
    password: ''
};

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    function handleSign() {
        navigation.navigate('SignPage')
    }
    async function handleFormSubmit(formValues) {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password); 
        
        } catch (error) {
            showMessage({
              message: authErrors(error.code),
              type: "danger",
            });
            setLoading(false);
        }
        
    }
    return (

        <>
            <StatusBar backgroundColor={"black"} translucent />
            <View style={styles.container}>
                <View style={{ height: getSBH(), backgroundColor: "white" }} />

                <View style={styles.topArea}>
                    <Text style={{ color: "gray", marginTop: 20 }}>
                        Türkçe ⌵
                    </Text>
                    <Image source={require('./insta2.png')} style={{ width: 180, height: 80, marginTop: 80 }} />
                </View>

                    
                <View style={{ justifyContent: "center", alignItems: "center"}}>

                    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                        {({ values, handleChange, handleSubmit }) => (
                            <>
                                <TextInput value={values.usermail} onChangeText= {handleChange('usermail')} style={styles.textInput} placeholder="Telefon numarası, e-posta adresi veya kullanıcı adı"/>
                                <TextInput value={values.password} onChangeText= {handleChange('password')}style={styles.textInput} placeholder="Şifre"/>
                                <Button onPress={handleSubmit}>Giriş Yap</Button>
                            </>
                        )}
                    </Formik>

                    
                        
                    <Text style={{ color: "gray", fontSize: 12, marginTop: 15 }}>
                        Giriş detaylarını mı unuttun? <Text style={{ fontWeight: 'bold', color: "#000080" }}>Giriş yapmak için yardım al.</Text>
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "85%", marginTop: 15, opacity: 0.5 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }}>YA DA</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>

                    <Text style={{ color: "#1E90FF", fontSize: 14, marginTop: 20, fontWeight: "bold" }}>
                        Facebook ile Giriş Yap
                    </Text>

                        
                    <View style={{ flexDirection: 'row', height: 1, backgroundColor: 'black', width: "85%", marginTop: 100, opacity: 0.5 }} ></View>
                    <TouchableOpacity onPress={handleSign}>
                         <Text style={{ color: "gray", fontSize: 12, marginTop: 15 }}>  Hesabın yok mu? <Text style={{ fontWeight: 'bold', color: "#000080" }}>Kaydol.</Text></Text>
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
export default Login;