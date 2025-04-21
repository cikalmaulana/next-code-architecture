"use client";

export function CE_NamingFolder() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Folder Naming Convention</h1>

            <p className="mb-4">
                A consistent folder naming strategy makes it easier to navigate, maintain, and scale the project.
                Naming folders clearly ensures team members can quickly identify purpose and relationships between modules.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Naming Format Guide</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                [prefix][folderName]
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>[prefix] (optional):</strong> Special symbols to define behavior or purpose:
                    <ul className="list-disc list-inside ml-6 mt-1">
                        <li><code>@</code> → Scoped feature folder (e.g., logical domain or feature context)</li>
                        <li><code>$</code> → Non-routable folder, commonly used for internal elements or utilities</li>
                        <li><code>[]</code> → Dynamic route parameter (e.g., <code>[id]</code>)</li>
                    </ul>
                </li>
                <li>
                    <strong>[folderName]:</strong> A lowercase, single-syllable word representing the feature or context
                </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 space-y-1">
                @[login]
            </pre>
            <code>@[login]</code> → A scoped folder containing grouped logic or files for login.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 space-y-1 mt-5">
                profile
            </pre>
            <code>profile</code> → A standard feature folder for profile-related pages or components.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 space-y-1 mt-5">
                $[element]
            </pre>
            <code>$[element]</code> → A folder for internal UI elements that are not route-based.

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 space-y-1 mt-5">
                [id]
            </pre>
            <code>[id]</code> → A dynamic route segment used to access data by parameter (e.g., <code>/user/[id]</code>).

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Use <strong>lowercase only</strong> for all folder names.</li>
                <li>Keep folder names to <strong>one syllable or word</strong> for simplicity.</li>
                <li>Use <code>@</code> to indicate scoped or modular areas in your app structure.</li>
                <li>Use <code>$</code> to store shared/internal components or helpers that shouldn’t become routes.</li>
                <li>Avoid naming a file the same as the folder it resides in (e.g., <code>login/login.tsx</code>).</li>
                <li>Document the use of special prefixes in your project README or architecture guide.</li>
            </ul>

            <p className="mt-6">
                These folder naming rules help enforce a consistent, intuitive, and scalable directory structure—especially useful as your project grows and multiple developers work within the same codebase.
            </p>
        </div>
    );
}
