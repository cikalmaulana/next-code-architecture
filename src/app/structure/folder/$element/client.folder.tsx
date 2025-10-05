"use client"

export function CE_Folder() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Folder Structure</h1>

            <p className="mb-4">
                A clear and consistent folder structure improves scalability and developer efficiency. It ensures each concern is separated cleanly and logically. Below is the standard folder layout for this project.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Structure Overview</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4 overflow-auto text-sm">
{`| - src
|   | - api                 // Contains all API_ functions
|   | - app
|   |   | - $action         // Global action functions (server-side handlers)
|   |   | - $constant       // Global constants used in UI or logic
|   |   | - $element        // Global UI components (client/server)
|   |   | - $function       // Global bridge functions (CFN_, SFN_)
|   |   | - pageName        // Folder per page/feature
|   |   |   | - $action     // Local action functions
|   |   |   | - $constant   // Local constants (only for this feature)
|   |   |   | - $element    // Local UI components
|   |   |   | - $function   // Local functions
|   |   |   | - [id]        // Dynamic route folder
|   |   |   |   | - $action
|   |   |   |   | - $element
|   |   |   |   | - $function
|   | - func                // Global functions used anywhere in the app
|   | - lib                 // Global libraries, reusable UI (e.g. Button, Input)
| - toolbox                // Any dev tools, test helpers, or utilities`}
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Folder Breakdown</h2>
            <ul className="list-disc list-inside mb-4 space-y-3">
                <li><code>api</code> — Stores all <code>API_</code> functions that handle external or internal API calls.</li>
                <li><code>$action</code> — Server components that serve as bridges between client components and API calls.</li>
                <li><code>$constant</code> — Stores constant values used by a specific scope (e.g., home, login).
                    <ul className="list-disc ml-6">
                        <li>Use local constants in <code>pageName/$constant</code> if they are only needed within that feature/page.</li>
                        <li><strong>Do not</strong> reuse constants from parent folders—each page manages its own constant scope.</li>
                    </ul>
                </li>
                <li><code>$element</code> — UI components, separated by client or server logic:
                    <ul className="list-disc ml-6">
                        <li><code>client.[name].tsx</code> → Client components (use client)</li>
                        <li><code>server.[name].tsx</code> → Server components (use server)</li>
                    </ul>
                </li>
                <li><code>$function</code> — Contains bridge functions:
                    <ul className="list-disc ml-6">
                        <li><code>cfn.[name].ts</code> → Client Functions (CFN_)</li>
                        <li><code>sfn.[name].ts</code> → Server Functions (SFN_)</li>
                    </ul>
                </li>
                <li><code>[id]</code> — Used for dynamic routing in Next.js. Can contain its own <code>$action</code>, <code>$element</code>, <code>$function</code>, etc., completely scoped to that dynamic page.</li>
                <li><code>func</code> — Global helper functions used across multiple features.</li>
                <li><code>lib</code> — Shared libraries such as design system components (e.g., Button, Modal, Input), utils, or wrappers.</li>
                <li><code>toolbox</code> — Developer tools, test utilities, and other support scripts.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Use camelCase and single-word folder names for simplicity.</li>
                <li>Use symbol-prefixed folders to separate structure:
                    <ul className="list-disc ml-6">
                        <li><code>$[folder]</code> → For structural modules (e.g., <code>$action</code>, <code>$function</code>)</li>
                        <li><code>[param]</code> → For dynamic routes in Next.js</li>
                    </ul>
                </li>
                <li>
                    <strong>Each file inside a page’s folders (like <code>$action</code>, <code>$function</code>, etc.) is strictly scoped to that page only.</strong>
                    <ul className="list-disc ml-6">
                        <li>
                        If <code>profile</code> has <code>action.get.user.ts</code>, and <code>login</code> needs the same logic, you must create a new version inside <code>login/$action</code>.
                        </li>
                        <li>
                        Even if a child dynamic route (e.g., <code>profile/[id]</code>) needs similar logic, it must create its own copy within <code>profile/[id]/$action</code>.
                        </li>
                        <li>
                        <strong>Reason:</strong> This keeps each page’s logic fully self-contained and prevents cross-dependencies between parent and child routes.  
                        By maintaining strict scoping, you avoid confusion like a child page calling its parent’s actions—or worse, a parent calling a child’s logic.  
                        This also ensures that future updates in one page won’t accidentally break or force changes in another, preserving modularity and isolation.
                        </li>
                    </ul>
                </li>
                <li>Avoid cross-folder imports between page folders to prevent coupling and maintain modularity.</li>
                <li>Keep global elements in <code>lib</code> or <code>func</code> only if they are truly reusable across multiple features.</li>
                <li>Ensure each folder has a clear responsibility and does not mix roles (e.g., no UI components in <code>$function</code>).</li>
            </ul>

            <p className="mt-6">
                This modular, scalable structure makes onboarding easier, development faster, and maintenance far more predictable.
            </p>
        </div>
    );
}
