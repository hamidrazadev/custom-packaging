
// import Navigation from '@/components/Navigation';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CTABanner from '../components/CTABanner';
import SustainabilitySection from '../components/SustainabilitySection';
import ClientSuccessStories from '../components/ClientSuccessStories';
import FAQ from '../components/FAQ';
import OurCapabilities from '../components/OurCapabilities';
import Contact from '../components/ContactForm';
import Carousel from '../components/Carousel';
import About from '../components/About';
import CustomPackagingSection from '../components/CustomPackaging';

const featuredProducts = [
    {
        id: 1,
        name: "Premium Food Boxes",
        category: "Food Packaging",
        image: "https://images.surferseo.art/a8111e4f-d953-4a54-a8f3-7279abd6d117.png",
        rating: 4.9,
        reviews: 156,
        price: "From $2.50",
        features: ["Food Safe", "Custom Design", "Eco-Friendly"]
    },
    {
        id: 2,
        name: "Cosmetic Packaging",
        category: "Cosmetics",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-11.webp",
        rating: 4.8,
        reviews: 203,
        price: "From $3.20",
        features: ["Premium Finish", "UV Protection", "Magnetic Closure"]
    },
    {
        id: 3,
        name: "E-commerce Mailers",
        category: "Shipping",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-12.webp",
        rating: 4.9,
        reviews: 189,
        price: "From $1.80",
        features: ["Water Resistant", "Tear Proof", "Self Seal"]
    },
    {
        id: 4,
        name: "Custom Retail Boxes",
        category: "Retail",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-13.webp",
        rating: 4.7,
        reviews: 142,
        price: "From $1.50",
        features: ["Reinforced Handles", "Custom Print", "Recyclable"]
    },
    {
        id: 5,
        name: "Pharmaceutical Boxes",
        category: "Healthcare",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-7.webp",
        rating: 5.0,
        reviews: 98,
        price: "From $4.00",
        features: ["Child Resistant", "Tamper Evident", "FDA Approved"]
    }
];

const topSellingIndustries = [
    {
        id: 1,
        name: "Retail Display Boxes",
        category: "Retail",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-5.webp",
        rating: 4.9,
        reviews: 156,
        price: "From $2.50",
        features: ["Food Safe", "Custom Design", "Eco-Friendly"]
    },
    {
        id: 2,
        name: "Custom Flower Boxes",
        category: "Cosmetics",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-6.webp",
        rating: 4.8,
        reviews: 203,
        price: "From $3.20",
        features: ["Premium Finish", "UV Protection", "Magnetic Closure"]
    },
    {
        id: 3,
        name: "Collapsible Boxes",
        category: "Shipping",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-7.webp",
        rating: 4.9,
        reviews: 189,
        price: "From $1.80",
        features: ["Water Resistant", "Tear Proof", "Self Seal"]
    },
    {
        id: 4,
        name: "Dispenser Boxes",
        category: "Retail",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-8.webp",
        rating: 4.7,
        reviews: 142,
        price: "From $1.50",
        features: ["Reinforced Handles", "Custom Print", "Recyclable"]
    },
    {
        id: 5,
        name: "Exploding Boxes",
        category: "Gifts",
        image: "https://apiv1.boxprintinghub.com/wp-content/uploads/2025/08/box-9.webp",
        rating: 4.5,
        reviews: 98,
        price: "From $4.00",
        features: ["Child Resistant", "Tamper Evident", "FDA Approved"]
    }
]

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            
            <Hero />
            <About />
            <CustomPackagingSection />
            <FeaturedProducts subHeading={'Trending Packaging'} title={'Featured Product Packaging'} description={'Discover our most popular packaging solutions trusted by thousands of businesses worldwide'} productsData={featuredProducts} />
            <CTABanner
                title="Ready to Transform Your Brand?"
                subtitle="Get custom packaging solutions that make your products stand out"
                buttonText="Work With Us"
                href="#contact"
            />
            <FeaturedProducts title={'Top Selling Industries'} description={'Discover our most popular packaging solutions trusted by thousands of businesses worldwide'} productsData={topSellingIndustries} />
            <SustainabilitySection />
            <CTABanner
                title="Join the Eco-Friendly Revolution"
                subtitle="Choose sustainable packaging that protects both your products and the planet"
                buttonText="Learn More"
                href="#sustainability"
                variant="secondary"
            />
            <ClientSuccessStories />
            <CTABanner
                title="Your Success Story Starts Here"
                subtitle="Join hundreds of satisfied clients who chose our packaging solutions"
                buttonText="View All Stories"
                href="#stories"
            />
            <FAQ />
            <CTABanner
                title="Still Have Questions?"
                subtitle="Our packaging experts are ready to help you find the perfect solution"
                buttonText="Contact Expert"
                href="#contact"
                variant="secondary"
            />
            <OurCapabilities />
            <Contact />
            
        </div>
    );
};

export default Home;