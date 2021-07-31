import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={ onPress } style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,

    },
    buttonStyle: {
        backgroundColor: "rgb(135,206,250)",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "85%",
        height: "12%",
        justifyContent: "center",
        alignItems: "center"
    },
    
});
export default Button;