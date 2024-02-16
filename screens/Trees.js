import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import Modal from 'react-native-modal';



const ProductCard = ({ productName, price,image,imageid }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.card}>
          <View style={styles.cardContent}>
        <Card.Image source={image} style={styles.cardImage} />
        <Text style={styles.productName}>{productName}</Text>
        <Button buttonStyle={{backgroundColor:"#4caf50"}} title="information" onPress={() => navigation.navigate("Detail",{name:productName,itemprice:price,itemimage:imageid})} />
      </View>
    </Card>
  );
};



const Trees = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);
  const categories = ['Plant', 'Trees', 'Fideler', 'Tohumlar'];
  const navigation = useNavigation();

 

  const fakeData = [
    { id: 1, name: 'Oak Tree ', price: 100.99, image:require("../assets/images/4.jpeg"),imageid:"1" },
    { id: 2, name: 'Pine Tree', price: 150.99, image:require("../assets/images/5.jpeg"),imageid:"1" },
    { id: 3, name: 'Birch Tree', price: 123.99, image:require("../assets/images/6.jpeg"),imageid:"3" },
    { id: 4, name: 'Maple Tree', price: 240.99, image:require("../assets/images/7.jpeg"),imageid:"1" },
    { id: 5, name: 'Spruce Tree Tree', price: 122.99, image:require("../assets/images/8.jpeg"),imageid:"3" },
    { id: 6, name: 'Willow Tree', price: 240.99, image:require("../assets/images/9.jpeg"),imageid:"1" },


    
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/Treesback.jpeg")} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => setNavbarVisibility(true)}>
          <Text style={styles.openNavbarButton}>Aç</Text>
        </TouchableOpacity>

        <Modal isVisible={isNavbarVisible} onBackdropPress={() => setNavbarVisibility(false)}>
          <View style={styles.navbar}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <Text onPress={()=>navigation.navigate(category)} style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        <ScrollView style={styles.scrollView}>
          {/* Ürün Kartları */}
          <View style={styles.productCardsContainer}>
            {fakeData.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.name}
                price={product.price}
                image={product.image}
                imageid={product.imageid}
              />
            ))}
          </View>
        </ScrollView>
        </View>
      </ImageBackground>
    </View>
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

export default Trees;
