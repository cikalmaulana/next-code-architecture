"use client";

export function CE_ArchitectureRendering() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Rendering Strategy (SSR vs CSR)</h1>

            <p className="mb-4">
                Modern web applications no longer run entirely in the browser. In frameworks like Next.js,
                parts of your UI can be rendered on the <strong>server</strong> or on the <strong>client</strong>.
                This decision determines performance, loading behavior, SEO, and even whether your state works correctly.
            </p>

            <p className="mb-4">
                Understanding rendering is critical because most bugs in App Router projects are not caused by logic errors,
                but by putting logic in the wrong runtime environment.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">The Core Idea</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                Server Rendering = HTML is built on the server, then sent to the browser
                Client Rendering = Browser builds the UI using JavaScript
            </pre>

            <p className="mb-4">
                The same component can behave completely differently depending on where it runs.
                The UI might look identical, but performance, loading speed, and data freshness will not be.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Server Side Rendering (SSR)</h2>

            <p className="mb-4">
                In SSR, the server prepares the fully built HTML before the page reaches the user.
                The browser receives ready-to-display content immediately.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2">
Request → Server builds UI → HTML sent → Page instantly visible
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Very fast first load</li>
                <li>SEO friendly (search engines see real content)</li>
                <li>No loading flicker</li>
                <li>Secure (tokens & secrets stay on server)</li>
                <li>But: requires a round-trip to server for updates</li>
            </ul>

            <p className="mb-4">
                SSR is best for data that must be correct when the page appears:
                dashboards, reports, product pages, or authenticated content.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Client Side Rendering (CSR)</h2>

            <p className="mb-4">
                In CSR, the browser receives a minimal page and JavaScript builds the UI after loading.
                The page appears first, the data appears later.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2">
Request → Empty HTML → JS loads → Fetch data → UI appears
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Highly interactive</li>
                <li>No full page refresh needed</li>
                <li>Good for frequent state updates</li>
                <li>Works well with user actions</li>
                <li>But: slower first load & not SEO friendly</li>
            </ul>

            <p className="mb-4">
                CSR is best for UI interactions:
                forms, modals, tabs, filters, drag-and-drop, and live updates.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Mental Model (Important)</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
SSR = show data first, then interact
CSR = interact first, then fetch data
            </pre>

            <p className="mb-4">
                If users must immediately see correct information → use server rendering.
                If users will manipulate the interface repeatedly → use client rendering.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Common Mistakes</h2>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Fetching important data inside a client component (causes flicker)</li>
                <li>Using server components for interactive UI (buttons stop working)</li>
                <li>Putting authentication logic in CSR (security risk)</li>
                <li>Overusing CSR causing slow initial load</li>
                <li>Overusing SSR causing excessive refetching</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Quick Decision Guide</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
Need SEO / initial correctness → SSR
Needs clicks / typing / state → CSR
Needs both → Server Component + Client Component inside
            </pre>

            <p className="mt-6">
                A good Next.js application is not SSR or CSR, it is a combination of both.
                The goal is not choosing one, but placing each responsibility in the correct runtime.
            </p>
        </div>
    );
}
