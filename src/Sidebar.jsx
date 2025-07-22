import React from 'react'
import { Home, FileText, MessageSquare, Settings, User, Link } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: <Home size={20} /> },
  { label: 'Records', icon: <FileText size={20} /> },
  { label: 'Messages', icon: <MessageSquare size={20} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-60 bg-blue-900 text-white flex flex-col justify-between p-4">
          <div>
            <button className="mb-6 text-left font-bold text-xl">☰</button>
            <nav className="space-y-6">
              {navItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 hover:text-blue-300 cursor-pointer">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-300">
              <Settings size={20} />
              <span>Settings</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-300">
              <User size={20} />
              <span>Profile</span>
            </div>
          </div>
        </aside>
  )
}

export default Sidebar
