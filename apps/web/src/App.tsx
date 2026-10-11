import { Header } from "./components/header"
import { Home } from "./pages/home"

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d0c0a] text-[#e8dfc7]">
      <Header />
      <Home />
    </div>
  )
}

export default App
