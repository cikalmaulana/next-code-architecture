"use client";

import Link from "next/link";

export function CE_Component() {
    return (
        <div className="p-6 text-white">
            <h1 className="text-2xl font-bold mb-4">Component Structure</h1>

            <p className="mb-4">
                Components inside <code>$element</code> represent the UI layer of a feature.
                Their responsibility is to display data and handle user interaction, not to own business logic or data access.
            </p>

            <p className="mb-4">
                This page introduces the concept. Detailed behavior, rendering rules, and data flow are explained in the 
                <Link href="/architecture" className="font-bold text-blue-300 hover:text-blue-100 underline"> Architecture section</Link>.
            </p>

            <p className="mb-4">
                A component should behave like a visual unit that receives prepared data and renders it.
                It should not decide where data comes from or how it is stored.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Component Responsibility</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Render UI</li>
                <li>Handle user interaction</li>
                <li>Trigger actions</li>
                <li>Display provided data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">What Components Must NOT Do</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Directly fetch backend data</li>
                <li>Contain database logic</li>
                <li>Contain heavy business calculations</li>
                <li>Mutate global application state</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">File Types</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`client.[name].tsx  → interactive UI
server.[name].tsx  → prepared UI (data already resolved)`}
            </pre>

            <p className="mb-4">
                The difference between client and server components runtime behavior
                is explained in the Architecture section. Here we focus on structural responsibility.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Component Prefix Convention</h2>

            <p className="mb-4">
                Every component name indicates where it executes.
                The prefix makes runtime behavior visible without opening the file.
            </p>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`CE_[Name]  → Client Element (interactive component)
SE_[Name]  → Server Element (data-prepared component)`}
            </pre>

            <h3 className="text-lg font-semibold mt-6 mb-2">CE_ Client Element</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Runs in the browser</li>
                <li>Handles user interaction</li>
                <li>Can use state, effects, and event handlers</li>
                <li>Must not fetch backend data directly</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">SE_ Server Element</h3>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Runs on the server</li>
                <li>Receives prepared data</li>
                <li>No browser APIs or interaction logic</li>
                <li>Responsible for correct initial UI</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-2">Composition Pattern</h3>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`SE_Component
    └─ CE_Component (interaction)`}
            </pre>

            <p className="mb-4">
                Server elements prepare structure and data,
                client elements attach behavior and interactivity.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Local vs Global Components</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>$element inside page:</strong> Only used by that page</li>
                <li><strong>lib components:</strong> Reusable across features (Button, Input, Modal)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Keep components small and focused</li>
                <li>Prefer composition over large components</li>
                <li>Move logic to actions or functions</li>
                <li>Pass data down, trigger events up</li>
                <li>If multiple pages use it, move to <code>lib</code></li>
            </ul>

            <p className="mt-6">
                Components assemble the interface, they do not control the system.
                A predictable UI layer keeps the project scalable and easy to reason about.
            </p>
        </div>
    );
}