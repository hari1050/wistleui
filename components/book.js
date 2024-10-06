import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import VenueCard from './venuecard';
import OptionBar from './optionBar';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Bell, MagnifyingGlass, X, House, Football, Book, ShoppingCart, CaretDown, BeachBall} from 'phosphor-react-native';

const TabButton = ({ title, active, onPress }) => (
  <TouchableOpacity style={[styles.tabButton, active && styles.activeTab]} onPress={onPress}>
    <Text style={[styles.tabText, active && styles.activeTabText]}>{title}</Text>
  </TouchableOpacity>
);

const Booking = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Venues'); // Default tab is "Venues"

  // Function to handle tab change
  const handleTabPress = (tab) => {
    setActiveTab(tab);  // Update active tab on press
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.header}>
            <BeachBall size={35} color="#E11D48" style={styles.whistleIcon} />
            <TouchableOpacity style={styles.addressContainer}>
                <Text style={styles.headerText}>562157, Vidya Nagar Cross   </Text>
                <CaretDown size={18}/>
            </TouchableOpacity>
            <View style={styles.profilediv}>
              <TouchableOpacity>
                <Bell size={28} color="#E11D48" style={styles.bellIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/profilepic.png")} style={styles.profilepic}/>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.searchContainer}>
            <MagnifyingGlass size={20} color="#777" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Movena"
              placeholderTextColor="#777"
            />
            <TouchableOpacity>
              <X size={20} color="#777" />
            </TouchableOpacity>
          </View>

          {/* Tab Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
            <TabButton 
              title="Venues (91)" 
              active={activeTab === 'Venues'} 
              onPress={() => handleTabPress('Venues')} 
            />
            <TabButton 
              title="Coaching (12)" 
              active={activeTab === 'Coaching'} 
              onPress={() => handleTabPress('Coaching')} 
            />
            <TabButton 
              title="Events (32)" 
              active={activeTab === 'Events'} 
              onPress={() => handleTabPress('Events')} 
            />
          </ScrollView>
        </View>

        <OptionBar />

        {/* Venue List Section */}
        <ScrollView style={styles.venueList}>
          {/* Display venue cards or any other content based on active tab */}
          {activeTab === 'Venues' && (
            <>
              <VenueCard
                name="Movena Sports Center"
                location="SVCE Campus"
                distance="2 Km"
                rating={4.6}
                reviewCount={12}
                price={800}
                discountPercentage={20}
                imageUrl={require("../assets/playground.png")}
              />
              <VenueCard
                name="Movena Sports Center"
                location="SVCE Campus"
                distance="2 Km"
                rating={4.6}
                reviewCount={12}
                price={800}
                discountPercentage={20}
                imageUrl={require("../assets/playground.png")}
              />
            </>
          )}
          {activeTab === 'Coaching' && (
            <Text>           Coaching content</Text>
          )}
          {activeTab === 'Events' && (
            <Text>            Events content</Text>
          )}
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <House size={24} color="#777" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Football size={24} color="#777" />
            <Text style={styles.navText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Book size={24} color="#FF385C" weight="fill" />
            <Text style={[styles.navText, styles.activeNavText]}>Book</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <ShoppingCart size={24} color="#777" />
            <Text style={styles.navText}>Shop</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    position: 'relative',
  },
  topSection: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: "7%"
  },
  whistleIcon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 14,
  },
  profilepic: {
    width: 36,
    height: 36,
    marginLeft: 20
  },
  profilediv:{
    flexDirection: "row",
    alignItems: "center"
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.9,
    borderColor: 'lightgrey',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  tabContainer: {
    paddingHorizontal: 16,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  activeTab: {
    backgroundColor: '#F0F0F0',
  },
  tabText: {
    color: '#5d5c5c',
    fontWeight: "bold"
  },
  activeTabText: {
    color: '#5d5c5c',
    fontWeight: "bold"
  },
  venueList: {
    flex: 1,
    zIndex: 0
  },
  card: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    color: '#FF385C',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#777',
  },
  activeNavText: {
    color: '#FF385C',
  },

  filtercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 16
  },
  menubutton: {
    position: "relative",
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 6,

  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginRight: 10,
  },
  dropdownButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: "#5d5c5c",
    marginRight: 4,
  },
  dropdownIcon: {
    marginLeft: 0,
  },
  sortbutton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  menubuttonText: {
    fontSize: 14,
    color: "#5d5c5c",
    fontWeight: '600',
  },
});

export default Booking;