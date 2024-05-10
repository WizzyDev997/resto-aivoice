interface IPricingCardProps {
    title: string;
    price: string;
    benefits: string[];
    oneliner: string;
    id: number;
}


const pricingCards: IPricingCardProps[] = [
    {
        price: "Q2",
        title: "Voice AI Development",
        benefits: [
            "Live demo hotline calls: Experience our Live Demo Hotline Calls to see our Voice AI technology facilitate real-time customer service interactions. Discover the efficiency and clarity it brings to communication.",
            "Participate in the public launch of the $voice Token, a strategic step towards enhancing our platform’s capabilities. Secure early access to tokens and benefit from enhanced platform functionalities and exclusive features.",
            "Join our inaugural strategic partnerships to integrate advanced communication solutions into your operations. Position your company at the forefront of technological innovation by joining our waitlist for early access and collaboration opportunities.",
        ],
        id: 1,
        oneliner: "Kick-off ",
    },
    {
        price: "Q3",
        title: "Deployment",
        benefits: [
            "Your Own AI Hotline Agent: Deploy your own AI Hotline Agent, tailored to integrate seamlessly with your website and company data. Enhance your customer service with an agent capable of understanding and responding to client needs efficiently.",
            "$Voice Staking: Participate in $Voice Staking to contribute to and benefit from the stability and growth of our platform. Stake your tokens to support network integrity while earning rewards and gaining access to exclusive features.",
            "Ongoing Agent Creation Playground Development: Explore our Agent Creation Playground, continuously evolving to empower you with more tools and flexibility. Create, test, and refine your agents in a user-friendly environment designed to foster innovation and practical application.",
        ],
        id: 2,
        oneliner: "The Rise",
    },
    {
        price: "Q4",
        title: "Global Expansion",
        benefits: [
            "Playground Launch: Official release of our Agent Creation Playground, providing comprehensive tools and resources for building and deploying Voice AI agents across various industries.",
            "Global Partnership Initiatives: Expand your reach with our strategic partnerships globally, enhancing business capabilities and opening new markets.",
            "Advanced Analytics Integration: Leverage advanced analytics to gain deeper insights into customer interactions and behaviors, improving service delivery and operational decision-making."
        ],
        id: 3,
        oneliner: "Scaling New Heights",
    },
    {
        price: "Q1",
        title: "Global",
        benefits: [
            "Next-Gen AI Features: Unveil new AI functionalities that push the boundaries of voice interaction technologies, including emotional intelligence capabilities and multi-lingual support.",
            "Ecosystem Expansion: Launch additional platforms and services that complement and enhance the core Voice AI offerings, supporting a broader range of applications in different sectors.",
            "Commitment to Sustainability: Initiate programs aimed at reducing the environmental impact of our technologies and operations, reinforcing our commitment to sustainable business practices."
        ],
        id: 4,
        oneliner: "Worldwide Provider",
    }
];
export default pricingCards;
