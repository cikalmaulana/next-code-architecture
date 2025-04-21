"use client";

export function CE_Interface() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Interface Naming Convention</h1>

            <p className="mb-4">
                To ensure strong typing, clarity, and consistency across API communication and internal data structures, all interfaces in the project follow a strict naming and usage convention.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Naming Format Guide</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`IRs_[Name]     → Interface for API responses
IRq_[Name]     → Interface for API requests
I_[Name]       → General-purpose interfaces (e.g., component props)`}
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>IRs_</strong>: Short for <em>Interface Response</em>. Used to define the expected shape of data returned from an API.</li>
                <li><strong>IRq_</strong>: Short for <em>Interface Request</em>. Used to define the shape of data sent to an API.</li>
                <li><strong>I_</strong>: General interface for props, states, utility types, etc.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2">
{`type response: IRs_User = await APIS_GetUser();
type request: IRq_Login = { phone: string; password: string };
interface I_Props {
    userId: string;
    onSelect: () => void;
}`}
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><code>IRs_User</code> → Defines the structure of the user data returned from the API.</li>
                <li><code>IRq_Login</code> → Defines the data needed when sending a login request.</li>
                <li><code>I_Props</code> → Props interface passed into a React component.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Always use interface for API data:</strong> Avoid untyped API calls like <code>const res = await fetch()</code>. Always type the response and request using the corresponding interface.</li>
                <li><strong>Use <code>import type</code> when importing interfaces:</strong> This avoids runtime impact and improves performance and tree-shaking.</li>
                <li><strong>Use PascalCase:</strong> All interface names must use PascalCase and be prefixed properly (e.g., <code>IRs_</code>, <code>IRq_</code>, <code>I_</code>).</li>
                <li><strong>Be descriptive:</strong> Interface names should reflect the data structure clearly (e.g., <code>IRs_UserList</code>, not <code>IRs_Data</code>).</li>
                <li><strong>Keep them in the right place:</strong> Group related interfaces near the feature or in a shared <code>interfaces/</code> folder if reused across modules.</li>
                <li><strong>Never duplicate interfaces:</strong> Reuse existing interfaces instead of rewriting similar ones.</li>
            </ul>

            <p className="mt-6">
                Consistently using clearly named and well-structured interfaces improves maintainability, provides better IDE support, and makes the codebase more predictable for the whole team.
            </p>
        </div>
    );
}
