"use client";

export function CE_Component() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Client and Server Components</h1>
            
            <p className="mb-4">
                In Next.js, it's important to distinguish between <strong>Client Components</strong> and <strong>Server Components</strong> to ensure proper separation of concerns, improve performance, and maintain security.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Server Components</h2>
            <p className="mb-4">
                Server components are used to fetch data, perform server-side logic, and render HTML on the server. They are useful for tasks such as fetching data from an API, querying a database, or handling sensitive logic that should not be exposed to the client. Server components ensure that sensitive data, such as API keys and database access, remains secure on the server side.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Handles <strong>API calls</strong> and data fetching securely on the server.</li>
                <li>Prevents exposing sensitive information like API keys or logic to the client.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Client Components</h2>
            <p className="mb-4">
                Client components are used to handle dynamic behavior, UI interactions, and managing local state on the client side. These components are executed in the browser and are responsible for rendering interactive elements, handling events, and updating the UI in response to user input. Client components should not handle API calls or data fetching—this must be done in server components to maintain security.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Handles <strong>UI interactivity</strong>, such as button clicks, form submissions, and dynamic content updates.</li>
                <li>Manages <strong>local state</strong> with hooks like useState, useEffect, etc.</li>
                <li><strong>DO NOT</strong> handle <strong>API calls</strong> or sensitive data on the client-side.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Differences</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Server Components</strong> are used for data fetching, API calls, and secure operations that should not be exposed to the client.</li>
                <li><strong>Client Components</strong> are used for handling UI interactions, managing client-side state, and responding to user input.</li>
                <li><strong>All API calls and sensitive logic should remain in server components.</strong> Client components should only handle things like UI updates, events, and dynamic content.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Keep data fetching and API calls in <strong>server components</strong> to maintain security and improve performance.</li>
                <li>Use <strong>client components</strong> for interactive UI elements and dynamic behavior.</li>
                <li>Ensure that only non-sensitive data and client-side logic is handled in <strong>client components</strong>.</li>
            </ul>

            <p className="mt-6">
                Understanding the distinction between server and client components helps in optimizing the application's performance, maintaining security, and ensuring better user experience.
            </p>
        </div>
    );
}
