import { ComponentType } from "react";
import { BellDot, Bolt, BookOpenText, BriefcaseBusiness, CircleHelp, Database, MapPin, MessageCircle, PanelsTopLeft, PanelTop, Play, TriangleAlert } from "lucide-react";

export interface SubMenuItem {
    name: string;
    desc: string;
    icon: ComponentType;
}

export interface MenuItem {
    name: string;
    subMenuHeading?: string[];
    subMenu?: SubMenuItem[];
    gridCols?: number;
}

export const Menus: MenuItem[] = [
    {
        name: "Home",
    },
    {
        name: "Features",
        subMenuHeading: ["Design", "Scale"],
        subMenu: [
            {
                name: "Design",
                desc: "Responsive design",
                icon: PanelsTopLeft,
            },
            {
                name: "Management",
                desc: "Site control",
                icon: Bolt,
            },
            {
                name: "Navigation",
                desc: "Link pages",
                icon: PanelTop,
            },
            {
                name: "CMS",
                desc: "Management content",
                icon: Database,
            },
        ],
        gridCols: 2,
    },
    {
        name: "Resources",
        subMenuHeading: ["Get started", "Programs", "Recent"],
        subMenu: [
            {
                name: "Meetups",
                desc: "Upcoming events",
                icon: MapPin,
            },
            {
                name: "Updates",
                desc: "Changelog",
                icon: BellDot,
            },
            {
                name: "Academy",
                desc: "Watch lessions",
                icon: Play,
            },
            {
                name: "Blog",
                desc: "Posts",
                icon: BookOpenText,
            },
            {
                name: "Experts",
                desc: "Jobs",
                icon: BriefcaseBusiness,
            },
        ],
        gridCols: 3,
    },
    {
        name: "Support",
        subMenu: [
            {
                name: "Help",
                desc: "Center",
                icon: CircleHelp,
            },
            {
                name: "Community",
                desc: "Project help",
                icon: MessageCircle,
            },
            {
                name: "Emergency",
                desc: "Urgent issues",
                icon: TriangleAlert,
            },
        ],
        gridCols: 1,
    },
    {
        name: "Events",
    },
    {
        name: "Jobs",
    },
];
