"use client"

export function CE_CommentsMain() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Commenting Best Practices</h1>

            <p className="mb-4">
                Comments play a crucial role in explaining the intent and reasoning behind code.
                They should provide context, clarify complex logic, or describe important decisions —
                but never repeat what the code already makes obvious.
                Good comments make the codebase more maintainable and easier to understand for future developers.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">When to Use Comments</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Use comments to explain <strong>why</strong> something is done — not <strong>what</strong> is done.</li>
                <li>Provide context for non-obvious logic or workarounds (e.g., API quirks or legacy behavior).</li>
                <li>
                    Mark sections that may need refactoring or performance improvements using
                    <code>&#47;&#47; TODO:</code> or <code>&#47;&#47; FIXME:</code>.
                </li>
                <li>Document public functions, utilities, and modules with short summaries of their purpose and usage.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                When <span className="text-red-400">Not</span> to Use Comments
            </h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Don&apos;t comment code that&apos;s self-explanatory — clean, well-named functions and variables reduce the need for comments.</li>
                <li>Never leave outdated comments that contradict the current code behavior.</li>
                <li>Avoid using comments as reminders for unfinished logic — use proper task tracking instead.</li>
                <li>
                    Do not add “filler” comments like <code>&#47;&#47; increment x</code> or
                    <code>&#47;&#47; loop starts</code> — they add noise without value.
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Handling Comments in Different Environments</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>Development:</strong> Temporary comments, <code>console.log</code> calls, and debug notes are acceptable for testing,
                    but should be clearly marked and removed before merging to production.
                </li>
                <li>
                    <strong>Production:</strong> Remove all unnecessary logs and temporary comments.
                    Keeping production code clean ensures better performance and security,
                    while preventing sensitive information from being exposed.
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 whitespace-pre-wrap">
                <code>
{String.raw`// ✅ Good Comment
// This function caches user sessions to prevent redundant database calls.
function cacheUserSession(userId) { ... }

// ❌ Bad Comment
// This function caches user
function cacheUserSession(userId) { ... }

// ✅ Temporary debug comment (remove before production)
// TODO: Replace mock API response with live endpoint`}
                </code>
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Keep comments short, meaningful, and relevant.</li>
                <li>Update comments whenever related code changes.</li>
                <li>Remove unnecessary <code>console.log</code> and debug statements before deploying.</li>
                <li>Prefer clarity in code over excessive commenting — readable code is the best documentation.</li>
                <li>Use structured tags like <code>TODO</code>, <code>FIXME</code>, or <code>NOTE</code> for maintainability.</li>
            </ul>

            <p className="mt-6">
                Clean and intentional comments enhance collaboration and prevent confusion.
                Remember: comments should add value, not clutter.
                A well-documented codebase reflects professionalism and care in software craftsmanship.
            </p>
        </div>
    )
}
