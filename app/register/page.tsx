export default function page() {
  return(
    <main>
            <div className="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Register Account</h2>
            <form method="POST">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
            Username
          </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">
            Password
          </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                        Login
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
        </main>
  );
}