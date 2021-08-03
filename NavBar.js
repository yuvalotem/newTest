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

const NavBar = () => {

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
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
    },
      navButton: {
             height: 20,
             width: 40,
             borderColor: 'gray',
             borderWidth: 1
       }
});

export default NavBar;
