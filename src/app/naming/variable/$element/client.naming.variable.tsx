"use client";

export function CE_NamingVariable() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Variable Naming Convention</h1>

            <p className="mb-4">
                Clear and consistent variable naming makes code more understandable and easier to maintain. Well-named variables help both the original developer and others quickly grasp the purpose of a value without needing extra context.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Naming Format Guide</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
                variableName
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>camelCase</strong> is used for all local variables, function parameters, constants (non-global), and object keys.</li>
                <li>Names should be <strong>descriptive</strong> but concise.</li>
                <li>Use <strong>nouns</strong> for values, and <strong>verbs or verb phrases</strong> for functions.</li>
                <li>Prefix booleans with <code>is</code>, <code>has</code>, <code>can</code>, or <code>should</code> to clarify intent.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2 space-y-1">
                userName
            </pre>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Always use <strong>camelCase</strong> for JavaScript/TypeScript variables and function names.</li>
                <li>Be <strong>descriptive and specific</strong>; avoid vague names like <code>data</code>, <code>item</code>, or <code>thing</code>.</li>
                <li>Boolean variables should start with <code>is</code>, <code>has</code>, or <code>can</code> for clarity.</li>
                <li>Arrays should be named as plurals (e.g., <code>users</code>, <code>meows</code>).</li>
                <li>Functions should start with action words (e.g., <code>get</code>, <code>fetch</code>, <code>set</code>, <code>update</code>).</li>
                <li>Use short abbreviations only when they are universally understood (e.g., <code>id</code>, <code>url</code>, <code>api</code>).</li>
                <li>Never use single-letter variables except in loops or very temporary scopes (e.g., <code>i</code> in a <code>for</code> loop).</li>
            </ul>

            <p className="mt-6">
                Following these conventions improves code readability and promotes consistency across the entire codebase, making collaboration smoother and reducing the learning curve for new developers.
            </p>
        </div>
    );
}
