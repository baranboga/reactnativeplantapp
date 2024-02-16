import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";


const PlantDetailCard = () => {
  const route = useRoute();
  const param = route.params;
  const uri = "https://en.wikipedia.org/wiki/Aloe_vera";
  const navigation = useNavigation();
  console.log(param.url);

  useEffect(() => {
     console.log(param.life)
  }, [])
  

  return (
    <ScrollView>
      <Card containerStyle={styles.cardContainer}>
        <Image
          source={require("../assets/images/1.webp")}
          style={styles.cardImage}
          resizeMode="repeat"
        />
        <Card.Title style={styles.cardTitle}></Card.Title>
        <Text style={styles.cardSubtitle}>{param.name}</Text>

        <View style={styles.contentContainer}>
          <View style={styles.detailContainer}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Species:</Text>
              <Text style={styles.detailValue}>{param.tur}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Watering Frequency:</Text>
              <Text style={styles.detailValue}>once a week</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Lifespan</Text>
              <Text style={styles.detailValue}>{param.life}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Room Temperature</Text>
              <Text style={styles.detailValue}>{param.warm}</Text>
            </View>
            <View style={styles.detailItem2}>
              <TouchableOpacity onPress={()=>navigation.navigate("Viki",{url:param.url})}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>About</Text>
              </TouchableOpacity>
              <ScrollView
                style={styles.cardTextContainer}
                nestedScrollEnabled={true}
              >
                <Text style={styles.detailValue}>
                  Aloe vera is a succulent plant species of the genus Aloe. It
                  is widely distributed and is considered an invasive species in
                  many world An evergreen perennial, it originates from
                  the Arabian Peninsula, but grows wild in tropical,
                  semi-tropical, and arid climates around the world. Aloe vera
                  is a succulent plant species of the genus Aloe. It is widely
                  distributed and is considered an invasive species in many
                  world regions. An evergreen perennial, it originates from the
                  Arabian Peninsula, but grows wild in tropical, semi-tropical,
                  and arid climates around the world.
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>

        <Button
          buttonStyle={styles.buttonStyle}
          title="Buy it!"
          onPress={() => console.log("Satın Alındı")}
        />
      </Card>

      <Card containerStyle={styles.cardContainer2}>
        <Image
          source={require("../assets/images/Aleo3.jpeg")}
          style={styles.cardImage2}
          resizeMode="cover"
        />
      </Card>
      <Card containerStyle={styles.cardContainer2}>
        <Image
            source={{ uri: 'https://wiki.nus.edu.sg/download/attachments/231508110/Planta-Aloe-Vera.jpg?version=1&modificationDate=1546333560483&api=v2' }}
          style={styles.cardImage2}
          resizeMode="cover"
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  },
  cardContainer2: {
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    width:"auto",
    height:400
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardImage2: {
    height: 400,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  contentContainer: {
    marginVertical: 10,
  },
  cardTextContainer: {
    maxHeight: 100,
  },
  cardText: {
    fontSize: 14,
    color: "black",
    textAlign: "justify",
  },
  detailContainer: {
    marginTop: 10,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  detailItem2: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 14,
    color: "black",
  },
  buttonStyle: {
    backgroundColor: "#4caf50",
    marginTop: 10,
  },
});

export default PlantDetailCard;
