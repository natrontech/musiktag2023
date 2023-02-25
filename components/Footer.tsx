import Container from './Container'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row border-t-2 pt-10">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          <a href="https://mgkonolfingen.ch" className="hover:underline text-black" target="_blank" rel="noreferrer">
            Musikgesellschaft Konolfingen
          </a><br></br>
          <a href="mailto:musiktag2023@mgkonolfingen.ch" className="hover:underline">
            musiktag2023@mgkonolfingen.ch
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
