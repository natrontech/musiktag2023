
import Container from './Container'
import Logo from './Logo'
import { DiamondIcon } from './DiamondIcon'

const Header = () => {

  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-red-600/10 py-4 font-mono text-sm text-red-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2023-06-09">09.</time>-
              <time dateTime="2023-06-10">10. Juni, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Konolfingen</p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <a href="mailto:musiktag2023@mgkonolfingen.ch" className="hover:underline">
              musiktag2023@mgkonolfingen.ch
            </a>
          </div>
        </div>
        <a href="https://mgkonolfingen.helferapp.ch/" className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end" target="_blank" rel="noreferrer">
          <label className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              ⚠️ HelferIn werden ⚠️
            </span>
          </label>
        </a>
        {/* The button to open modal */}
      </Container>
      <Container className="flex flex-wrap items-center mt-10 sm:hidden justify-center sm:justify-between lg:flex-nowrap">
        <a href="https://mgkonolfingen.helferapp.ch/" className="sm:hidden sm:mt-10 lg:mt-0 lg:grow lg:basis-0 lg:justify-end" target="_blank" rel="noreferrer">
          <label className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              ⚠️ HelferIn werden ⚠️
            </span>
          </label>
        </a>
      </Container>
    </header>
  )
}

export default Header
