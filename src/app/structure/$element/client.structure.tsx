"use client"

import Link from "next/link"

export function CE_StructureMain() {
    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Code Structure Overview</h1>

            <p className="mb-4 text-gray-300">
                A well-defined <strong>code structure</strong> provides a clear and organized foundation for your project. 
                It determines how files, folders, and components are arranged — making it easier for developers to locate 
                code, understand relationships between modules, and maintain consistency as the project grows.
            </p>

            <p className="mb-4 text-gray-300">
                Without a proper structure, even small projects can quickly become difficult to manage. 
                Developers may place files in random locations, duplicate logic across multiple pages, 
                or struggle to identify where a specific piece of functionality should live. 
                A consistent structure prevents this chaos by enforcing predictable patterns.
            </p>

            <p className="mb-8 text-gray-300">
                This documentation defines how to organize your codebase — including folder hierarchy, 
                component grouping, and file separation — to keep the system scalable, maintainable, 
                and intuitive for every developer working on it.
            </p>

            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-200 mb-8">Key Areas of Focus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Link href="/structure/folder">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Folder Structure
                        </span>
                    </Link>
                    <Link href="/structure/component">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Component Structure
                        </span>
                    </Link>
                </div>
            </div>

            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                Establishing a clear and consistent structure ensures every part of your application 
                has a defined place and purpose. It minimizes mental overhead, reduces the risk of duplication, 
                and helps developers onboard faster with minimal confusion.
            </p>
        </div>
    )
}
