/* eslint-disable react-native/no-inline-styles */
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
    const filmMakerIcon = require('../assets/Icons/Home/filmMakers.png');
    const musiciansIcon = require('../assets/Icons/Home/musicians.png');
    const layerImage = require('../assets/Icons/Home/layer.png');

    const phoneIcon = require('../assets/Icons/Home/icons/phone.png');
    const laptopIcon = require('../assets/Icons/Home/icons/laptop.png');
    const tabButtonIcon = require('../assets/Icons/Home/icons/tablet.png');
    const tvIcon = require('../assets/Icons/Home/icons/smartTv.png');

    const basicPlan = require('../assets/Icons/Home/icons/basicPlan.png');
    const standardPlan = require('../assets/Icons/Home/icons/standardPlan.png');
    const premiumPlan = require('../assets/Icons/Home/icons/premiumPlan.png');

    const categories = [
        { title: 'Filmmakers', icon: filmMakerIcon },
        { title: 'Musicians', icon: musiciansIcon }
    ];

    const plans = [
        { title: 'Basic', icon: basicPlan },
        { title: 'Standard', icon: standardPlan },
        { title: 'Premium', icon: premiumPlan },
    ]

    const [expandedFAQ, setExpandedFAQ] = useState(null);

    const faqData = [
        {
            id: 1,
            question: 'What is The Creative India?',
            answer:
                'The Creative India is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            id: 2,
            question: 'How much does The Creative India?',
            answer:
                'We offer various subscription plans to suit different needs and budgets.',
        },
        {
            id: 3,
            question: 'What content is available on The Creative India?',
            answer:
                'We have a wide variety of content including movies, TV shows, documentaries, and original productions.',
        },
        {
            id: 4,
            question: 'How can I watch The Creative India?',
            answer:
                'You can watch on smartphones, tablets, laptops, smart TVs, and other connected devices.',
        },
        {
            id: 5,
            question: 'How do I sign up for The Creative India?',
            answer:
                'You can sign up through our website or mobile app by creating an account and choosing a subscription plan.',
        },
        {
            id: 6,
            question: 'What is the The Creative India free trial?',
            answer:
                'We offer a free trial period for new subscribers to explore our content before committing to a subscription.',
        },
    ];

    const toggleFAQ = id => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    const devices = [phoneIcon, laptopIcon, tabButtonIcon, tvIcon];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.heroSection}>
                    <View style={styles.gridContainer}>
                        <ImageBackground
                            source={layerImage}
                            style={styles.gridImage}
                            resizeMode="cover"
                        >
                            <View style={styles.gridOverlay} />
                        </ImageBackground>
                    </View>

                    {/* TCN Logo */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoText}>tcn</Text>
                    </View>

                    {/* Hero Content */}
                    <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>The Creative Network</Text>
                        <Text style={styles.heroDescription}>
                            The Creative India is the best streaming experience for watching
                            your favorite movies and shows on demand, anytime, anywhere.
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
                        Whether you're looking for a comedy to make you laugh, a drama to
                        make you think, or a documentary to learn something new
                    </Text>

                    <View style={styles.categoriesContainer}>
                        {categories.map((category, index) => (
                            <TouchableOpacity key={index} style={styles.categoryCard}>
                                <Image
                                    source={category.icon}
                                    style={styles.categoryImage}
                                    resizeMode="fit"
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.devicesSection}>
                    <Text style={styles.devicesSectionTitle}>
                        We Provide you streaming experience across various devices.
                    </Text>
                    <Text style={styles.devicesSectionDescription}>
                        With The Creative India, you can enjoy your favorite movies and TV
                        shows anytime, anywhere.
                    </Text>
                </View>
                <View>
                    {devices.map(device => (
                        <Image
                            source={device}
                            style={{
                                width: '98%',
                                height: 200,
                                resizeMode: 'contain',
                                marginBottom: 10,
                                marginLeft: 4,
                            }}
                        />
                    ))}
                </View>

                <View style={styles.devicesSection}>
                    <Text style={[styles.devicesSectionTitle, { marginTop: 20 }]}>
                        Frequently Asked Questions
                    </Text>
                    <Text style={styles.devicesSectionDescription}>
                        Got questions? We've got answers! Check out our FAQ section to find
                        answers to the most common questions about The Creative India.
                    </Text>
                    <Pressable
                        style={{
                            padding: 15,
                            backgroundColor: '#FDC33B',
                            borderRadius: 8,
                            alignItems: 'center',
                            width: '40%',
                        }}
                    >
                        <Text style={{ fontWeight: '600', fontSize: 14 }}>
                            Ask a Question
                        </Text>
                    </Pressable>

                    {/* FAQ Section */}
                    <View style={styles.faqContainer}>
                        {faqData.map(faq => (
                            <View key={faq.id} style={styles.faqItem}>
                                <TouchableOpacity
                                    style={styles.faqQuestion}
                                    onPress={() => toggleFAQ(faq.id)}
                                >
                                    <Text style={styles.faqQuestionText}>{faq.question}</Text>
                                    <Text style={styles.faqIcon}>
                                        {expandedFAQ === faq.id ? '−' : '+'}
                                    </Text>
                                </TouchableOpacity>
                                {expandedFAQ === faq.id && (
                                    <View style={styles.faqAnswer}>
                                        <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                                    </View>
                                )}
                                <Image
                                    source={require('../assets/Icons/Home/Line.png')}
                                    style={styles.faqDivider}
                                />
                            </View>
                        ))}
                    </View>

                    <Text style={[styles.devicesSectionTitle, { marginTop: 50 }]}>
                        Choose the plan that's right for you
                    </Text>
                    <Text style={styles.devicesSectionDescription}>
                        Join The Creative Network and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                    </Text>

                </View>

                {/* plans container */}
                <View>
                    {plans.map(plan => (
                        <Image
                            source={plan.icon}
                            style={{
                                width: '100%',
                                resizeMode: 'contain',
                                marginBottom: 15,
                            }}
                        />
                    ))}
                </View>

                <Image
                source={require('../assets/Icons/Home/trialCard.png')}
                style={{
                    width: '100%',
                    resizeMode: 'contain',
                    marginBottom: 15,
                    marginTop: 40,
                }}
                />



                {/* Bottom Padding */}
                <View style={styles.bottomPadding} />
            </ScrollView>
        </SafeAreaView>
    );
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
        paddingBottom: 50,
    },
    heroSection: {
        position: 'relative',
        // minHeight: 600,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60,
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
    gridImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    gridOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    logoContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 40,
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
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
        marginTop: 40,
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
        backgroundColor: '#1A1A1A',
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
    faqContainer: {
        marginTop: 10,
    },
    faqItem: {
        marginBottom: 5,
    },
    faqQuestion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 5,
    },
    faqQuestionText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        flex: 1,
        marginRight: 10,
    },
    faqIcon: {
        fontSize: 24,
        color: '#FDC33B',
        fontWeight: 'bold',
    },
    faqAnswer: {
        paddingHorizontal: 5,
        paddingBottom: 20,
    },
    faqAnswerText: {
        fontSize: 16,
        color: '#CCCCCC',
        lineHeight: 22,
    },
    faqDivider: {
        height: 1,
        // backgroundColor: '#FDC33B',
        marginHorizontal: 5,
    },
});
