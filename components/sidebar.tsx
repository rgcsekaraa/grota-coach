'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Dumbbell,
  Users,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';
import { ThemeToggler } from './theme-toggler';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Planner', icon: Dumbbell, href: '/workout-planner' },
    { name: 'Members', icon: Users, href: '/members' },
    { name: 'Messages', icon: MessageSquare, href: '/messages' },
    { name: 'Alerts', icon: Bell, href: '/alerts' },
    { name: 'Settings', icon: Settings, href: '/settings' },
  ];

  return (
    <div className="flex flex-col h-screen w-20 bg-sidebar-light dark:bg-sidebar-dark p-2">
      <div className="flex-grow overflow-y-auto">
        <div className="flex justify-center text-lg font-extrabold m-2 text-slate-700 dark:text-slate-300">
          GROTA
        </div>
        <nav className="mt-5">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link href={item.href}>
                  <div className="flex flex-col items-center justify-center text-center p-2 rounded-3xl transition-all ease-in-out duration-300">
                    <div
                      className={`p-2 rounded-full ${
                        pathname === item.href
                          ? 'bg-red-600 '
                          : 'bg-gray-500 dark:bg-gray-600 group-hover:bg-red-500'
                      } transition-colors duration-300`}
                    >
                      <item.icon
                        className={`h-6 w-6 text-white ${
                          pathname === item.href
                            ? ''
                            : 'group-hover:text-gray-300'
                        }`}
                      />
                    </div>
                    <span className="text-xs font-light mt-1 text-gray-600 dark:text-gray-300">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 rounded-full p-2 hover:bg-gray-200 hover:dark:bg-gray-700 mr-3 transition-all ease-in-out duration-300">
          <LogOut className="h-5 w-5" />
        </button>
      </div>

      {/* Theme Toggle */}
      <div className="p-4 flex justify-center">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Sidebar;
