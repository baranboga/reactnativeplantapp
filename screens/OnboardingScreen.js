import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Home');
    // setItem('onboarded', '1');    uygulamaya ilk kez girdikten sonra çıkmaması için
  }

  // Done butonunu custom olarak hazırladık ve aşağıda özelliklere verdik.
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/animation.json')} autoPlay loop />
              </View>
            ),
            title: 'Boost Your Productivity',
            subtitle: 'Learn how to grow many plants.',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/plant2.json')} autoPlay loop />
              </View>
            ),
            title: 'Grow and Sell',
            subtitle: 'Grow requested plants and sell them to customers.',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../assets/animations/plant3.json')} autoPlay loop />
              </View>
            ),
            title: 'Set Up Your Own Greenhouse and Start Earning!',
            subtitle: 'You can establish your own plant kingdom with the app.',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie: {
    width: width * 0.9,
    height: width
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  }
})
