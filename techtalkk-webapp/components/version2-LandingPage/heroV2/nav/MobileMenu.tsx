import { ComponentType, useState } from "react";
import * as motion from "motion/react-client"
import { Menu, X, ChevronDown, LucideProps } from "lucide-react";

export interface SubMenuItem {
    name: string;
    desc: string;
    icon: ComponentType<LucideProps>;
}

export interface MenuItem {
    name: string;
    subMenuHeading?: string[];
    subMenu?: SubMenuItem[];
    gridCols?: number;
}

export default function MobMenu({ Menus }: { Menus: MenuItem[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState<number | null>(null);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
        setClicked(null);
    };

    const subMenuDrawer = {
        enter: {
            height: "auto",
            overflow: "hidden",
        },
        exit: {
            height: 0,
            overflow: "hidden",
        },
    };

    return (
        <div>
            <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
                {isOpen ? <X /> : <Menu />}
            </button>

            <motion.div
                className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#fff] backdrop-blur text-[#4D4D4D] p-6 pb-20"
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
            >
                <ul>
                    {Menus.map(({ name, subMenu }, i: number) => {
                        const isClicked = clicked === i;
                        const hasSubMenu = subMenu?.length;
                        return (
                            <li key={name} className="">
                                <span
                                    className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                                    onClick={() => setClicked(isClicked ? null : i)}
                                >
                                    {name}
                                    {hasSubMenu && (
                                        <ChevronDown
                                            className={`ml-auto ${isClicked && "rotate-180"} `}
                                        />
                                    )}
                                </span>
                                {hasSubMenu && (
                                    <motion.ul
                                        initial="exit"
                                        animate={isClicked ? "enter" : "exit"}
                                        variants={subMenuDrawer}
                                        className="ml-5"
                                    >
                                        {subMenu.map(({ name, icon: Icon }) => (
                                            <li
                                                key={name}
                                                className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                                            >
                                                <Icon size={17} />
                                                {name}
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
        </div>
    );
}
