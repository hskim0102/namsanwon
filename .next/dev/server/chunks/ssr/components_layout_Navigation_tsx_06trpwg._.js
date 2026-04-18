module.exports = [
"[project]/components/layout/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const NAV_ITEMS = [
    {
        label: '기관소개',
        children: [
            {
                label: '인사말',
                href: '/about/greeting'
            },
            {
                label: '연혁',
                href: '/about/history'
            },
            {
                label: '현황',
                href: '/about/status'
            },
            {
                label: '시설안내',
                href: '/about/facility'
            },
            {
                label: '오시는 길',
                href: '/about/directions'
            },
            {
                label: '역사사진',
                href: '/about/photos'
            }
        ]
    },
    {
        label: '사업소개',
        children: [
            {
                label: '후원금품현황',
                href: '/business/admin-support/donation'
            },
            {
                label: '영양소식',
                href: '/business/admin-support/nutrition'
            },
            {
                label: '자립지원',
                href: '/business/independence'
            },
            {
                label: '교육지원팀',
                href: '/business/child-support/education'
            },
            {
                label: '보육지원팀',
                href: '/business/child-support/care'
            }
        ]
    },
    {
        label: '남산 이야기',
        children: [
            {
                label: '아동 소식',
                href: '/story/news'
            },
            {
                label: '아동 사진첩',
                href: '/story/album'
            }
        ]
    },
    {
        label: '후원/자원봉사',
        children: [
            {
                label: '후원안내',
                href: '/support/donation'
            },
            {
                label: '자원봉사 안내',
                href: '/support/volunteer'
            }
        ]
    },
    {
        label: '게시판',
        children: [
            {
                label: '공지사항',
                href: '/board/notice'
            },
            {
                label: '채용공고',
                href: '/board/job'
            },
            {
                label: '자유게시판',
                href: '/board/free'
            },
            {
                label: '외국인게시판',
                href: '/board/foreign'
            },
            {
                label: '후원·봉사 갤러리',
                href: '/board/gallery'
            }
        ]
    },
    {
        label: '사회복지법인',
        children: [
            {
                label: '법인게시판',
                href: '/corporation/board'
            }
        ]
    }
];
function Navigation() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileExpandIndex, setMobileExpandIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden md:flex items-center gap-1",
                "aria-label": "주요 메뉴",
                children: NAV_ITEMS.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        onMouseEnter: ()=>setOpenIndex(idx),
                        onMouseLeave: ()=>setOpenIndex(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": `${item.label} 메뉴`,
                                "aria-expanded": openIndex === idx,
                                className: "px-4 py-2 text-[#3D2B1F] font-medium hover:text-[#E8863A] transition-colors",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navigation.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            openIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[140px] z-50 border-t-2 border-[#E8863A]",
                                role: "menu",
                                children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: child.href,
                                        role: "menuitem",
                                        className: "block px-4 py-2 text-sm text-[#3D2B1F] hover:bg-[#FFF8F0] hover:text-[#E8863A] transition-colors",
                                        onClick: ()=>setOpenIndex(null),
                                        children: child.label
                                    }, child.href, false, {
                                        fileName: "[project]/components/layout/Navigation.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navigation.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/layout/Navigation.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/layout/Navigation.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "md:hidden flex flex-col gap-1.5 p-2",
                "aria-label": mobileOpen ? '메뉴 닫기' : '메뉴 열기',
                "aria-expanded": mobileOpen,
                onClick: ()=>setMobileOpen(!mobileOpen),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block w-6 h-0.5 bg-[#3D2B1F] transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navigation.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block w-6 h-0.5 bg-[#3D2B1F] transition-opacity ${mobileOpen ? 'opacity-0' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navigation.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block w-6 h-0.5 bg-[#3D2B1F] transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navigation.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Navigation.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto",
                "aria-label": "모바일 메뉴",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: NAV_ITEMS.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full flex justify-between items-center px-4 py-3 text-left font-medium text-[#3D2B1F]",
                                    "aria-expanded": mobileExpandIndex === idx,
                                    onClick: ()=>setMobileExpandIndex(mobileExpandIndex === idx ? null : idx),
                                    children: [
                                        item.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#E8863A]",
                                            children: mobileExpandIndex === idx ? '▲' : '▼'
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Navigation.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Navigation.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                mobileExpandIndex === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#FFF8F0] pl-4",
                                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: child.href,
                                            className: "block px-4 py-2.5 text-sm text-[#3D2B1F] hover:text-[#E8863A]",
                                            onClick: ()=>setMobileOpen(false),
                                            children: child.label
                                        }, child.href, false, {
                                            fileName: "[project]/components/layout/Navigation.tsx",
                                            lineNumber: 133,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Navigation.tsx",
                                    lineNumber: 131,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/components/layout/Navigation.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navigation.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Navigation.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=components_layout_Navigation_tsx_06trpwg._.js.map