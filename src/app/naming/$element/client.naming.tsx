"use client"

import Link from "next/link"

export function CE_NamingMain() {
    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Naming Convention Overview</h1>

            <p className="mb-4 text-gray-300">
                A <strong>naming convention</strong> is a set of rules and guidelines that define how code elements
                — such as files, folders, variables, functions, and interfaces — should be named. It ensures that the entire
                codebase follows a consistent and predictable structure, making it easier for developers to understand,
                navigate, and maintain over time.
            </p>

            <p className="mb-4 text-gray-300">
                Consistent naming improves <strong>readability</strong>, enhances <strong>collaboration</strong>, and
                reduces the risk of confusion or duplicated logic. Without clear naming standards, developers may use
                different naming styles, leading to an inconsistent and harder-to-read codebase.
            </p>

            <p className="mb-8 text-gray-300">
                This documentation defines how names should be structured across different aspects of your project —
                ensuring that all developers follow the same logic when creating files, components, and utilities.
            </p>

            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-200 mb-8">Key Areas of Focus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Link href="/naming/file">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            File Naming
                        </span>
                    </Link>
                    <Link href="/naming/folder">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Folder Naming
                        </span>
                    </Link>
                    <Link href="/naming/variable">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Variable Naming
                        </span>
                    </Link>
                    <Link href="/naming/function">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Function Naming
                        </span>
                    </Link>
                    <Link href="/naming/interface">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Interface Naming
                        </span>
                    </Link>
                </div>
            </div>

            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                Following a unified naming convention builds long-term consistency and makes your codebase scalable, 
                maintainable, and easy for both current and future developers to work with.
            </p>
        </div>
    )
}
