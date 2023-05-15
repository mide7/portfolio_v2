import type { NextPage } from 'next'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const ContactPage: NextPage = () => {
    return (
        <>
            <Nav />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactPage
