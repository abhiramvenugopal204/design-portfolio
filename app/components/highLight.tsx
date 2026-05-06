import Image from "next/image";
import Link from "next/link";
import hi1 from "../../public/hi1.svg"
import hi2 from "../../public/hi2.svg"
import hi3 from "../../public/hi3.svg"

export default function Highlight() {
    return (
        <div className="md:p-8 p-4 w-full flex flex-col gap-4 relative">
            <div className="overflow-hidden w-full flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h1 className="text-2xl font-bold">Project Highlights</h1>
                    <Link href="/projects" className="hidden md:block">
                        <Image
                            src="/viewAll.svg"
                            alt="View All"
                            width={100}
                            height={100}
                            className="w-full h-14 cursor-pointer hover:opacity-80 transition-all"
                        />
                    </Link>
                </div>
                <Image
                    src="/fadeline.svg"
                    alt="View All"
                    width={100}
                    height={100}
                    className="w-3/4 md:w-1/4 h-1"
                />
                <div className="flex gap-2 items-center justify-between flex-col md:flex-row ">
                    {
                        [hi1, hi2, hi3].map((img, i) => (
                            <div key={i} className="relative w-full h-fit">
                                <Image
                                    src={img}
                                    alt="View All"
                                    width={100}
                                    height={100}
                                    className="w-full md:w-fit h-fit z-1 object-contain"
                                />
                            </div>
                        ))
                    }
                    <Link href="/projects" className="md:hidden">
                        <Image
                            src="/bigViewAll.svg"
                            alt="View All"
                            width={100}
                            height={100}
                            className="w-full h-14 cursor-pointer hover:opacity-80 transition-all"
                        />
                    </Link>
                </div>

                <div className="relative w-full h-fit hidden lg:block pb-20">
                    <Image
                        src="/cloud4.svg"
                        alt="View All"
                        width={100}
                        height={100}
                        className="w-fit h-fit p-12 xl:ml-6"
                    />
                    <Image
                        src="/cloud3.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="w-fit h-fit absolute -bottom-25 -left-40"
                    />
                    <Image
                        src="/mp3Player.svg"
                        alt="mp3Player"
                        width={100}
                        height={100}
                        className="z-2 w-fit h-fit absolute top-[60%] left-[40%] xl:left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <Image
                        src="/note.svg"
                        alt="note"
                        width={100}
                        height={100}
                        className="z-2 w-fit h-fit absolute top-1/2 left-4/5 -translate-x-4/5 -translate-y-1/2"
                    />
                    <Image
                        src="/cloud3.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="w-fit h-fit absolute top-0 right-0"
                    />
                    <Image
                        src="/cloud5.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="w-fit h-fit xl:block hidden absolute -bottom-18 left-1/2 -translate-x-1/2"
                    />
                </div>
            </div>
            {/* Elements that pop out */}
            <Image
                src="/stats.svg"
                alt="stats"
                width={100}
                height={100}
                className="z-3 w-fit h-fit absolute -bottom-10 -right-5 hidden lg:block"
            />
        </div>
    )
}