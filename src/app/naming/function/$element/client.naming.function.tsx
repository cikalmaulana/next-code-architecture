"use client";

export function CE_NamingFunction() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Function Naming Convention</h1>

            <p className="mb-4">
                Using a consistent naming pattern for functions improves clarity, traceability, and helps developers quickly understand each function&apos;s role in the application flow.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Naming Format Guide</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                [TYPE] _ [VERB] [OBJECT]
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>[TYPE]:</strong> The function&apos;s architectural role:
                    <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code>APIS</code> → Handles API calls (e.g., fetch, post, delete)</li>
                        <li><code>CFN</code> → Client function, usually bridges UI and server logic</li>
                        <li><code>SFN</code> → Server function, acts between CFN and API layer</li>
                        <li><code>CE</code> → Client component (uses `use client`)</li>
                        <li><code>SE</code> → Server component (SSR, uses async logic, may render CE)</li>
                    </ul>
                </li>
                <li>
                    <strong>[VERB] [OBJECT]:</strong> Clearly describe the action and target of the function:
                    <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code>getProfile</code></li>
                        <li><code>submitForm</code></li>
                        <li><code>fetchData</code></li>
                        <li><code>updateSettings</code></li>
                        <li><code>renderCard</code></li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1">
                APIS_getUser.ts
            </pre>
            <code>APIS_getUser.ts</code> → Fetch user data from external API.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                CFN_handleLogin.ts
            </pre>
            <code>CFN_handleLogin.ts</code> → Client-side function to handle login flow.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                SFN_authenticateUser.ts
            </pre>
            <code>SFN_authenticateUser.ts</code> → Server-side function for user auth logic.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                CE_LoginForm.tsx
            </pre>
            <code>CE_LoginForm.tsx</code> → Client-rendered login form component.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                SE_ProfilePage.tsx
            </pre>
            <code>SE_ProfilePage.tsx</code> → Server-rendered profile page component.

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Use clear and descriptive verbs (e.g., get, fetch, handle, update, render).</li>
                <li>Keep function names short but meaningful.</li>
                <li>Stick to camelCase for the function name part (after the prefix).</li>
                <li>Group files by their function type (e.g., CFN/ folder, APIS/ folder).</li>
                <li>Use a consistent prefix (like APIS_, CFN_) to make navigation and refactoring easier.</li>
                <li>Always name files the same as the exported function inside.</li>
            </ul>

            <p className="mt-6">
                These conventions promote clarity and traceability in function responsibilities, especially when working in a layered architecture with client-server separation.
            </p>
        </div>
    );
}
