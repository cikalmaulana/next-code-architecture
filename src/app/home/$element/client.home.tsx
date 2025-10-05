"use client"

import Link from "next/link";

export default async function CE_Home() {
    return (
        <div className="">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-100">
                    The Importance of Code Architecture
                </h1>
                <p className="text-xl mb-6 text-gray-300">
                    Code architecture is not merely a structure—it is the very backbone of scalable, maintainable, and efficient software. It defines the patterns, principles, and decisions that govern how a system will evolve over time.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                    A well-crafted architecture ensures that your system is not only robust but also adaptable, fostering seamless collaboration and long-term sustainability.
                </p>
            </div>

            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-200 mb-8">Key Areas of Focus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Link href="/naming">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Naming Conventions
                        </span>
                    </Link>
                    <Link href="/structure">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            System Structure
                        </span>
                    </Link>
                    <Link href="/documentation">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Code Documentation
                        </span>
                    </Link>
                    <Link href="/other">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Other Important
                        </span>
                    </Link>
                </div>
            </div>

            <div className="text-center mt-12 text-gray-500">
                <p>© 2025 Code Architecture Insights</p>
            </div>
        </div>
    );
}
