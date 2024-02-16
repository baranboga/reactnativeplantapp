import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Button, Overlay } from 'react-native-elements';
import Modal from 'react-native-modal';




const ProductCard = ({ productName, price,image,imageid,itemurl,cins,omur,sicaklik }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.card}>
          <View style={styles.cardContent}>
        <Card.Image source={image} style={styles.cardImage} />
        <Text style={styles.productName}>{productName}</Text>

        <Button buttonStyle={{backgroundColor:"#72d6a8"}} title="information" onPress={() => navigation.navigate("Detail",{name:productName,itemprice:price,itemimage:imageid,url:itemurl,tur:cins,life:omur,warm:sicaklik})} />
      </View>
    </Card>
  );
};



const Plant = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);
  const categories = ['Plant', 'Trees', 'Seedling', 'Seeds'];
  const navigation = useNavigation();


 

  const fakeData = [
    { id: 1, name: 'Aleo Vera', price: 10.99, image:require("../assets/images/1.webp"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Aloe_vera",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    { id: 2, name: 'Spathiphyllum', price: 15.99, image:require("../assets/images/2.jpeg"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Spathiphyllum",cins:"Spathiphylium",omur:"5-15",sicaklik:"10C-20C",},
    { id: 3, name: 'Snake Plant', price: 12.99, image:require("../assets/images/3.webp"),imageid:"3",itemurl:"https://en.wikipedia.org/wiki/Dracaena_trifasciata",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    { id: 4, name: 'Monstera Deliciosa', price: 24.99, image:require("../assets/images/Monsteradeliciosa.webp"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Aloe_vera",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    { id: 5, name: 'Fiddle Leaf Fig', price: 29.99, image:require("../assets/images/Yonca.jpeg"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Aloe_vera",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    { id: 6, name: 'Fiddle ', price: 29.99, image:require("../assets/images/FiddleLeafFig.jpeg"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Aloe_vera",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    { id: 7, name: 'Fiddle ', price: 29.99, image:require("../assets/images/FiddleLeafFig.jpeg"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Aloe_vera",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    { id: 8, name: 'Monstera Deliciosa', price: 24.99, image:require("../assets/images/Monsteradeliciosa.webp"),imageid:"1",itemurl:"https://en.wikipedia.org/wiki/Aloe_vera",cins:"Asphodelaceae",omur:"5-10",sicaklik:"10C-20C", },
    
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/arkaplan.jpeg")} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <TouchableOpacity onPress={() => setNavbarVisibility(true)}>
          <Text style={styles.openNavbarButton}>Categories</Text>
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
                itemurl={product.itemurl}
                cins={product.cins}
                omur={product.omur}
                sicaklik={product.sicaklik}

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

export default Plant;
