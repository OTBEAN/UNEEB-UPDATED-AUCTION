import React from 'react'

function AuthForm() {
  return (
    <div>
 <div className="auth-form-container bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md">
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Sign In
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Welcome back! Please enter your details.
      </p>
    </div>
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your email" />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your password" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="mr-2 leading-tight" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="inline-block align-baseline font-semibold text-sm text-indigo-600 hover:text-indigo-800">
          Forgot Password?
        </a>
      </div>
      <div>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Sign In
        </button>
      </div>
      <p className="text-center text-gray-600 text-xs">
        Don't have an account?
        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800">
          Sign Up
        </a>
      </p>
    </form>
  </div>
</div>



    </div>
  )
}

export default AuthForm
