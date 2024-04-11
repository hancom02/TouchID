import { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import TouchID from 'react-native-touch-id';
//import FingerScanner from 'react-native-fingerprint-scanner';



export default function LoginScreen({navigation}) {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [isSensorAvailable, setIsSensorAvailable] = useState(false);

    // useEffect(() => {
    //     const checkSensorAvailability = async () => {
    //       const available = await FingerScanner.isSensorAvailable();
    //       setIsSensorAvailable(available);
    //     };
    
    //     checkSensorAvailability();
    // }, []);

    const optionalConfigObject = {
        title: '', // Android
        imageColor: 'lightblue', // Android
        imageErrorColor: '#ff0000', // Android
        sensorDescription: 'Touch sensor', // Android
        sensorErrorDescription: 'Failed', // Android
        cancelText: 'Cancel', // Android
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: true, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
      };

    // const fingerAuthenConfig = {
    //     title: 'Fingerprint Authentication Required',
    //     description: 'Scan your fingerprint to login FRENZY',
    // }
    const loginHandler = () => {
        TouchID.authenticate('Please authenticate to access FRENZY', optionalConfigObject)
        .then(success => {
            //alert('nav to home screen');
            // navigation.navigate('Home');
            navigation.navigate('Home');
        })
        .catch(error => {
            Alert.alert('Authentication failed! Please try again!');
            //navigation.navigate('Home');
        });
        
    }
    //<Image style={styles.imageSplash} source={require('../assets/post0.jpg')}/>


    return (
      <View style={styles.container}>
        <Image style={styles.imageSplash} source={require('.././assets/post0.jpg')}/>

        <Text style={styles.textLogo}>FRENZY</Text>

         {/* <View style={styles.usernameContainer}>
           
            <View style={{width: 10}}></View>
            <TextInput 
                style={{width: '85%'}}
                value={name}
                placeholder="Username"
                onChangeText={setName}
            />
        </View>
        <View style={styles.usernameContainer}>
            
            <View style={{width: 10}}></View>
            <TextInput 
                value={pass}
                placeholder="Password"
                onChangeText={setPass}
            />
        </View> */}

        <View style={styles.logginBtn}>
            <Button  
                style={styles.logginBtn}               
                title="Login"
                color={'lightblue'}            
                onPress={loginHandler}
            />
        </View> 

        <TouchableOpacity 
            //style={}
        >
            
        </TouchableOpacity>
                
      </View>
    );
}
 {/* <Ionicons name="lock-closed-outline" size={20}/> */}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    text: {
      color: 'black'
    },
    imageSplash: {
        width: '100%',
        height: '40%',
        resizeMode: 'cover',
        marginBottom: 30
    },
    textLogo: {
        fontSize: 30,
        // fontVariant: 12,
        fontWeight: '500',
        letterSpacing: 6,
        color: 'lightblue',
        marginBottom: 30
    },
    usernameContainer: {
        width: '90%',
        height: 50,
        paddingLeft: 10,
        marginBottom: 20,
        flexDirection: "row", 
        //backgroundColor: 'yellow',
        alignItems: 'center',
        borderRadius: 5,        
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    logginBtn: {
        width: '70%',
        //height: '40%',
        marginTop: 20,
        borderRadius: 5
    },
    signUpContainer: {

    }
});