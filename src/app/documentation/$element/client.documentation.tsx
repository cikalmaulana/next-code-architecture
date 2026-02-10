"use client"

import Link from "next/link"

export function CE_DocumentationMain() {
    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Code Documentation Overview</h1>

            <p className="mb-4 text-gray-300">
                <strong>Code documentation</strong> provides clear explanations of how and why specific parts of the code work.
                It ensures that every developer, whether new or experienced, can easily understand the project&apos;s logic,
                purpose, and structure without guessing or reverse-engineering the implementation.
            </p>

            <p className="mb-4 text-gray-300">
                Good documentation improves <strong>maintainability</strong>, encourages <strong>collaboration</strong>, 
                and makes your project easier to scale over time. It also reduces onboarding time for new team members and 
                prevents misunderstandings when modifying existing code.
            </p>

            <p className="mb-8 text-gray-300">
                This section outlines how different types of documentation should be written to ensure consistency and 
                clarity across your codebase, whether you&apos;re writing inline comments, documenting functions, or 
                describing larger modules.
            </p>

            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-200 mb-8">Key Areas of Focus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Link href="/documentation/functions">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Functions
                        </span>
                    </Link>
                    <Link href="/documentation/variables">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Variables
                        </span>
                    </Link>
                    <Link href="/documentation/comments">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Comments
                        </span>
                    </Link>
                </div>
            </div>

            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                Consistent and well-written documentation ensures your project remains transparent, maintainable, 
                and future-proof, empowering developers to focus on building, not deciphering.
            </p>
        </div>
    )
}
