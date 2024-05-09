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
        bodyText: "You future AI Voice will available 24/7, will reply instintly, you show your customers that you care about them.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Own your data",
        bodyText: "For further featers like access to CRM or sensitive data, all of it will remain anonymous and will be secured on the blockchain",
        icon: AlarmClockOff,
        id: 2
    },
    {   title: "Super cheap",
        bodyText: "Comparing to actual sales & customer support, Our service is 90% cheaper than your average sales & customer support",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards