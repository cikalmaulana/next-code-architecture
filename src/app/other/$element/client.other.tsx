"use client";

export function CE_Other() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Coding Standards & Best Practices (Next.js)</h1>

            <p className="mb-4">
                Writing clean and maintainable code is essential for scaling a Next.js project. Below are the key practices that every developer should follow to ensure consistency, readability, and performance across the codebase.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Checklist</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>No <code>any</code> type:</strong> Avoid using the <code>any</code> type to maintain type safety. Use specific types or <code>unknown</code> when unsure.</li>
                <li><strong>No unused imports:</strong> Always clean up unused imports to reduce clutter and improve readability.</li>
                <li><strong>Use <code>import type</code>:</strong> When importing interfaces/types (e.g., <code>IRs_</code>, <code>IRq_</code>, <code>I_</code>), use <code>import type</code> to improve tree-shaking and type-only imports.</li>
                <li><strong>No unnecessary comments:</strong> Avoid outdated or irrelevant comments. Code should be self-explanatory where possible.</li>
                <li><strong>No <code>console.log</code> in staging/production:</strong> Debug logs should not leak into non-dev environments.</li>
                <li><strong>Follow the defined architecture:</strong> File and folder structure must follow the agreed conventions.</li>
                <li><strong>One function per file:</strong> Even similar functions should live in separate files for clarity and maintainability.</li>
                <li><strong>Use <code>use server</code> for API access:</strong> Never call APIs directly from client components. All API access must go through server functions.</li>
                <li><strong>Use <code>next/image</code> for images:</strong> Always use the built-in <code>Image</code> component for optimized loading and responsive behavior.</li>
                <li><strong>Use <code>next/link</code> for routing:</strong> Use the <code>Link</code> component instead of anchor tags for client-side navigation.</li>
                <li><strong>Environment-safe configs:</strong> Use <code>process.env</code> or config files for env-specific logic.</li>
                <li><strong>Typed components:</strong> All components must define prop types using TypeScript.</li>
                <li><strong>Consistent formatting:</strong> Use Prettier & ESLint for formatting and linting rules.</li>
                <li><strong>Keep components small:</strong> Break down components if they&apos;re getting too large or doing too many things.</li>
                <li><strong>Use Suspense & Error Boundaries:</strong> For async or error-prone logic in React.</li>
                <li><strong>No direct DOM manipulation:</strong> Always prefer React way (e.g., refs, states).</li>
                <li><strong>Ensure accessibility:</strong> Use semantic HTML and proper ARIA roles where needed.</li>
                <li><strong>Export cleanly:</strong> Use index.ts for grouped re-exports and cleaner imports.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices Summary</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Code should be <strong>predictable</strong>, <strong>modular</strong>, and <strong>testable</strong>.</li>
                <li>Optimize for <strong>readability</strong> before cleverness.</li>
                <li>Apply naming conventions consistently across all layers (components, functions, interfaces).</li>
                <li>Always think in terms of <strong>reusability</strong> and <strong>scalability</strong>.</li>
                <li>Write code as if the next person to read it is you in 3 months.</li>
            </ul>

            <p className="mt-6">
                Following these guidelines will ensure that your Next.js codebase remains clean, maintainable, and scalable — regardless of team size or project scope.
            </p>
        </div>
    );
}
