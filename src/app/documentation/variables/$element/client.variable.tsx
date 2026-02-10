"use client"

export function CE_CommentsVariable() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Variable Commenting Best Practices</h1>

            <p className="mb-4">
                In well-structured code, variables rarely need comments.
                If a variable requires explanation, the naming or type design is usually the real problem.
            </p>

            <p className="mb-4">
                Comments on variables should be treated as a last resort — used only when the meaning
                cannot be expressed through naming, typing, or structure.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Preferred Solutions Before Commenting</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 whitespace-pre-wrap">
{String.raw`1. Rename the variable
2. Introduce an enum or type
3. Extract a constant
4. Encapsulate in a function
5. Only then — add a comment`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Avoid Explaining Bad Names</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 whitespace-pre-wrap">
{String.raw`// ❌ Avoid
// 0 = pending, 1 = approved, 2 = rejected
const status = 2

// ✅ Better
enum OrderStatus {
  Pending = 0,
  Approved = 1,
  Rejected = 2
}

const status = OrderStatus.Rejected`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Avoid Commenting Boolean Meaning</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 whitespace-pre-wrap">
{String.raw`// ❌ Avoid
// user can access dashboard
const isActive = true

// ✅ Better
const canAccessDashboard = true`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Avoid Explaining Magic Numbers</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 whitespace-pre-wrap">
{String.raw`// ❌ Avoid
// seconds before session expires
const timeout = 300

// ✅ Better
const SESSION_TIMEOUT_SECONDS = 300`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">When Comments Are Actually Valid</h2>

            <p className="mb-4">
                Variable comments are appropriate only when the meaning comes from outside the codebase
                and cannot be represented through types or naming.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 whitespace-pre-wrap">
{String.raw`// external legacy API uses "Y" | "N"
const isMember = response.membership_flag

// timezone offset provided by payment gateway, not user locale
const offset = paymentData.tz_offset`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Prefer better naming over commenting</li>
                <li>Use types and enums to remove ambiguity</li>
                <li>Document only external constraints</li>
                <li>Never explain obvious values</li>
                <li>If a comment explains a variable — reconsider the design</li>
            </ul>

            <p className="mt-6">
                A clean codebase minimizes comments by maximizing clarity.
                The best variable comment is the one you no longer need to write.
            </p>
        </div>
    )
}
