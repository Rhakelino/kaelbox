"use client";

import React from "react";

export default function PhotoSlot({ index, image, isActive }) {
    return (
        <div
            className={`relative flex-1 rounded-lg overflow-hidden transition-all duration-300 ${isActive
                    ? "ring-4 ring-primary ring-offset-2 ring-offset-white scale-[1.02]"
                    : ""
                } ${image ? "" : "bg-navy/5 dark:bg-white/10"}`}
        >
            {image ? (
                // Captured Photo
                <img
                    src={image}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                />
            ) : (
                // Empty Placeholder
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                        className={`size-12 rounded-full flex items-center justify-center mb-2 ${isActive
                                ? "bg-primary text-navy animate-pulse"
                                : "bg-primary/20 text-primary"
                            }`}
                    >
                        <span className="text-xl font-black">{index + 1}</span>
                    </div>
                    <p
                        className={`text-xs font-medium ${isActive
                                ? "text-primary animate-pulse"
                                : "text-navy/40 dark:text-white/40"
                            }`}
                    >
                        {isActive ? "Bersiap..." : "Kosong"}
                    </p>
                </div>
            )}

            {/* Active indicator overlay */}
            {isActive && !image && (
                <div className="absolute inset-0 bg-primary/10 animate-pulse" />
            )}
        </div>
    );
}
