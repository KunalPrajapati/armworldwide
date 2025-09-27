import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function MoviesScreen() {

    const topImage = require('../assets/Icons/movies/Layer.png')
    const playIcon = require('../assets/Icons/playIcon.png')
    const searchIcon = require('../assets/Icons/searchIcon.png')

    const releaseImg1 = require('../assets/Icons/movies/newRelease/Card1.png')
    const releaseImg2 = require('../assets/Icons/movies/newRelease/Card2.png')
    const releaseImg3 = require('../assets/Icons/movies/newRelease/Card3.png')

    const trendingImg1 = require('../assets/Icons/movies/trending/card1.png')
    const trendingImg2 = require('../assets/Icons/movies/trending/card2.png')
    const trendingImg3 = require('../assets/Icons/movies/trending/card3.png')

    const docImg1 = require('../assets/Icons/movies/documentaries/card1.png')
    const docImg2 = require('../assets/Icons/movies/documentaries/card2.png')

    const recImg1 = require('../assets/Icons/movies/recommended/card1.png')
    const recImg2 = require('../assets/Icons/movies/recommended/card2.png')
    const recImg3 = require('../assets/Icons/movies/recommended/card3.png')

    const newReleases = [releaseImg1, releaseImg2, releaseImg3, releaseImg1]
    const trendingNow = [trendingImg1, trendingImg2, trendingImg3, trendingImg1]
    const documentaries = [docImg1, docImg2, docImg1, docImg2]
    const recommended = [recImg1, recImg2, recImg3, recImg2]

    const [searchText, setSearchText] = useState('')

    const renderHorizontalCard = (image, index, isDocumentary = false) => (
        <TouchableOpacity style={[styles.horizontalCard, isDocumentary && styles.documentaryCard]} key={index}>
            <Image source={image} style={styles.cardImage} resizeMode="cover" />
        </TouchableOpacity>
    )

    const renderSection = (title, data, isDocumentary = false) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
            >
                {data.map((image, index) => (
                    <View key={index} style={index !== data.length - 1 ? { marginRight: 15 } : null}>
                        {renderHorizontalCard(image, index, isDocumentary)}
                    </View>
                ))}
            </ScrollView>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
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
                            placeholder="Search your documentaries here"
                            placeholderTextColor="#888888"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                        <TouchableOpacity style={styles.searchIconContainer}>
                            <Image source={searchIcon} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <ImageBackground source={topImage} style={styles.heroImage} resizeMode="cover">
                        <View style={styles.heroOverlay}>
                            <View style={styles.heroContent}>
                                <Text style={styles.heroSubtitle}>THE CREATIVE NETWORK ORIGINALS</Text>
                                <Text style={styles.heroTitle}>IRRFAN KHAN</Text>

                                <TouchableOpacity style={styles.playButton}>
                                    <Image source={playIcon} style={{ width: 18, height: 18 }} />
                                    <Text style={styles.playButtonText}>Play Now</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text style={styles.moreDetailsText}>More Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                {/* New Releases Section */}
                {renderSection('New Releases', newReleases)}

                {/* Documentaries Section */}
                {renderSection('Documentaries', documentaries, true)}

                {/* Trending Now Section */}
                {renderSection('Trending Now', trendingNow)}

                {/* Recommended Section */}
                {renderSection('Recommended', recommended)}

                {/* Bottom padding for navigation */}
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
        paddingBottom: 100,
    },
    searchContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 45,
        borderWidth: 1,
        borderColor: '#333333',
    },
    searchInput: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 14,
    },
    searchIconContainer: {
        marginLeft: 10,
    },
    heroSection: {
        height: 500,
        marginBottom: 30,
    },
    heroImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    heroOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    heroContent: {
        padding: 20,
        alignItems: 'center',
    },
    heroSubtitle: {
        color: '#ffffff',
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 8,
        textAlign: 'center',
    },
    heroTitle: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        letterSpacing: 2,
    },
    playButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        marginBottom: 15,
    },
    playButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
    },
    moreDetailsText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    section: {
        marginBottom: 35,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    horizontalList: {
        paddingHorizontal: 20,
    },
    horizontalCard: {
        width: 120,
        height: 160,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    documentaryCard: {
        width: 170,
        height: 190,
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 8,
        display: 'none',
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
    },
    channelBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        zIndex: 1,
    },
    channelText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '600',
    },
    bottomPadding: {
        height: 20,
    },
})