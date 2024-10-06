import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { SortDescending, CaretDown } from 'phosphor-react-native';

const OptionBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    Animated.timing(rotateAnim, {
      toValue: isDropdownOpen ? 0 : 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const dropdownOptions = [
    'Football',
    'Basketball',
    'Tennis',
    'Swimming',
  ];  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sortbutton}>
        <SortDescending size={24} color="#5d5c5c" />
      </TouchableOpacity>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownButtonText}>Sports & Availability</Text>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <CaretDown size={16} color="#5d5c5c" style={styles.dropdownIcon} />
          </Animated.View>
        </TouchableOpacity>
        {/* {isDropdownOpen && (
          <View style={styles.dropdownContent}>
            {dropdownOptions.map((option, index) => (
              <TouchableOpacity key={index} style={styles.dropdownItem}>
                <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )} */}
      </View>
      <TouchableOpacity style={styles.menubutton}>
        <Text style={styles.menubuttonText}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menubutton}>
        <Text style={styles.menubuttonText}>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 16
  },
  sortbutton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  dropdownContainer: {
    marginRight: 10,
    marginLeft: 10,
    zIndex: 1,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 8,
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
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    marginTop: 2,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 99,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    fontSize: 14,
  },
  menubutton: {
    position: "relative",
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  menubuttonText: {
    fontSize: 14,
    color: "#5d5c5c",
    fontWeight: '600',
  },
});

export default OptionBar;