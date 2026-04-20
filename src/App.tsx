import Hero from './features/hero/Hero'

function App() {
  return (
    // We use 'min-h-screen' to ensure the background covers the whole window
    // and 'bg-bg' to use your custom variable from index.css
    <main className="min-h-screen bg-bg text-white overflow-x-hidden">
      {/* Once you build the Navbar, it will go here */}
      
      <div className="max-w-7xl mx-auto">
        <Hero />
      </div>
      
      {/* Other sections will be added below the Hero later */}
    </main>
  )
}

export default App