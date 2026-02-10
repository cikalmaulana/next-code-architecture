"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function CE_Sidebar() {
    const router = useRouter();
    const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
    const pathname = usePathname();

    const toggleSubmenu = (menu: string) => {
        setExpandedMenus((prev) =>
            prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
        );
    };

    // ✅ Improved logic
    const isActive = (path: string) => pathname === path;
    const isParentActive = (path: string) => pathname.startsWith(path);

    const getSubMenuItemClass = (path: string) => {
        return isActive(path) ? "text-green-400" : "text-white";
    };

    return (
        <div className="fixed top-0 left-0 h-screen overflow-y-auto bg-black text-white p-4 pb-20 w-64 z-50">
            <div className="space-y-6">
                {/* --- NAMING --- */}
                <div
                    className={`text-lg font-semibold cursor-pointer ${
                        isParentActive("/naming") ? "text-green-400" : ""
                    }`}
                    onClick={() => toggleSubmenu("naming")}
                >
                    Naming Conventions
                </div>
                {expandedMenus.includes("naming") && (
                    <ul className="ml-4 space-y-2 text-sm">
                        <li>
                            <Link href="/naming" className={getSubMenuItemClass("/naming")}>
                                {isActive("/naming") && "•"} Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/naming/file" className={getSubMenuItemClass("/naming/file")}>
                                {isActive("/naming/file") && "•"} File
                            </Link>
                        </li>
                        <li>
                            <Link href="/naming/folder" className={getSubMenuItemClass("/naming/folder")}>
                                {isActive("/naming/folder") && "•"} Folder
                            </Link>
                        </li>
                        <li>
                            <Link href="/naming/variable" className={getSubMenuItemClass("/naming/variable")}>
                                {isActive("/naming/variable") && "•"} Variable
                            </Link>
                        </li>
                        <li>
                            <Link href="/naming/function" className={getSubMenuItemClass("/naming/function")}>
                                {isActive("/naming/function") && "•"} Function
                            </Link>
                        </li>
                        <li>
                            <Link href="/naming/interface" className={getSubMenuItemClass("/naming/interface")}>
                                {isActive("/naming/interface") && "•"} Interface
                            </Link>
                        </li>
                        <li>
                            <Link href="/naming/enum" className={getSubMenuItemClass("/naming/enum")}>
                                {isActive("/naming/enum") && "•"} Enum
                            </Link>
                        </li>
                    </ul>
                )}

                {/* --- STRUCTURE --- */}
                <div
                    className={`text-lg font-semibold cursor-pointer ${
                        isParentActive("/structure") ? "text-green-400" : ""
                    }`}
                    onClick={() => toggleSubmenu("structure")}
                >
                    Structure
                </div>
                {expandedMenus.includes("structure") && (
                    <ul className="ml-4 space-y-2 text-sm">
                        <li>
                            <Link href="/structure" className={getSubMenuItemClass("/structure")}>
                                {isActive("/structure") && "•"} Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/structure/folder" className={getSubMenuItemClass("/structure/folder")}>
                                {isActive("/structure/folder") && "•"} Folder
                            </Link>
                        </li>
                        <li>
                            <Link href="/structure/component" className={getSubMenuItemClass("/structure/component")}>
                                {isActive("/structure/component") && "•"} Component
                            </Link>
                        </li>
                    </ul>
                )}

                {/* --- DOCUMENTATION --- */}
                <div
                    className={`text-lg font-semibold cursor-pointer ${
                        isParentActive("/documentation") ? "text-green-400" : ""
                    }`}
                    onClick={() => toggleSubmenu("documentation")}
                >
                    Code Documentation
                </div>
                {expandedMenus.includes("documentation") && (
                    <ul className="ml-4 space-y-2 text-sm">
                        <li>
                            <Link href="/documentation" className={getSubMenuItemClass("/documentation")}>
                                {isActive("/documentation") && "•"} Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/documentation/function" className={getSubMenuItemClass("/documentation/function")}>
                                {isActive("/documentation/function") && "•"} Functions
                            </Link>
                        </li>
                        <li>
                            <Link href="/documentation/variables" className={getSubMenuItemClass("/documentation/variables")}>
                                {isActive("/documentation/variables") && "•"} Variables
                            </Link>
                        </li>
                        <li>
                            <Link href="/documentation/comments" className={getSubMenuItemClass("/documentation/comments")}>
                                {isActive("/documentation/comments") && "•"} Comments
                            </Link>
                        </li>
                    </ul>
                )}

                {/* --- ARCHITECTURE --- */}
                    <div
                        className={`text-lg font-semibold cursor-pointer ${
                            isParentActive("/architecture") ? "text-green-400" : ""
                        }`}
                        onClick={() => toggleSubmenu("architecture")}
                    >
                        Architecture
                    </div>
                    {expandedMenus.includes("architecture") && (
                        <ul className="ml-4 space-y-2 text-sm">
                            <li>
                                <Link href="/architecture" className={getSubMenuItemClass("/architecture")}>
                                    {isActive("/architecture") && "•"} Overview
                                </Link>
                            </li>
                            <li>
                                <Link href="/architecture/rendering" className={getSubMenuItemClass("/architecture/rendering")}>
                                    {isActive("/architecture/rendering") && "•"} Rendering (SSR vs CSR)
                                </Link>
                            </li>
                            <li>
                                <Link href="/architecture/ssr" className={getSubMenuItemClass("/architecture/ssr")}>
                                    {isActive("/architecture/ssr") && "•"} Server Component
                                </Link>
                            </li>
                            <li>
                                <Link href="/architecture/csr" className={getSubMenuItemClass("/architecture/csr")}>
                                    {isActive("/architecture/csr") && "•"} Client Component
                                </Link>
                            </li>
                            <li>
                                <Link href="/architecture/fetching" className={getSubMenuItemClass("/architecture/fetching")}>
                                    {isActive("/architecture/fetching") && "•"} Data Fetching
                                </Link>
                            </li>
                        </ul>
                    )}

                {/* --- OTHER --- */}
                <div
                    className={`text-lg font-semibold cursor-pointer ${
                        isActive("/other") ? "text-green-400" : ""
                    }`}
                    onClick={() => router.push("/other")}
                >
                    Other Important
                </div>
            </div>
        </div>
    );
}
