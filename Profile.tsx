import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import data from './data.json';
import NavBar from './NavBar';

const Profile = () => {

  return (
  <View View style={styles.container}>
  <NavBar />
    <View style={styles.header}><Text style={styles.headline}>Hello {data.user.firstName}</Text></View>
    <View style={styles.body}><Text style={styles.boxHeader}>
    Full Name: {data.user.firstName + data.user.lastName}
    email: {data.user.email}
    Birth Date: {data.user.birthDate}
    </Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#dfe6e9",
        flex: 1,
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignSelf: "flex-end",
        flex: 1
    },
    headline:{
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
    },
   body: {
          backgroundColor: "#fdcb6e",
          flex: 2,
          width: "95%",
          margin: 10,
          borderRadius: 10
    },
    boxHeader:{
        color:'white',
        alignSelf:'center',
        fontSize: 20
    }
});

export default Profile;
