"use client";

export function CE_ArchitectureCSR() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Client Side Rendering (CSR)</h1>

            <p className="mb-4">
                Client Side Rendering means the UI is generated in the browser after the page loads.
                The server sends a minimal page, the browser builds the interface using JavaScript.
            </p>

            <p className="mb-4">
                In Next.js App Router, this happens when a component contains the <strong>{"use client"}</strong> directive.
                The component no longer runs on the server and instead executes on the user{"'"}s device.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">How It Works</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                {
`User opens page -> Browser loads JavaScript -> Component executes -> Data fetched from API -> UI updates dynamically`
                }
            </pre>

            <p className="mb-4">
                The browser is responsible for building the content.
                This allows real-time updates and interactivity but may delay visible data.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Characteristics</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Runs in the browser</li>
                <li>Can use state, effects, and event handlers</li>
                <li>Has access to browser APIs (window, localStorage, DOM events)</li>
                <li>Rendered after the page loads</li>
                <li>Not SEO friendly by default</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`"use client"

import { useEffect, useState } from "react"

export default function Page() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(setProducts)
    }, [])

    return <ProductList products={products} />
}`}
</pre>

            <p className="mb-4">
                The data request happens inside the user{"'"}s browser.
                The UI updates after the request finishes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">When To Use CSR</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Forms and user inputs</li>
                <li>Modals and dropdowns</li>
                <li>Tabs and filters</li>
                <li>Search suggestions</li>
                <li>Live UI updates</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Common Misunderstandings</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>CSR is not always faster, initial load is usually slower</li>
                <li>CSR should not fetch critical first-render data</li>
                <li>CSR exposes requests to the browser network tab</li>
                <li>CSR does not replace server rendering</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Important Behavior in Next.js</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
Component stays mounted
State persists while page is open
Re-renders happen without refresh
Runs entirely in browser memory
            </pre>

            <p className="mb-4">
                Unlike server components, client components stay alive after rendering.
                They behave like a traditional React SPA.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Common Mistakes</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Fetching important initial data in CSR (causes loading flicker)</li>
                <li>Putting sensitive logic in the browser</li>
                <li>Overusing client components for static content</li>
                <li>Creating unnecessary re-renders</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Mental Model</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
Client Component = interactive layer that runs after HTML exists
            </pre>

            <p className="mt-6">
                CSR should enhance an already-rendered page with interaction.
                It should not be responsible for correctness of initial data, only behavior after display.
            </p>
        </div>
    );
}
