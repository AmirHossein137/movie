import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Layout from "./components/layout/Layout"


function App() {

  return (
    <>
    <Header />
    <Layout>
      <Outlet />
    </Layout>
    <Footer />
    </>
  )
}

export default App
