import React from "react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-50 border-r border-zinc-200 h-screen p-4 flex flex-col justify-between">
      <div className="space-y-6">
        {/* App Logo / Brand */}
        <div className="px-3 py-2">
          <span className="text-xl font-bold text-zinc-900 tracking-tight">
            Dashboard
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-200 text-zinc-900 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 text-zinc-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </a>

          <a
            href="/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium transition-colors"
          >
            <svg
              className="w-5 h-5 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </a>
        </nav>
      </div>

      {/* User Footer Section */}
      <div className="border-t border-zinc-200 pt-4 flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-full bg-zinc-300 flex items-center justify-center text-xs font-semibold text-zinc-700">
          U
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-900">
            User Profile
          </span>
          <span className="text-xs text-zinc-500">user@example.com</span>
        </div>
      </div>
    </aside>
  );
}
