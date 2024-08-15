import { AlarmClockOff, ArrowDownNarrowWide, ArrowUpNarrowWide, LucideIcon } from "lucide-react";

interface IInfoCard {
    title:string;
    icon: LucideIcon;
    bodyText:string;
    id:number;
}

const infoCards: IInfoCard[] = [
    {
        title: "Keep Cooking",
        bodyText: "Eliminate constant phone calls and focus on cooking. Our service simplifies reservations, giving you more time to perfect your already delicious dishes.",
        icon: ArrowUpNarrowWide,
        id: 1
    },
    {
        title: "Physical presence",
        bodyText: "Guests can enjoy a more personal experience with your staff, connecting face-to-face and witnessing the genuine smiles that make each visit special.",
        icon: AlarmClockOff,
        id: 2
    },
    {   title: "37%",
        bodyText: "of restaurant bookings still occur over the phone, something chatbots can't fully handle.",
        icon: ArrowDownNarrowWide,
        id: 3
    },
]

export default infoCards