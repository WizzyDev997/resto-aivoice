interface IPricingCardProps {
    title: string;
    price: string;
    benefits: string[];
    oneliner: string;
    id: number;
}


const pricingCards: IPricingCardProps[] = [
    {
        price: "Q3",
        title: "AIVR Agents Development",
        benefits: [
            "Live AIVR Hotline Calls: Experience our Demo Hotline Calls showcasing real-time AI-facilitated customer service.",
            "$voice Token Launch: Participate in the public launch for early access to tokens and exclusive platform features.",
            "Strategic Partnerships: Integrate advanced communication solutions and gain early access and collaboration opportunities."
        ],
        id: 1,
        oneliner: "Kick-off ",
    },
    {
        price: "Q4",
        title: "AIVR Agents Deployment",
        benefits: [
            "Your Own AI Hotline Agent: Train and deploy a customized AI Hotline Agent to enhance customer service by seamlessly integrating with your website and data.",
            "$Voice Staking: Contribute to platform stability and growth by staking tokens. Earn rewards and access exclusive features.",
            "Agent Creation Playground: Utilize our evolving playground to create, test, and refine AI agents in a user-friendly, innovative environment."
        ],
        id: 2,
        oneliner: "The Rise",
    },
    {
        price: "Q1",
        title: "Expansion",
        benefits: [
            "Playground Launch: Access comprehensive tools for building and deploying Voice AI agents across various industries.",
            "Global Partnership Initiatives: Expand your business with strategic global partnerships, enhancing capabilities and opening new markets.",
            "Advanced Analytics Integration: Utilize advanced analytics for deeper insights into customer interactions, improving service delivery and decision-making."
        ],
        id: 3,
        oneliner: "Scaling New Heights",
    },
    {
        price: "Q2",
        title: "Global",
        benefits: [
            "Next-Gen AI Features: Discover new AI functionalities with emotional intelligence and multi-lingual support.",
            "Ecosystem Expansion: Launch complementary platforms and services to enhance Voice AI offerings across various sectors.",
            "Commitment to Sustainability: Implement programs to reduce the environmental impact of our technologies and operations, promoting sustainable business practices."
        ],
        id: 4,
        oneliner: "Worldwide Provider",
    }
];
export default pricingCards;
