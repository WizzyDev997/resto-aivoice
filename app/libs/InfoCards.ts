import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Increase your presence",
        bodyText: "You future AIVR Agent will be available 24/7, reply instintly with a human-like voice, show your customers that you care about them at anytime in the day.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Own your data",
        bodyText: "For further featers like access to CRM for user's authentification or sensitive data, all of it will remain anonymous and will be secured on the blockchain",
        icon: AlarmClockOff,
        id: 2
    },
    {   title: "Low Cost",
        bodyText: "Comparing to actual sales & customer support, Our solution is 90% cheaper than the traditional one & no subscription or contract needed",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards