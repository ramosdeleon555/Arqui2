function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Mi Aplicación Web 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          Esta es una aplicación desplegada en AWS usando S3 y CloudFront.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition duration-300 w-full">
          Ver más
        </button>

      </div>
    </div>
  )
}

export default App