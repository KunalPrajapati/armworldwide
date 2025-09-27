import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default function HomeScreen() {

    const filmMakerIcon = require('../assets/Icons/Home/filmMakers.png')
    const musiciansIcon = require('../assets/Icons/Home/musicians.png')
    const comedyIcon = require('../assets/Icons/Home/comedy.png')
    const dramaIcon = require('../assets/Icons/Home/drama.png')
    const horrorIcon = require('../assets/Icons/Home/horror.png')

    const phoneIcon = require('../assets/Icons/Home/icons/phone.png')
    const laptopIcon = require('../assets/Icons/Home/icons/laptop.png')
    const tabButtonIcon = require('../assets/Icons/Home/icons/tablet.png')
    const tvIcon = require('../assets/Icons/Home/icons/smartTv.png')

    // Sample background images for the grid (you can replace with actual images)
    const gridImages = [
        comedyIcon, dramaIcon, horrorIcon,
        filmMakerIcon, musiciansIcon, comedyIcon
    ]

    const categories = [
        { title: 'Filmmakers', icon: filmMakerIcon },
        { title: 'Musicians', icon: musiciansIcon }
    ]

    const devices = [
        phoneIcon, laptopIcon, tabButtonIcon, tvIcon
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Hero Section with Grid */}
                <View style={styles.heroSection}>
                    <View style={styles.gridContainer}>
                        {gridImages.map((image, index) => (
                            <View key={index} style={styles.gridItem}>
                                <ImageBackground
                                    source={image}
                                    style={styles.gridImage}
                                    resizeMode="cover"
                                >
                                    <View style={styles.gridOverlay} />
                                </ImageBackground>
                            </View>
                        ))}
                    </View>

                    {/* TCN Logo */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>tcn</Text>
                    </View>

                    {/* Hero Content */}
                    <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>The Creative Network</Text>
                        <Text style={styles.heroDescription}>
                            The Creative India is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
                        </Text>
                        <TouchableOpacity style={styles.exploreButton}>
                            <Text style={styles.exploreButtonText}>Explore Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Categories Section */}
                <View style={styles.categoriesSection}>
                    <Text style={styles.sectionTitle}>
                        Explore our wide variety of categories
                    </Text>
                    <Text style={styles.sectionDescription}>
                        Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
                    </Text>

                    <View style={styles.categoriesContainer}>
                        {categories.map((category, index) => (
                            <TouchableOpacity key={index} style={styles.categoryCard}>
                                <Image source={category.icon} style={styles.categoryImage} resizeMode="fit" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.devicesSection}>
                    <Text style={styles.devicesSectionTitle}>
                        We Provide you streaming experience across various devices.
                    </Text>
                    <Text style={styles.devicesSectionDescription}>
                        With The Creative India, you can enjoy your favorite movies and TV shows anytime, anywhere.
                    </Text>
                </View>
                <View>
                    {devices.map((device) => (
                        <Image source={device} style={{ width: '98%', height: 200, resizeMode: 'contain', marginBottom: 10, marginLeft: 4 }} />
                    ))}
                </View>

                <View style={styles.devicesSection}>
                    <Text style={[styles.devicesSectionTitle, { marginTop: 20 }]}>
                        Frequently Asked Questions
                    </Text>
                    <Text style={styles.devicesSectionDescription}>
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about The Creative India.
                    </Text>
                    <Pressable style={{ padding: 15, backgroundColor: '#FDC33B', borderRadius: 8, alignItems: 'center', width: '40%' }}>
                        <Text style={{fontWeight: '600', fontSize: 14}}>
                            Ask a Question
                        </Text>
                    </Pressable>
                </View>

                {/* Bottom Padding */}
                <View style={styles.bottomPadding} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 100, // Space for bottom navigation
    },
    heroSection: {
        position: 'relative',
        minHeight: 600,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    gridContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        opacity: 0.3,
    },
    gridItem: {
        width: '33.33%',
        height: 200,
    },
    gridImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    logoContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 40,
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
    },
    heroContent: {
        alignItems: 'center',
        zIndex: 2,
    },
    heroTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 15,
    },
    heroDescription: {
        fontSize: 16,
        color: '#CCCCCC',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    exploreButton: {
        backgroundColor: '#FDC33B',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    exploreButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    categoriesSection: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
        lineHeight: 32,
    },
    sectionDescription: {
        fontSize: 16,
        color: '#CCCCCC',
        lineHeight: 24,
        marginBottom: 30,
    },
    categoriesContainer: {
        flexDirection: 'row',
        gap: 15,
    },
    categoryCard: {
        flex: 1,
        height: 180,
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
    },
    categoryImage: {
        width: '100%',
        height: '100%',
    },
    categoryOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    devicesSection: {
        paddingHorizontal: 20,
        // paddingVertical: 20,
    },
    devicesSectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 15,
        lineHeight: 32,
    },
    devicesSectionDescription: {
        fontSize: 16,
        color: '#CCCCCC',
        lineHeight: 24,
        marginBottom: 30,
    },
    deviceCard: {
        borderRadius: 12,
        overflow: 'hidden',
        borderLeftWidth: 4,
        backgroundColor: '#1A1A1A', // fallback
    },
    deviceContent: {
        padding: 20,
        zIndex: 1,
    },

    deviceHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    deviceIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    deviceIcon: {
        width: 26,
        height: 26,
    },
    deviceTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    deviceDescription: {
        fontSize: 14,
        color: '#CCCCCC',
        lineHeight: 20,
    },
    bottomPadding: {
        height: 20,
    },
})