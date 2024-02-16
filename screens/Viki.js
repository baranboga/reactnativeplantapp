import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import Modal from 'react-native-modal';
import { WebView } from "react-native-webview";







const Viki = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const info=route.params.url


 

  const fakeData = [
    { id: 1, name: 'Aleo Vera', price: 10.99, image:require("../assets/images/1.webp"),imageid:"1" },
    { id: 2, name: 'Spathiphyllum', price: 15.99, image:require("../assets/images/2.jpeg"),imageid:"1" },
    { id: 3, name: 'Snake Plant', price: 12.99, image:require("../assets/images/3.webp"),imageid:"3" },
    { id: 4, name: 'Monstera Deliciosa', price: 24.99, image:require("../assets/images/Monsteradeliciosa.webp"),imageid:"1" },
    { id: 5, name: 'Fiddle Leaf Fig', price: 29.99, image:require("../assets/images/Yonca.jpeg"),imageid:"1" },
    { id: 6, name: 'Fiddle ', price: 29.99, image:require("../assets/images/FiddleLeafFig.jpeg"),imageid:"1" },
    { id: 7, name: 'Fiddle ', price: 29.99, image:require("../assets/images/FiddleLeafFig.jpeg"),imageid:"1" },
    { id: 8, name: 'Monstera Deliciosa', price: 24.99, image:require("../assets/images/Monsteradeliciosa.webp"),imageid:"1" },
    
  ];

  return (
   
    <WebView
    source={{ uri:info }}
    style={{ flex: 1 }}
  />
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
   
  },
  openNavbarButton: {
    padding: 10,
    backgroundColor: '#d2b48c',
    color: 'white',
    textAlign: 'center',
  },
 
  navbar: {
    backgroundColor: '#d2b48c',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryItem: {
    padding: 10,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
    
  },
  scrollView: {
    flex: 1,
  },
  productCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  card: {
    
    width: '45%',
  },
  cardImage:{

    width:200

  },
  cardContent:{

    width:120

  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planın karanlık olması için rgba kullanılır
  },
 
});

export default Viki;
