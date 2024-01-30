
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'


export default function Layout() {
  return (
    <>
    <Header/>
    <main><Routers/></main>
    <Footer/>
    </>
  )
}
