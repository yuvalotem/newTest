import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

const Login = ({ navigation }) => {
  return (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome</Text>
    <TextInput style={styles.input} placeholder="Email" />
    <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />
    <Button
    title="Sign In"
    style={styles.signInButton}
    onPress={() => navigation.navigate('Friends')}/>
   </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'stretch',
    },
    header: {
        alignSelf: "center",
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        marginTop: 100,
        marginBottom: 100,
    },
  input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
  },
   signInButton: {
          height: 20,
          width: 40,
          borderColor: 'gray',
          borderWidth: 1
    },
});

export default Login;
