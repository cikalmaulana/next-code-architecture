"use client";

export function CE_ArchitectureSSR() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Server Side Rendering (SSR)</h1>

            <p className="mb-4">
                Server Side Rendering means the UI is generated on the server before it reaches the browser.
                The user does not build the page, the server does, and the browser simply displays the result.
            </p>

            <p className="mb-4">
                In Next.js App Router, this is the <strong>default behavior</strong>.
                Every component is a Server Component unless explicitly marked as a client component.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">How It Works</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                {
                    `User opens page -> Server executes component code -> Data is fetched securely -> HTML is generated -> Browser receives ready UI`
                }
            </pre>

            <p className="mb-4">
                The browser never sees how the data was fetched, it only receives the final result.
                This makes SSR secure, predictable, and fast for initial page load.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Characteristics</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Runs on the server, not in the browser</li>
                <li>Can access database and private APIs directly</li>
                <li>No access to browser APIs (window, localStorage, event listeners)</li>
                <li>Rendered before the user sees the page</li>
                <li>Automatically SEO friendly</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`export default async function Page() {
    const products = await db.product.findMany()

    return <ProductList products={products} />
}`}
</pre>

            <p className="mb-4">
                The database query never runs in the browser.
                The user only receives the rendered product list.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">When To Use SSR</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Dashboard data</li>
                <li>Reports</li>
                <li>Authenticated content</li>
                <li>Product or detail pages</li>
                <li>Any page that must be correct immediately</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Common Misunderstandings</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>SSR does not mean no JavaScript, hydration still happens</li>
                <li>SSR is not slower, it is usually faster for first load</li>
                <li>SSR components cannot handle clicks directly</li>
                <li>State inside SSR does not persist between requests</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Important Behavior in Next.js</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
Every request = component re-executes
No memory between users
No browser state
Fresh execution environment
            </pre>

            <p className="mb-4">
                This means you should think of SSR components like backend endpoints that return UI.
                They are not long-living, they run, produce HTML, then disappear.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Common Mistakes</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Trying to use useState or onClick</li>
                <li>Using localStorage or window</li>
                <li>Expecting data to stay in memory</li>
                <li>Placing interactive UI directly in server components</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Mental Model</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
Server Component = backend function that returns HTML
            </pre>

            <p className="mt-6">
                SSR should be treated as a UI-producing backend process.
                It prepares correct data first, then client components add interaction on top of it.
            </p>
        </div>
    );
}
