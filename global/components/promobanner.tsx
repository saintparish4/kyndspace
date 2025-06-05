import Link from "next/link"

export default function Promobanner() {
    return (
        <div className="fixed top-0 left-0 right-0 z-40 h-12 bg-gradient-to-r from-sky-400/60 via-pink-200/60 to-teal-300/60 backdrop-blur-md shadow-lg border-b border-white/10">
            <div className="container mx-auto px-4 h-full">
                <Link href="/" className="flex justify-center items-center h-full">
                    <h1 className="text-lg font-semibold text-center text-gray-800 underline">Kyndspace therapy is now available - <span className="text-indigo-500">Learn more</span></h1>
                </Link>
            </div>
        </div>
    )
}