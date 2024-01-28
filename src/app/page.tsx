import styles from './page.module.css'
import NavBar from './components/NavBar'
import SliderPhotos from './components/SliderPhotos'
import StudyPathway from './components/StudyPathway'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import Introduction from './components/Introduction'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <SliderPhotos />
      <Introduction />
      <StudyPathway />
      <ContactForm />
      <Footer />
    </main>
  )
}
