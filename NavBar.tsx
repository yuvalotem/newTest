import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
const navigation = useNavigation();
  return (
  <View View style={styles.container}>
  <Button
      title="Profile"
      style={styles.navButton}
      onPress={() => navigation.navigate('Profile')}/>

        <Button
            title="Friends"
            style={styles.navButton}
            onPress={() => navigation.navigate('Friends')}/>
  </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#dfe6e9",
        flex: 1,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
      navButton: {
             flex: 1,
             padding: 50,
             margin: 50,
             height: 20,
             width: 40,
             borderColor: 'gray',
             borderWidth: 1
       }
});

export default NavBar;
