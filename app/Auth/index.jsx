import { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../Styles/Authstyles/index";

const { width, height } = Dimensions.get("window");

// Media query breakpoints
const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

const getResponsiveStyle = (mobileStyle, tabletStyle, desktopStyle) => {
  if (width < breakpoints.mobile) return mobileStyle;
  if (width < breakpoints.tablet) return tabletStyle || mobileStyle;
  return desktopStyle || tabletStyle || mobileStyle;
};

const Landingpages = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));
  const [scaleAnim] = useState(new Animated.Value(0.8));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const features = [
    {
      id: "1",
      icon: "🏪",
      title: "Restaurants & Cafés",
      description: "Connect with thousands of food lovers across Eldoret. Increase your daily orders and customer reach.",
    },
    {
      id: "2",
      icon: "🏨",
      title: "Hotels & Resorts",
      description: "Showcase your premium dining experience to guests and locals. Boost your restaurant revenue.",
    },
    {
      id: "3",
      icon: "🛒",
      title: "Supermarkets & Stores",
      description: "Expand your customer base with city-wide grocery delivery. Fast, reliable, and efficient.",
    },
    {
      id: "4",
      icon: "📈",
      title: "Revenue Growth",
      description: "Average partners see 40% revenue increase within first 3 months. Real results, real growth.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Food Lovers" },
    { number: "500+", label: "Trusted Partners" },
    { number: "98%", label: "City Coverage" },
    { number: "<30min", label: "Fastest Delivery" },
  ];

  const steps = [
    { step: "1", title: "Quick Registration", desc: "2-minute signup with basic business details" },
    { step: "2", title: "Upload Your Menu", desc: "Add products with photos and descriptions" },
    { step: "3", title: "Go Live & Receive Orders", desc: "Start accepting orders immediately" },
    { step: "4", title: "Scale & Grow", desc: "Access analytics and growth tools" },
  ];

  // Responsive layout configurations
  const layout = {
    isMobile: width < breakpoints.mobile,
    isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
    isDesktop: width >= breakpoints.tablet,
    columns: {
      features: getResponsiveStyle(2, 2, 4),
      stats: getResponsiveStyle(2, 4, 4),
      steps: getResponsiveStyle(1, 2, 4),
    }
  };

  const renderFeature = (feature, index) => (
    <Animated.View
      style={[
        styles.featureCard,
        {
          width: getResponsiveStyle(
            '48%', // mobile
            '48%', // tablet
            '23%'  // desktop
          ),
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}
      key={feature.id}
    >
      <View style={styles.featureIconContainer}>
        <Text style={styles.featureIcon}>{feature.icon}</Text>
      </View>
      <Text style={styles.featureTitle}>{feature.title}</Text>
      <Text style={styles.featureDescription}>{feature.description}</Text>
    </Animated.View>
  );

  const renderStep = (step, index) => (
    <Animated.View
      key={step.step}
      style={[
        styles.stepCard,
        {
          width: getResponsiveStyle(
            '100%', // mobile
            '48%',  // tablet
            '23%'   // desktop
          ),
          opacity: fadeAnim,
          transform: [
            {
              translateX: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [index % 2 === 0 ? -50 : 50, 0],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{step.step}</Text>
      </View>
      <Text style={styles.stepTitle}>{step.title}</Text>
      <Text style={styles.stepDesc}>{step.desc}</Text>
    </Animated.View>
  );

  const renderStat = (stat, index) => (
    <Animated.View
      key={stat.label}
      style={[
        styles.statCard,
        {
          width: getResponsiveStyle(
            '48%', // mobile
            '23%', // tablet
            '23%'  // desktop
          ),
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [30 * (index + 1), 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.statNumber}>{stat.number}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#6A0DAD" barStyle="light-content" />

      {/* Professional Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>E-food</Text>
          <Text style={styles.logoSubtitle}>Eldoret</Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Partner Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Enhanced Hero Section with Media Queries */}
        <View style={styles.heroSection}>
          {/* Content Container with responsive flex direction */}
          <View style={[
            styles.heroContentContainer,
            layout.isMobile && styles.heroContentContainerMobile,
            layout.isTablet && styles.heroContentContainerTablet,
            layout.isDesktop && styles.heroContentContainerDesktop
          ]}>
            
            {/* Text Content */}
            <Animated.View
              style={[
                styles.heroContent,
                layout.isMobile && styles.heroContentMobile,
                layout.isTablet && styles.heroContentTablet,
                layout.isDesktop && styles.heroContentDesktop,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
                },
              ]}
            >
              <View style={[
                styles.heroBadge,
                layout.isMobile && styles.heroBadgeMobile
              ]}>
                <Text style={styles.heroBadgeText}>Eldoret`s #1 Food Delivery Platform</Text>
              </View>
              
              <Text style={[
                styles.heroTitle,
                layout.isMobile && styles.heroTitleMobile,
                layout.isTablet && styles.heroTitleTablet,
                layout.isDesktop && styles.heroTitleDesktop
              ]}>
                Transform Your Business with{"\n"}
                <Text style={styles.heroTitleHighlight}>E-food Eldoret</Text>
              </Text>
              
              <Text style={[
                styles.heroSubtitle,
                layout.isMobile && styles.heroSubtitleMobile,
                layout.isTablet && styles.heroSubtitleTablet,
                layout.isDesktop && styles.heroSubtitleDesktop
              ]}>
                Join the leading food delivery network in Eldoret. Connect with 50,000+ hungry customers, 
                boost your sales by up to 40%, and grow your business with our powerful platform.
              </Text>

              {/* Primary CTA Button */}
              <TouchableOpacity style={[
                styles.primaryButton,
                layout.isMobile && styles.primaryButtonMobile,
                layout.isTablet && styles.primaryButtonTablet
              ]}>
                <Text style={styles.primaryButtonText}>Start Growing Today →</Text>
              </TouchableOpacity>

              {/* Enhanced Trust Indicators */}
              <View style={[
                styles.trustIndicators,
                layout.isMobile && styles.trustIndicatorsMobile,
                layout.isTablet && styles.trustIndicatorsTablet
              ]}>
                <View style={styles.trustItem}>
                  <View style={styles.trustIcon}>✓</View>
                  <View>
                    <Text style={styles.trustNumber}>500+</Text>
                    <Text style={styles.trustLabel}>Successful Partners</Text>
                  </View>
                </View>
                <View style={styles.trustItem}>
                  <View style={styles.trustIcon}>🚀</View>
                  <View>
                    <Text style={styles.trustNumber}>40%</Text>
                    <Text style={styles.trustLabel}>Avg. Revenue Growth</Text>
                  </View>
                </View>
                <View style={styles.trustItem}>
                  <View style={styles.trustIcon}>⭐</View>
                  <View>
                    <Text style={styles.trustNumber}>4.8/5</Text>
                    <Text style={styles.trustLabel}>Partner Rating</Text>
                  </View>
                </View>
              </View>
            </Animated.View>

            {/* Hero Image */}
            <Animated.View
              style={[
                styles.heroImageContainer,
                layout.isMobile && styles.heroImageContainerMobile,
                layout.isTablet && styles.heroImageContainerTablet,
                layout.isDesktop && styles.heroImageContainerDesktop,
                {
                  opacity: fadeAnim,
                  transform: [
                    {
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layout.isMobile ? 50 : 0, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                }}
                style={[
                  styles.heroImage,
                  layout.isMobile && styles.heroImageMobile,
                  layout.isTablet && styles.heroImageTablet,
                  layout.isDesktop && styles.heroImageDesktop
                ]}
                resizeMode="cover"
              />
              
              {/* Floating Success Cards - Only show on desktop and tablet */}
              {!layout.isMobile && (
                <>
                  <Animated.View style={[
                    styles.floatingCard, 
                    styles.floatingCard1,
                    layout.isTablet && styles.floatingCardTablet1
                  ]}>
                    <Text style={styles.floatingCardText}>+40% Revenue</Text>
                  </Animated.View>
                  <Animated.View style={[
                    styles.floatingCard, 
                    styles.floatingCard2,
                    layout.isTablet && styles.floatingCardTablet2
                  ]}>
                    <Text style={styles.floatingCardText}>50K+ Customers</Text>
                  </Animated.View>
                  <Animated.View style={[
                    styles.floatingCard, 
                    styles.floatingCard3,
                    layout.isTablet && styles.floatingCardTablet3
                  ]}>
                    <Text style={styles.floatingCardText}>24/7 Support</Text>
                  </Animated.View>
                </>
              )}
            </Animated.View>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={[
            styles.statsTitle,
            layout.isMobile && styles.statsTitleMobile,
            layout.isTablet && styles.statsTitleTablet
          ]}>Trusted by Eldoret`s Best</Text>
          <View style={[
            styles.statsGrid,
            layout.isMobile && styles.statsGridMobile
          ]}>
            {stats.map(renderStat)}
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={[
            styles.sectionTitle,
            layout.isMobile && styles.sectionTitleMobile,
            layout.isTablet && styles.sectionTitleTablet
          ]}>Built for Your Success</Text>
          <Text style={[
            styles.sectionSubtitle,
            layout.isMobile && styles.sectionSubtitleMobile
          ]}>
            Comprehensive solutions designed specifically for Eldoret`s food and retail businesses
          </Text>
          <View style={[
            styles.featuresGrid,
            layout.isMobile && styles.featuresGridMobile
          ]}>
            {features.map(renderFeature)}
          </View>
        </View>

        {/* How It Works */}
        <View style={styles.howItWorksSection}>
          <Text style={[
            styles.sectionTitle,
            layout.isMobile && styles.sectionTitleMobile,
            layout.isTablet && styles.sectionTitleTablet
          ]}>Start in 4 Simple Steps</Text>
          <Text style={[
            styles.sectionSubtitle,
            layout.isMobile && styles.sectionSubtitleMobile
          ]}>
            Get your business online and receiving orders in less than 24 hours
          </Text>
          <View style={[
            styles.stepsContainer,
            layout.isMobile && styles.stepsContainerMobile,
            layout.isTablet && styles.stepsContainerTablet
          ]}>
            {steps.map(renderStep)}
          </View>
        </View>

        {/* Final CTA Section */}
        <View style={styles.finalCTASection}>
          <Animated.View
            style={[
              styles.finalCTAContent,
              layout.isMobile && styles.finalCTAContentMobile,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    scale: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.9, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={[
              styles.finalCTATitle,
              layout.isMobile && styles.finalCTATitleMobile,
              layout.isTablet && styles.finalCTATitleTablet
            ]}>
              Ready to Dominate Eldoret`s Food Market?
            </Text>
            <Text style={[
              styles.finalCTASubtitle,
              layout.isMobile && styles.finalCTASubtitleMobile
            ]}>
              Join 500+ successful businesses already growing with E-food. 
              Limited spots available for new restaurant partners this month.
            </Text>
            <TouchableOpacity style={[
              styles.finalCTAButton,
              layout.isMobile && styles.finalCTAButtonMobile
            ]}>
              <Text style={styles.finalCTAButtonText}>Claim Your Spot Now</Text>
            </TouchableOpacity>
            <Text style={[
              styles.finalCTANote,
              layout.isMobile && styles.finalCTANoteMobile
            ]}>
              ⚡ Complete setup in 15 minutes • No hidden fees • 30-day free trial
            </Text>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landingpages;