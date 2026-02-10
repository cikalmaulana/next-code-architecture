"use client"

export function CE_CommentsFunction() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Function Commenting Best Practices</h1>

            <p className="mb-4">
                Function comments describe how a function should be used, not how it is implemented.
                A developer should understand what the function does, what it expects,
                and what it returns without opening its body.
            </p>

            <p className="mb-4">
                Think of function comments as a contract between the function author and the caller.
                The implementation may change, but the behavior described in the comment must remain true.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">What a Function Comment Must Explain</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>The purpose of the function (what problem it solves)</li>
                <li>The meaning of parameters (not just their type)</li>
                <li>The returned result and its guarantees</li>
                <li>Side effects (database write, cache invalidation, redirect, etc.)</li>
                <li>Important constraints or assumptions</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Recommended Structure</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 whitespace-pre-wrap">
{String.raw`/**
 * Short description of the function's responsibility
 *
 * @param userId - ID of the user requesting data
 * @returns List of active orders belonging to the user
 * @throws When user is not authenticated
 */`}
            </pre>

            <p className="mb-4">
                The goal is clarity, not length. A short, precise contract is better than a long explanation.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Good vs Bad Examples</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 whitespace-pre-wrap">
{String.raw`// ❌ Bad
// gets orders
function getOrders(userId) { ... }

// ✅ Good
/**
 * Returns active orders visible to the current authenticated user.
 * Automatically filters archived orders.
 */
function getOrders(userId) { ... }`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">When Comments Are Required</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Public utilities and shared helpers</li>
                <li>Server actions and API functions</li>
                <li>Business logic functions</li>
                <li>Functions with side effects</li>
                <li>Functions whose behavior is not obvious from the name</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">When Comments Are Not Needed</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Small private helper functions</li>
                <li>Simple data mappers</li>
                <li>Functions whose name already fully explains behavior</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Describe behavior, not implementation details</li>
                <li>Do not restate the function name</li>
                <li>Keep comments stable even if internal logic changes</li>
                <li>Document side effects explicitly</li>
                <li>Avoid documenting obvious TypeScript types</li>
            </ul>

            <p className="mt-6">
                A well-commented function removes the need to read its implementation.
                If developers must open the function to understand its purpose,
                the documentation has failed.
            </p>
        </div>
    )
}
