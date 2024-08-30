import React from 'react'

const verify = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="code">
              Verification Code
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-neutral-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="code"
              type="text"
              placeholder="Enter the verification code"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default verify
