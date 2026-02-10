"use client";

export function CE_ArchitectureDataFetching() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Data Fetching Strategy</h1>

            <p className="mb-4">
                This project follows a strict data fetching architecture. Data access is not allowed everywhere.
                Instead, the system enforces a controlled flow to guarantee security, consistency, and predictable behavior.
            </p>

            <p className="mb-4">
                The main principle:
                <strong> data comes from the server only, never directly from the browser.</strong>
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Allowed Data Flow</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{
`Database -> API_ Function -> Server Component -> Client Component (display only)`
}
            </pre>

            <p className="mb-4">
                Every piece of data must pass through a controlled server layer before reaching the UI.
                The browser never communicates with the database directly.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Rule #1 No Client Fetching</h2>

            <p className="mb-4">
                Client Components are strictly presentation and interaction layers.
                They must never fetch data from backend endpoints.
            </p>

            <pre className="bg-gray-900 text-red-400 p-4 rounded mb-4">
{
`// ❌ Forbidden
useEffect(() => {
    fetch("/api/orders")
}, [])`
}
            </pre>

            <p className="mb-4">
                Fetching from the browser exposes endpoints, breaks caching strategy,
                creates loading flicker, and bypasses server security guarantees.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Rule #2 Server Components Fetch Only</h2>

            <p className="mb-4">
                All reads must happen inside Server Components.
                The page must already contain correct data when it reaches the user.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{
`export default async function Page() {
    const orders = await API_GetOrders()

    return <OrderList orders={orders} />
}`
}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Rule #3 Only API_ Functions May Access Database</h2>

            <p className="mb-4">
                Database queries are not allowed inside pages, components, or utilities.
                They must exist only inside functions located in the API folder and prefixed with <strong>API_</strong>.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{
`// allowed
await API_GetOrders()

// forbidden
await db.order.findMany()
await prisma.order.findMany()`
}
            </pre>

            <p className="mb-4">
                This rule centralizes data access, prevents duplicated queries,
                and ensures security logic is applied consistently.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Caching Behavior</h2>

            <p className="mb-4">
                Since all data fetching occurs on the server, caching becomes predictable.
                The server controls freshness, not the browser.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{
`Stable data -> cached
Frequently changing data -> revalidated
Critical real-time data -> no-store`
}
            </pre>

            <p className="mb-4">
                The UI never manually refetches after mount. Updates happen through server execution,
                ensuring the page always represents a trusted state.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Mutation (Create / Update / Delete)</h2>

            <p className="mb-4">
                After modifying data, the server re-renders the UI instead of the client refetching it.
                The browser does not own data synchronization, the server does.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{
`User action -> Server Action -> Database update -> Server re-render -> UI updates`
}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Mental Model</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{
`Client = interaction
Server = truth
API_ = gatekeeper`
}
            </pre>

            <p className="mt-6">
                The browser never owns the data. It only reflects server state.
                This guarantees consistency across users, prevents leaks, and removes UI-data mismatch.
            </p>
        </div>
    );
}
