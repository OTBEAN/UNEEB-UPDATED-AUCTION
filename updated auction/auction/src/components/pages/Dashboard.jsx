import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user registered', time: '2 mins ago', read: false },
    { id: 2, message: 'System update available', time: '1 hour ago', read: false },
    { id: 3, message: 'Payment received', time: '3 hours ago', read: true },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data for charts (would be replaced with real data in production)
  const stats = [
    { name: 'Total Users', value: '2,420', change: '+12%', trend: 'up' },
    { name: 'Revenue', value: '$3,240', change: '+8%', trend: 'up' },
    { name: 'Tasks Completed', value: '142', change: '-3%', trend: 'down' },
    { name: 'Pending Orders', value: '24', change: '+4%', trend: 'up' },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created a new project', time: '5 mins ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '12 mins ago' },
    { id: 3, user: 'Robert Johnson', action: 'Completed task #123', time: '25 mins ago' },
    { id: 4, user: 'Emily Davis', action: 'Submitted a ticket', time: '1 hour ago' },
  ];

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    console.log('Logging out...');
    navigate('/login');
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, read: true} : notification
    ));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">Dashboard</h1>
          ) : (
            <h1 className="text-xl font-bold">D</h1>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-blue-700"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="mt-6">
          <div
            className={`px-4 py-3 flex items-center cursor-pointer ${activeTab === 'overview' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => handleTabChange('overview')}
          >
            <span className="mr-3">📊</span>
            {sidebarOpen && <span>Overview</span>}
          </div>
          <div
            className={`px-4 py-3 flex items-center cursor-pointer ${activeTab === 'analytics' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => handleTabChange('analytics')}
          >
            <span className="mr-3">📈</span>
            {sidebarOpen && <span>Analytics</span>}
          </div>
          <div
            className={`px-4 py-3 flex items-center cursor-pointer ${activeTab === 'projects' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => handleTabChange('projects')}
          >
            <span className="mr-3">📂</span>
            {sidebarOpen && <span>Projects</span>}
          </div>
          <div
            className={`px-4 py-3 flex items-center cursor-pointer ${activeTab === 'settings' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={() => handleTabChange('settings')}
          >
            <span className="mr-3">⚙️</span>
            {sidebarOpen && <span>Settings</span>}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full hover:bg-gray-200 relative"
                >
                  <span>🔔</span>
                  {notifications.some(n => !n.read) && (
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10">
                    <div className="px-4 py-2 border-b font-medium">Notifications</div>
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-100 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                          onClick={() => markNotificationAsRead(notification.id)}
                        >
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">{notification.message}</p>
                            {!notification.read && <span className="h-2 w-2 bg-blue-500 rounded-full"></span>}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500">No new notifications</div>
                    )}
                    <div className="px-4 py-2 border-t text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">👤</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600">
                  Welcome to your dashboard. Here you can see an overview of your activities, 
                  statistics, and recent updates.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            )}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics</h3>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
                  Analytics Chart Placeholder
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Daily
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    Weekly
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    Monthly
                  </button>
                </div>
              </div>
            )}
            {activeTab === 'projects' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(project => (
                    <div key={project} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium">Project {project}</h4>
                      <p className="text-sm text-gray-500 mt-1">Description of project {project}</p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                          Active
                        </span>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Create New Project
                </button>
              </div>
            )}
            {activeTab === 'settings' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Information</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notifications</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">Email notifications</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">Push notifications</span>
                      </label>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;