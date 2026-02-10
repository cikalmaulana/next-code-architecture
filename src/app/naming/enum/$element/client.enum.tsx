"use client";

export function CE_NamingEnum() {
    return (
        <div className="text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Enum Naming Convention</h1>

            <p className="mb-4">
                Enums represent fixed sets of states used across the application.
                They prevent magic numbers and unclear flags by turning raw values into readable system meanings.
            </p>

            <p className="mb-4">
                Every enum must follow a strict naming convention to make states predictable,
                searchable, and consistent across backend communication and UI logic.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Naming Format Guide</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`E_[Name]   → Enum definition representing a system state`}
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>E_</strong>: Prefix for all enums (stands for <em>Enum</em>)</li>
                <li><strong>[Name]</strong>: Describes the business meaning of the state group</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Examples</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-2">
{`export enum E_OrderStatus {
    Pending = 0,
    Approved = 1,
    Rejected = 2
}

export enum E_UserRole {
    Admin = "admin",
    Cashier = "cashier",
    Owner = "owner"
}`}
            </pre>

            <ul className="list-disc list-inside mb-4 space-y-2">
                <li><code>E_OrderStatus</code> → Defines all valid states of an order lifecycle</li>
                <li><code>E_UserRole</code> → Defines access levels within the system</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Usage Example</h2>

            <pre className="bg-gray-900 text-green-400 p-4 rounded mb-4">
{`if (order.status === E_OrderStatus.Approved) {
    allowShipping()
}`}
            </pre>

            <p className="mb-4">
                Avoid comparing raw numbers or strings. Always compare against enum members
                so behavior stays stable even if underlying values change.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Why Enums Are Required</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Removes magic numbers and hidden meanings</li>
                <li>Improves readability of conditions</li>
                <li>Prevents invalid state usage</li>
                <li>Provides autocomplete and type safety</li>
                <li>Creates a shared vocabulary across the team</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Best Practices</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Always prefix enums with <code>E_</code></li>
                <li>Use PascalCase for enum name and members</li>
                <li>Represent business states, not UI labels</li>
                <li>Never use raw numbers or strings when an enum exists</li>
                <li>Keep enum values stable once released</li>
                <li>Group enums by feature or domain</li>
            </ul>

            <p className="mt-6">
                Enums define the official language of the system.
                If interfaces describe the shape of data, enums describe the meaning of the data.
            </p>
        </div>
    );
}
