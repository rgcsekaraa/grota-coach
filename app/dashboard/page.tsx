import { useAuth } from '../../context/AuthContext';

const DashboardPage = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your activity and view your statistics.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            Active Users
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            1,234
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            New Signups
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            56
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            Revenue
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            $12,345
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            Pending Requests
          </h2>
          <p className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            5
          </p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-gray-200">
              John Doe signed up 2 hours ago
            </p>
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-gray-200">
              You updated your profile 5 hours ago
            </p>
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-gray-200">
              Jane Doe requested support 1 day ago
            </p>
          </li>
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 rounded-full"
            src="/profile-picture.jpg"
            alt="User profile"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
              Your Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Username: johndoe
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email: johndoe@example.com
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
