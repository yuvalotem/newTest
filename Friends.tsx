import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavBar from './NavBar';
import data from './data.json';

const Friends = () => {
  return (
  <View View style={styles.container}>
    <NavBar/>
    <View style={styles.header}><Text style={styles.headline}>Hello {data.user.firstName}</Text></View>
    {data.friends.map(f=>{
    return(
    <View key={f.email} style={styles.friends}>
    <Image
        style={styles.photo}
        source={{
          uri: f.image,
        }}
          />
    <Text style={styles.boxHeader}>{f.firstName + " " + f.lastName}</Text>
    </View>
    )})}

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
  friends: {
        backgroundColor: "#81ecec",
        flex: 3,
        width: "95%",
        margin: 10,
        borderRadius: 10
  },
    boxHeader:{
        color:'white',
        alignSelf:'center',
        fontSize: 20
    },
      photo: {
        width: 150,
        height: 150,
      },
});

export default Friends;
