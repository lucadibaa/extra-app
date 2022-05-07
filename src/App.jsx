import Layout from "./components/layout/Layout"
import Reports from "./pages/Reports"
import Earnings from "./pages/Earnings"
import Spending from "./pages/Spending"
import Home from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/spendings" element={<Spending />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
