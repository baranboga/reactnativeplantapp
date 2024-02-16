import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie source={require('../assets/animations/home.json')} autoPlay loop />
      </View>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text2}>You've already started building the Plant Kingdom. Start production now!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text>What can I do?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Plant")}} style={styles.startButton}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  lottie:{
    width: width,
    height: 425
  },
  text: {
    marginTop: 50,
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  text2: {
    fontSize: width * 0.04,
    marginBottom: 20,
    marginHorizontal: 20
  },
  resetButton: {
    backgroundColor: '#a78bfa',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
  startButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
  buttonContainer:{
    flexDirection: 'row', // Yatay düzenleme için
    justifyContent: 'center',
    borderRadius: 10
  }
});
