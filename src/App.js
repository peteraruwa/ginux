import './App.css';
import { TopBar, NavBar, Carousel, BrandLogo, TopField, Features, Faq, Scholarship, Testimonial, GetStarted, Footer } from './components';


function App() {
  return (
    <main>
      <TopBar />
      <NavBar />
      <section className="bg-[url('./assets/pattern.svg')] bg-[#664DFF] bg-blend-overlay" >
        <Carousel />
      </section>
      <BrandLogo />
      <section className='bg-[#F5F5F5] h-full'>
        <TopField />
        <Features />
        <Faq />
        <Scholarship />
        <Testimonial />
        <GetStarted />
      </section>
      <Footer />
    </main>
  )
}

export default App;
