"use client"

import Link from "next/link"

export function CE_ArchitectureMain() {
    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Architecture Overview</h1>

            <p className="mb-4 text-gray-300">
                The <strong>application architecture</strong> explains how the system runs, not just how code is written.
                It defines where logic executes (server or browser), how data flows through the application,
                and how the UI is delivered to the user.
            </p>

            <p className="mb-4 text-gray-300">
                Understanding architecture is essential in modern frameworks like Next.js because components
                no longer behave the same way. Some code runs on the <strong>server</strong>, some runs on the <strong>client</strong>,
                and choosing the wrong place can cause performance issues, broken state, or unexpected UI behavior.
            </p>

            <p className="mb-8 text-gray-300">
                This section documents the runtime behavior of the project helping developers understand
                why certain components are client components, why some data is fetched on the server,
                and how rendering decisions affect performance and user experience.
            </p>

            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-200 mb-8">Key Areas of Focus</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Link href="/architecture/rendering">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Rendering (SSR vs CSR)
                        </span>
                    </Link>
                    <Link href="/architecture/server-component">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Server Components
                        </span>
                    </Link>
                    <Link href="/architecture/client-component">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Client Components
                        </span>
                    </Link>
                    <Link href="/architecture/data-fetching">
                        <span className="text-lg text-green-200 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                            Data Fetching Strategy
                        </span>
                    </Link>
                </div>
            </div>

            <p className="text-gray-400 text-center max-w-2xl mx-auto">
                A clear architectural understanding prevents misuse of client components, reduces unnecessary API calls,
                improves performance, and ensures the application behaves predictably as it scales.
            </p>
        </div>
    )
}