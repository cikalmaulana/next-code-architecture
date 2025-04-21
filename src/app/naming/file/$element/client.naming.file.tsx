"use client";

export function CE_NamingFile() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">File Naming Convention</h1>

            <p className="mb-4">
                A clear and consistent file naming convention ensures better readability, scalability, and maintainability across your project. This standard helps developers quickly identify what each file is for without even opening it.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Naming Format Guide</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                [SCOPE] . [PRIMARY] . [PREFIX].tsx
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>[SCOPE]:</strong> Defines the component environment:
                    <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code>client</code> → Client Component (e.g., uses hooks, client-side logic)</li>
                        <li><code>server</code> → Server Component (e.g., uses async data, SSR)</li>
                        <li><code>shared</code> → Reusable across both client/server</li>
                    </ul>
                </li>
                <li>
                    <strong>[PRIMARY]:</strong> Main context or route of the file, such as:
                    <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code>login</code></li>
                        <li><code>profile</code></li>
                        <li><code>dashboard</code></li>
                        <li><code>etc</code></li>
                    </ul>
                </li>
                <li>
                    <strong>[PREFIX] (optional):</strong> Additional identifier that clarifies the role or type:
                    <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code>main</code> → Main UI or handler of the page</li>
                        <li><code>form</code> → Form component inside a page</li>
                        <li><code>info</code> → Subsection or detail component</li>
                        <li><code>etc</code></li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1">
                client.login.tsx
            </pre>
            <code>client.login.tsx</code> → Client component for the login page.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                server.dashboard.main.tsx
            </pre>
            <code>server.dashboard.main.tsx</code> → Main logic-rendering component for dashboard using server capabilities.
            
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                client.profile.info.tsx
            </pre>
            <code>client.profile.info.tsx</code> → Client-side subcomponent showing profile information

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 space-y-1 mt-5">
                shared.utils.ts
            </pre>
            <code>shared.utils.ts</code> → Reusable utilities used by both frontend/backend

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Use lowercase and dot (`.`) separators only — avoid camelCase or underscores in filenames.</li>
                <li>Be as descriptive as necessary, but avoid excessive length.</li>
                <li>Group files in folders by primary feature (e.g., `login/`, `dashboard/`).</li>
                <li>Don&apos;t name a file the same as a folder it&apos;s in (e.g., avoid `login/login.tsx`).</li>
                <li>Prefix logic files with verbs, e.g., `use.auth.ts`, `get.profile.ts` if they’re utilities or hooks.</li>
            </ul>

            <p className="mt-6">
                Following these conventions ensures a predictable and readable file structure. It also improves onboarding experience for new developers and helps maintain clean architecture as the project grows.
            </p>
        </div>
    );
}
