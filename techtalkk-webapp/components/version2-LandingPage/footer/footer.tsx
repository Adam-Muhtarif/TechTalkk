import Link from "next/link"
import FooterLogo from "./LogoFooter.svg"
import Facebook from "./Facebook.svg"
import InstagramFooter from "./InstagramFooter.svg"
import LinkedinFooter from "./LinkedinFooter.svg"
import TwitterFooter from "./TwitterFooter.svg"
import Image from "next/image"


export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto  flex flex-col w-full py-[72px] relative">
            <Image src="/images/footerV2/TechTalk-footer.png" alt="Footer-text" width={1430} height={401.403564453125} className="w-full absolute top-0 left-0 bottom-0 -z-10 hidden sm:block" />
            <footer className="border-t py-12 px-4 md:px-6 lg:px-8 w-full shadow-navigation rounded-2xl bg-white mt-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        {/* Logo and social section */}
                        <div className="space-y-8 md:col-span-2">

                            {/* LOGO */}
                            <div className="flex flex-col justify-start gap-2">
                                <FooterLogo />
                                <p className="text-gray-600">The largest Somali tech community</p>
                            </div>

                            {/* Social icons */}
                            <div className="flex gap-3">
                                <div

                                    className="border-1 border-[var(--primary-color)] transition-colors p-2 bg-gray-100 rounded-full"
                                >
                                    <Facebook />
                                    <span className="sr-only">Facebook</span>
                                </div>
                                <Link
                                    href="#"
                                    className="border-1 border-[var(--primary-color)] transition-colors p-2 bg-gray-100 rounded-full"
                                >
                                    <TwitterFooter />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="border-1 border-[var(--primary-color)] transition-colors p-2 bg-gray-100 rounded-full"
                                >
                                    <InstagramFooter />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="border-1 border-[var(--primary-color)] transition-colors p-2 bg-gray-100 rounded-full"
                                >
                                    <LinkedinFooter />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>


                        </div>

                        {/* Community links */}
                        <div className="space-y-4">
                            <h3 className="text-gray-500 font-medium">Community</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Discord
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    WhatsApp
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Reddit
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Get Support
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Help Center
                                </Link>
                            </div>
                        </div>

                        {/* Learn links */}
                        <div className="space-y-4">
                            <h3 className="text-gray-500 font-medium">Learn</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    RoadMaps
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Blog
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Full-Stack Track
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Challenges
                                </Link>
                            </div>
                        </div>

                        {/* Product links */}
                        <div className="space-y-4">
                            <h3 className="text-gray-500 font-medium">Product</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Editor
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Runtimes
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Renderer
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Changelog
                                </Link>
                                <Link href="#" className="hover:text-[var(--primary-color)] transition-colors">
                                    Resume Build
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4 text-sm text-gray-500">
                            <Link href="#" className="hover:text-[var(--primary-color)] transition-colors font-bold">
                                Privacy Policy
                            </Link>
                            <span>•</span>
                            <Link href="#" className="hover:text-[var(--primary-color)] transition-colors font-bold">
                                Terms of Use
                            </Link>
                        </div>
                        <div className="text-sm text-gray-500">© 2024 - {new Date().getFullYear()} TechTalk</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
