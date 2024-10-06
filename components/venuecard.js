import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Heart, Star, SoccerBall, Volleyball, SealPercent } from 'phosphor-react-native';

const venueCard = ({
  name,
  location,
  distance,
  rating,
  reviewCount,
  price,
  discountPercentage,
  imageUrl,
}) => {
  return (
    <View style={styles.card}>
      <View style = {styles.imgDiv}>
        <Image source={imageUrl} style={styles.image} />
        
        {discountPercentage && (
          <View style={styles.discountBanner}>
            <SealPercent color='#FFFFFF'/>
            <Text style={styles.discountText}>Upto {discountPercentage}% off</Text>
          </View>
        )}
        
        <TouchableOpacity style={styles.favoriteButton}>
          <Heart size={24} color="#FFFFFF" weight="bold" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.parentLine}>
            <View style={styles.nameAddress}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location} ~{distance}</Text>
            </View>
            
            <View style={styles.ratingContainer}>
                <Star size={16} color="#eee" weight="fill" />
                <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviewCount}>({reviewCount})</Text>
            </View>
        </View>
        
        <View style={styles.cardfooter}>
            <View style={styles.facilitiesContainer}>
            <SoccerBall size={20} color="#757575" />
            <Volleyball size={20} color="#757575" />
            <Text style={styles.facilitiesText}>+3 More</Text>
            </View>
            
            <Text style={styles.price}>Rs.{price} onwards</Text>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: responsiveWidth(91.5),
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 12,
    // Add overflow hidden to ensure nothing flows out of the card
    overflow: 'hidden',
    alignItems: 'center'
  },
  imgDiv: {
    width: '100%',
    height: 140,
  },
  image: {
    width: '100%',
    height: 136,
    borderRadius: 12
  },
  discountBanner: {
    flexDirection:"row",
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: "center",
    opacity: 0.8
  },
  discountText: {
    marginLeft: "4%",
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingTop: 12,
  },
  parentLine: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  cardfooter: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: "#757575"
  },
  location: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 8,
  },
  ratingContainer: {
    marginTop: '1%',
    marginLeft: '20%',
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#eee',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 14,
    color: '#eee',
    marginLeft: 4,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  facilitiesText: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 8,
  },
  price: {
    marginLeft: '35%',
    fontSize: 16,
  },
});

export default venueCard;