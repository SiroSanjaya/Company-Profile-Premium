import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Search } from 'lucide-react';

const ApiReference = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);
  const [activeTab, setActiveTab] = useState('authentication');
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text, endpoint) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/users',
      description: 'Retrieve all users',
      parameters: [
        {
          name: 'page',
          type: 'integer',
          required: false,
          description: 'Page number for pagination',
        },
        {
          name: 'limit',
          type: 'integer',
          required: false,
          description: 'Number of items per page',
        },
        {
          name: 'search',
          type: 'string',
          required: false,
          description: 'Search term for filtering users',
        },
      ],
      response: {
        success: true,
        data: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'user',
            createdAt: '2024-01-15T10:30:00Z',
          },
        ],
        pagination: {
          page: 1,
          limit: 10,
          total: 100,
          pages: 10,
        },
      },
    },
    {
      method: 'POST',
      endpoint: '/api/users',
      description: 'Create a new user',
      parameters: [
        {
          name: 'name',
          type: 'string',
          required: true,
          description: 'User full name',
        },
        {
          name: 'email',
          type: 'string',
          required: true,
          description: 'User email address',
        },
        {
          name: 'password',
          type: 'string',
          required: true,
          description: 'User password',
        },
        {
          name: 'role',
          type: 'string',
          required: false,
          description: 'User role (default: user)',
        },
      ],
      response: {
        success: true,
        data: {
          id: 123,
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'user',
          createdAt: '2024-01-15T10:30:00Z',
        },
      },
    },
    {
      method: 'PUT',
      endpoint: '/api/users/:id',
      description: 'Update user information',
      parameters: [
        { name: 'id', type: 'integer', required: true, description: 'User ID' },
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'User full name',
        },
        {
          name: 'email',
          type: 'string',
          required: false,
          description: 'User email address',
        },
        {
          name: 'role',
          type: 'string',
          required: false,
          description: 'User role',
        },
      ],
      response: {
        success: true,
        data: {
          id: 123,
          name: 'Jane Smith Updated',
          email: 'jane.updated@example.com',
          role: 'admin',
          updatedAt: '2024-01-15T11:30:00Z',
        },
      },
    },
    {
      method: 'DELETE',
      endpoint: '/api/users/:id',
      description: 'Delete a user',
      parameters: [
        {
          name: 'id',
          type: 'integer',
          required: true,
          description: 'User ID to delete',
        },
      ],
      response: {
        success: true,
        message: 'User deleted successfully',
      },
    },
  ];

  const codeExamples = {
    javascript: `// Using fetch
const response = await fetch('/api/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,

    python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.example.com/api/users', headers=headers)
data = response.json()
print(data)`,

    curl: `curl -X GET "https://api.example.com/api/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

    php: `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.example.com/api/users");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$data = json_decode($response, true);
curl_close($ch);
?>`,
  };

  const errorCodes = [
    {
      code: 400,
      name: 'Bad Request',
      description:
        'The request could not be understood or contained invalid parameters',
    },
    {
      code: 401,
      name: 'Unauthorized',
      description:
        'Authentication is required and has failed or has not been provided',
    },
    {
      code: 403,
      name: 'Forbidden',
      description:
        'The server understood the request but refuses to authorize it',
    },
    {
      code: 404,
      name: 'Not Found',
      description: 'The requested resource could not be found',
    },
    {
      code: 429,
      name: 'Too Many Requests',
      description:
        'The user has sent too many requests in a given amount of time',
    },
    {
      code: 500,
      name: 'Internal Server Error',
      description: 'An error occurred on the server',
    },
  ];

  const filteredEndpoints = apiEndpoints.filter(
    endpoint =>
      endpoint.endpoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Reference
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Complete documentation for our RESTful API endpoints
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search API endpoints..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-gray-600">HTTP Methods</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Endpoints</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">&lt;100ms</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {['authentication', 'endpoints', 'examples', 'errors'].map(
                    tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeTab === tab
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    )
                  )}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Authentication */}
              {activeTab === 'authentication' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Authentication
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our API uses Bearer token authentication. Include your API
                    key in the Authorization header for all requests.
                  </p>

                  <div className="bg-gray-900 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        Authorization Header
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            'Authorization: Bearer YOUR_API_KEY',
                            'auth'
                          )
                        }
                        className="text-gray-400 hover:text-white"
                      >
                        {copiedEndpoint === 'auth' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <code className="text-green-400">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Get API Key
                      </h4>
                      <p className="text-blue-700 text-sm mb-3">
                        Sign up for an account and generate your API key from
                        the dashboard.
                      </p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                        Get API Key
                      </button>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Rate Limits
                      </h4>
                      <p className="text-green-700 text-sm">
                        Free tier: 1,000 requests/day
                        <br />
                        Pro tier: 100,000 requests/day
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Endpoints */}
              {activeTab === 'endpoints' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {filteredEndpoints.map((endpoint, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              endpoint.method === 'GET'
                                ? 'bg-green-100 text-green-800'
                                : endpoint.method === 'POST'
                                  ? 'bg-blue-100 text-blue-800'
                                  : endpoint.method === 'PUT'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          <code className="text-lg font-mono text-gray-900">
                            {endpoint.endpoint}
                          </code>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              endpoint.endpoint,
                              `endpoint-${index}`
                            )
                          }
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {copiedEndpoint === `endpoint-${index}` ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {endpoint.description}
                      </p>

                      {/* Parameters */}
                      {endpoint.parameters &&
                        endpoint.parameters.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Parameters
                            </h4>
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                              <table className="w-full">
                                <thead className="bg-gray-100">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                      Name
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                      Type
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                      Required
                                    </th>
                                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                      Description
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {endpoint.parameters.map((param, idx) => (
                                    <tr
                                      key={idx}
                                      className="border-t border-gray-200"
                                    >
                                      <td className="px-4 py-2 text-sm font-mono text-gray-900">
                                        {param.name}
                                      </td>
                                      <td className="px-4 py-2 text-sm text-gray-600">
                                        {param.type}
                                      </td>
                                      <td className="px-4 py-2 text-sm">
                                        <span
                                          className={`px-2 py-1 rounded-full text-xs ${
                                            param.required
                                              ? 'bg-red-100 text-red-800'
                                              : 'bg-gray-100 text-gray-800'
                                          }`}
                                        >
                                          {param.required ? 'Yes' : 'No'}
                                        </span>
                                      </td>
                                      <td className="px-4 py-2 text-sm text-gray-600">
                                        {param.description}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                      {/* Response */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Response
                        </h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 text-sm">
                              JSON Response
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  JSON.stringify(endpoint.response, null, 2),
                                  `response-${index}`
                                )
                              }
                              className="text-gray-400 hover:text-white"
                            >
                              {copiedEndpoint === `response-${index}` ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <pre className="text-green-400 text-sm overflow-x-auto">
                            <code>
                              {JSON.stringify(endpoint.response, null, 2)}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Code Examples */}
              {activeTab === 'examples' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Code Examples
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(codeExamples).map(([language, code]) => (
                      <div
                        key={language}
                        className="bg-gray-900 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-300 font-semibold capitalize">
                            {language}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(code, `example-${language}`)
                            }
                            className="text-gray-400 hover:text-white"
                          >
                            {copiedEndpoint === `example-${language}` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                        <pre className="text-green-400 text-sm overflow-x-auto">
                          <code>{code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Error Codes */}
              {activeTab === 'errors' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Error Codes
                  </h2>

                  <div className="space-y-4">
                    {errorCodes.map(error => (
                      <div
                        key={error.code}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              error.code >= 500
                                ? 'bg-red-100 text-red-800'
                                : error.code >= 400
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {error.code}
                          </span>
                          <h3 className="font-semibold text-gray-900">
                            {error.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {error.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiReference;
