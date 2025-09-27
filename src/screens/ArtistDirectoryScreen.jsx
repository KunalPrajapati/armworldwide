/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'


export default function ArtistDirectoryScreen() {
    const backgroundImage = require('../assets/Icons/artistDirectory/backgroundImage.png');
    const arrowDown = require('../assets/Icons//arrowDown.png');
    const searchIcon = require('../assets/Icons/searchIcon.png');

    const [searchText, setSearchText] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedOrganisation, setSelectedOrganisation] = useState('');

    const dropdownOptions = {
        countries: ['United States', 'United Kingdom', 'Canada', 'Australia', 'India', 'Germany'],
        states: ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
        cities: ['Los Angeles', 'New York', 'Chicago', 'Houston', 'Phoenix'],
        industries: ['Film & TV', 'Music', 'Theater', 'Digital Media', 'Animation'],
        categories: ['Actor', 'Director', 'Producer', 'Musician', 'Writer', 'Artist'],
        organisations: ['SAG-AFTRA', 'DGA', 'WGA', 'AFM', 'Independent']
    };

    const DropdownField = ({ placeholder, value, onSelect, options }) => (
        <View style={styles.dropdownContainer}>
            <Pressable style={styles.dropdown}>
                <Text style={[styles.dropdownText, !value && styles.placeholderText]}>
                    {value || placeholder}
                </Text>
                <Image source={arrowDown} style={{ width: 15, height: 9 }} />
            </Pressable>
        </View>
    );

    const handleSearch = () => {
        //
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                {/* Dark overlay */}
                <View style={styles.overlay}>
                    <ScrollView
                        style={styles.scrollContainer}
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Search Bar */}
                        <View style={styles.searchContainer}>
                            <View style={styles.searchInputContainer}>
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Search your artist here"
                                    placeholderTextColor="#AAAAAA"
                                    value={searchText}
                                    onChangeText={setSearchText}
                                />
                                <TouchableOpacity style={styles.searchIconContainer}>
                                    <Image source={searchIcon} style={{ width: 20, height: 20 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Filter Dropdowns */}
                        <View style={styles.filtersContainer}>
                            <DropdownField
                                placeholder="Select Country"
                                value={selectedCountry}
                                onSelect={setSelectedCountry}
                                options={dropdownOptions.countries}
                            />

                            <DropdownField
                                placeholder="Select State"
                                value={selectedState}
                                onSelect={setSelectedState}
                                options={dropdownOptions.states}
                            />

                            <DropdownField
                                placeholder="Select City"
                                value={selectedCity}
                                onSelect={setSelectedCity}
                                options={dropdownOptions.cities}
                            />

                            <DropdownField
                                placeholder="Select Industry"
                                value={selectedIndustry}
                                onSelect={setSelectedIndustry}
                                options={dropdownOptions.industries}
                            />

                            <DropdownField
                                placeholder="Select Category"
                                value={selectedCategory}
                                onSelect={setSelectedCategory}
                                options={dropdownOptions.categories}
                            />

                            <DropdownField
                                placeholder="Select Organisation"
                                value={selectedOrganisation}
                                onSelect={setSelectedOrganisation}
                                options={dropdownOptions.organisations}
                            />
                        </View>

                        {/* Search Button */}
                        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                            <Text style={styles.searchButtonText}>Search</Text>
                        </TouchableOpacity>

                        {/* Bottom Text */}
                        <View style={styles.bottomTextContainer}>
                            <View>
                                <Text style={styles.mainTitle}>the</Text>
                                <Text style={styles.mainTitle}>creative</Text>
                                <Text style={styles.mainTitle}>network</Text>
                            </View>

                            <View style={styles.creditContainer}>
                                <Text style={styles.creditLabel}>Artwork By</Text>
                                <Text style={styles.creditHandle}>@dopaminefactory</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100, // Space for bottom navigation
    },
    searchContainer: {
        marginBottom: 30,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#141414',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 1,
        borderColor: '#262626',
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '300',
    },
    searchIconContainer: {
        marginLeft: 10,
    },
    filtersContainer: {
        gap: 15,
        marginBottom: 30,
        display: 'flex',
        flexWrap: 'wrap-reverse'
    },
    dropdownContainer: {
        width: '70%',
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 50,
        borderWidth: 1,
        borderColor: '#262626',
    },
    dropdownText: {
        color: '#FFFFFF',
        fontSize: 16,
        flex: 1,
    },
    placeholderText: {
        color: '#AAAAAA',
    },
    searchButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        width: '70%',
        alignSelf: 'flex-end',
        marginBottom: 40,
    },
    searchButtonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600',
    },
    bottomTextContainer: {
        alignItems: 'flex-start',
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    mainTitle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 42,
        fontWeight: 'bold',
        lineHeight: 50,
        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    },
    creditContainer: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    creditLabel: {
        color: '#FFFFFF',
        fontSize: 12,
        opacity: 0.8,
    },
    creditHandle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
    },
})