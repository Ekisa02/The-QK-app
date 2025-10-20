import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

const isMobile = width < breakpoints.mobile;
const isTablet = width >= breakpoints.mobile && width < breakpoints.tablet;
const isDesktop = width >= breakpoints.tablet;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 30,
  },

  // HEADER STYLES
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: isMobile ? 16 : isTablet ? 20 : 24,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  logo: {
    fontSize: isMobile ? 24 : isTablet ? 26 : 28,
    fontWeight: 'bold',
    color: '#6A0DAD',
    letterSpacing: -0.5,
  },
  logoSubtitle: {
    fontSize: isMobile ? 12 : isTablet ? 13 : 14,
    color: '#8B46D6',
    marginLeft: 4,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  loginButton: {
    paddingHorizontal: isMobile ? 16 : isTablet ? 20 : 24,
    paddingVertical: isMobile ? 8 : isTablet ? 10 : 12,
    backgroundColor: '#F8F5FF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#6A0DAD',
    ...Platform.select({
      ios: {
        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  loginButtonText: {
    color: '#6A0DAD',
    fontWeight: '700',
    fontSize: isMobile ? 12 : isTablet ? 13 : 14,
    letterSpacing: 0.3,
  },

  // HERO SECTION - MEDIA QUERY STYLES
  heroSection: {
    paddingHorizontal: isMobile ? 16 : isTablet ? 24 : 40,
    paddingVertical: isMobile ? 40 : isTablet ? 60 : 80,
    backgroundColor: '#6A0DAD',
    minHeight: isMobile ? height * 0.8 : isTablet ? height * 0.75 : height * 0.7,
  },
  heroContentContainer: {
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: isMobile ? 30 : isTablet ? 40 : 60,
  },
  heroContentContainerMobile: {
    // Additional mobile-specific styles
  },
  heroContentContainerTablet: {
    // Additional tablet-specific styles
  },
  heroContentContainerDesktop: {
    // Additional desktop-specific styles
  },
  heroContent: {
    width: '100%',
    alignItems: isMobile ? 'center' : 'flex-start',
  },
  heroContentMobile: {
    // Mobile-specific content styles
  },
  heroContentTablet: {
    width: '50%',
  },
  heroContentDesktop: {
    width: '50%',
  },
  heroBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: isMobile ? 12 : 16,
    paddingVertical: isMobile ? 6 : 8,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignSelf: isMobile ? 'center' : 'flex-start',
  },
  heroBadgeMobile: {
    // Mobile-specific badge styles
  },
  heroBadgeText: {
    color: '#FFFFFF',
    fontSize: isMobile ? 10 : isTablet ? 11 : 12,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  heroTitle: {
    fontSize: isMobile ? 28 : isTablet ? 36 : 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: isMobile ? 34 : isTablet ? 44 : 58,
    marginBottom: 16,
    textAlign: isMobile ? 'center' : 'left',
    letterSpacing: -0.5,
  },
  heroTitleMobile: {
    // Mobile-specific title styles
  },
  heroTitleTablet: {
    // Tablet-specific title styles
  },
  heroTitleDesktop: {
    // Desktop-specific title styles
  },
  heroTitleHighlight: {
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: isMobile ? 14 : isTablet ? 16 : 18,
    color: '#F0E6FF',
    lineHeight: isMobile ? 20 : isTablet ? 24 : 26,
    marginBottom: 30,
    textAlign: isMobile ? 'center' : 'left',
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  heroSubtitleMobile: {
    // Mobile-specific subtitle styles
  },
  heroSubtitleTablet: {
    // Tablet-specific subtitle styles
  },
  heroSubtitleDesktop: {
    // Desktop-specific subtitle styles
  },
  primaryButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: isMobile ? 25 : isTablet ? 30 : 40,
    paddingVertical: isMobile ? 16 : isTablet ? 18 : 20,
    borderRadius: 25,
    width: isMobile ? '100%' : 'auto',
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  primaryButtonMobile: {
    // Mobile-specific button styles
  },
  primaryButtonTablet: {
    // Tablet-specific button styles
  },
  primaryButtonText: {
    color: '#6A0DAD',
    fontSize: isMobile ? 16 : isTablet ? 17 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  heroImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isMobile ? 20 : 0,
    position: 'relative',
  },
  heroImageContainerMobile: {
    // Mobile-specific image container
  },
  heroImageContainerTablet: {
    width: '50%',
    marginTop: 0,
  },
  heroImageContainerDesktop: {
    width: '50%',
    marginTop: 0,
  },
  heroImage: {
    width: '100%',
    height: isMobile ? 200 : isTablet ? 300 : 450,
    borderRadius: 16,
    resizeMode: 'cover',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  heroImageMobile: {
    // Mobile-specific image styles
  },
  heroImageTablet: {
    // Tablet-specific image styles
  },
  heroImageDesktop: {
    // Desktop-specific image styles
  },

  // TRUST INDICATORS
  trustIndicators: {
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: 'center',
    gap: isMobile ? 15 : isTablet ? 20 : 25,
    width: '100%',
  },
  trustIndicatorsMobile: {
    // Mobile-specific trust indicators
  },
  trustIndicatorsTablet: {
    // Tablet-specific trust indicators
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  trustIcon: {
    width: isMobile ? 28 : isTablet ? 30 : 32,
    height: isMobile ? 28 : isTablet ? 30 : 32,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: isMobile ? 12 : isTablet ? 13 : 14,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  trustNumber: {
    fontSize: isMobile ? 16 : isTablet ? 18 : 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 2,
  },
  trustLabel: {
    fontSize: isMobile ? 10 : isTablet ? 11 : 12,
    color: '#E6E6FA',
    fontWeight: '500',
    letterSpacing: 0.2,
  },

  // FLOATING CARDS
  floatingCard: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: isTablet ? 10 : 12,
    paddingVertical: isTablet ? 6 : 8,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  floatingCard1: {
    top: '15%',
    right: '25%',
    transform: [{ rotate: '-5deg' }],
  },
  floatingCardTablet1: {
    top: '10%',
    right: '15%',
  },
  floatingCard2: {
    bottom: '35%',
    left: '20%',
    transform: [{ rotate: '3deg' }],
  },
  floatingCardTablet2: {
    bottom: '25%',
    left: '10%',
  },
  floatingCard3: {
    bottom: '15%',
    right: '15%',
    transform: [{ rotate: '2deg' }],
  },
  floatingCardTablet3: {
    bottom: '10%',
    right: '10%',
  },
  floatingCardText: {
    fontSize: isTablet ? 11 : 12,
    fontWeight: '700',
    color: '#6A0DAD',
    letterSpacing: 0.2,
  },

  // STATS SECTION
  statsSection: {
    paddingHorizontal: isMobile ? 16 : isTablet ? 20 : 24,
    paddingVertical: isMobile ? 40 : isTablet ? 50 : 60,
    backgroundColor: '#FAF7FF',
  },
  statsTitle: {
    fontSize: isMobile ? 20 : isTablet ? 28 : 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: -0.3,
  },
  statsTitleMobile: {
    // Mobile-specific stats title
  },
  statsTitleTablet: {
    // Tablet-specific stats title
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: isMobile ? 15 : isTablet ? 18 : 20,
  },
  statsGridMobile: {
    // Mobile-specific stats grid
  },
  statCard: {
    alignItems: 'center',
    padding: isMobile ? 15 : isTablet ? 18 : 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: isMobile ? 10 : 0,
    ...Platform.select({
      ios: {
        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  statNumber: {
    fontSize: isMobile ? 24 : isTablet ? 30 : 36,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 6,
  },
  statLabel: {
    fontSize: isMobile ? 11 : isTablet ? 12 : 14,
    color: '#666',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.2,
  },

  // FEATURES SECTION
  section: {
    paddingHorizontal: isMobile ? 16 : isTablet ? 20 : 24,
    paddingVertical: isMobile ? 40 : isTablet ? 50 : 60,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: isMobile ? 24 : isTablet ? 30 : 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  sectionTitleMobile: {
    // Mobile-specific section title
  },
  sectionTitleTablet: {
    // Tablet-specific section title
  },
  sectionSubtitle: {
    fontSize: isMobile ? 14 : isTablet ? 16 : 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: isMobile ? 20 : isTablet ? 22 : 24,
    fontWeight: '400',
    paddingHorizontal: isMobile ? 10 : isTablet ? 15 : 20,
  },
  sectionSubtitleMobile: {
    // Mobile-specific section subtitle
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: isMobile ? 15 : isTablet ? 20 : 24,
  },
  featuresGridMobile: {
    // Mobile-specific features grid
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    padding: isMobile ? 15 : isTablet ? 20 : 25,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
    borderWidth: 2,
    borderColor: '#F0E6FF',
    marginBottom: isMobile ? 10 : 0,
  },
  featureIconContainer: {
    width: isMobile ? 50 : isTablet ? 60 : 70,
    height: isMobile ? 50 : isTablet ? 60 : 70,
    borderRadius: 25,
    backgroundColor: '#F8F5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#E6D6FF',
  },
  featureIcon: {
    fontSize: isMobile ? 20 : isTablet ? 24 : 28,
  },
  featureTitle: {
    fontSize: isMobile ? 14 : isTablet ? 16 : 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  featureDescription: {
    fontSize: isMobile ? 11 : isTablet ? 13 : 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: isMobile ? 16 : isTablet ? 18 : 20,
    fontWeight: '400',
  },

  // STEPS SECTION
  howItWorksSection: {
    paddingHorizontal: isMobile ? 16 : isTablet ? 20 : 24,
    paddingVertical: isMobile ? 40 : isTablet ? 50 : 60,
    backgroundColor: '#FAF7FF',
  },
  stepsContainer: {
    flexDirection: isMobile ? 'column' : isTablet ? 'row' : 'row',
    flexWrap: isTablet ? 'wrap' : 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: isMobile ? 15 : isTablet ? 18 : 24,
  },
  stepsContainerMobile: {
    // Mobile-specific steps container
  },
  stepsContainerTablet: {
    // Tablet-specific steps container
  },
  stepCard: {
    alignItems: 'center',
    padding: isMobile ? 20 : isTablet ? 25 : 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E6D6FF',
    marginBottom: isMobile ? 10 : 0,
    ...Platform.select({
      ios: {
        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  stepNumber: {
    width: isMobile ? 45 : isTablet ? 50 : 60,
    height: isMobile ? 45 : isTablet ? 50 : 60,
    borderRadius: 22,
    backgroundColor: '#6A0DAD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#F0E6FF',
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: isMobile ? 18 : isTablet ? 20 : 22,
    fontWeight: 'bold',
  },
  stepTitle: {
    fontSize: isMobile ? 16 : isTablet ? 17 : 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  stepDesc: {
    fontSize: isMobile ? 12 : isTablet ? 13 : 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: isMobile ? 16 : isTablet ? 18 : 20,
    fontWeight: '400',
  },

  // FINAL CTA SECTION
  finalCTASection: {
    paddingHorizontal: isMobile ? 16 : isTablet ? 20 : 24,
    paddingVertical: isMobile ? 50 : isTablet ? 60 : 80,
    backgroundColor: '#6A0DAD',
  },
  finalCTAContent: {
    alignItems: 'center',
  },
  finalCTAContentMobile: {
    // Mobile-specific CTA content
  },
  finalCTATitle: {
    fontSize: isMobile ? 24 : isTablet ? 32 : 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: isMobile ? 30 : isTablet ? 40 : 52,
    letterSpacing: -0.3,
  },
  finalCTATitleMobile: {
    // Mobile-specific CTA title
  },
  finalCTATitleTablet: {
    // Tablet-specific CTA title
  },
  finalCTASubtitle: {
    fontSize: isMobile ? 14 : isTablet ? 16 : 20,
    color: '#F0E6FF',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: isMobile ? 20 : isTablet ? 22 : 26,
    fontWeight: '400',
    paddingHorizontal: isMobile ? 10 : isTablet ? 15 : 20,
  },
  finalCTASubtitleMobile: {
    // Mobile-specific CTA subtitle
  },
  finalCTAButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: isMobile ? 30 : isTablet ? 40 : 50,
    paddingVertical: isMobile ? 16 : isTablet ? 18 : 20,
    borderRadius: 25,
    marginBottom: 16,
    width: isMobile ? '100%' : 'auto',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  finalCTAButtonMobile: {
    // Mobile-specific CTA button
  },
  finalCTAButtonText: {
    color: '#6A0DAD',
    fontSize: isMobile ? 16 : isTablet ? 17 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  finalCTANote: {
    fontSize: isMobile ? 11 : isTablet ? 12 : 14,
    color: '#E6E6FA',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  finalCTANoteMobile: {
    // Mobile-specific CTA note
  },
});