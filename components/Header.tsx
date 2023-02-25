
import Container from './Container'
import Logo from './Logo'
import { DiamondIcon } from './DiamondIcon'
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {

  const SendMail = async (e: any) => {
    e.preventDefault()
    // get data from forn with id "helfer-form"
    const form = document.getElementById('helfer-form') as HTMLFormElement
    const name = form.elements.namedItem('name') as HTMLInputElement
    const email = form.elements.namedItem('email') as HTMLInputElement
    const phone = form.elements.namedItem('phone') as HTMLInputElement
    const freitag = form.elements.namedItem('freitag') as HTMLInputElement
    const samstag = form.elements.namedItem('samstag') as HTMLInputElement
    const küche = form.elements.namedItem('küche') as HTMLInputElement
    const buffet = form.elements.namedItem('buffet') as HTMLInputElement
    const service = form.elements.namedItem('service') as HTMLInputElement
    const bar = form.elements.namedItem('bar') as HTMLInputElement
    const sonstiges = form.elements.namedItem('sonstiges') as HTMLInputElement

    // validate data
    if (!name.value) {
      toast.error('Bitte gib deinen Namen ein')
      return
    }
    if (!email.value) {
      toast.error('Bitte gib deine E-Mail Adresse ein')
      return
    }
    if (!phone.value) {
      toast.error('Bitte gib deine Telefonnummer ein')
      return
    }
    if (!freitag.checked && !samstag.checked) {
      toast.error('Bitte wähle einen Tag aus')
      return
    }
    if (!küche.checked && !buffet.checked && !service.checked && !bar.checked && !sonstiges.checked) {
      toast.error('Bitte wähle eine Aufgabe aus')
      return
    }

    // summarize data to text
    let text = `Name: ${name.value} \n`
    text += `E-Mail: ${email.value} \n`
    text += `Telefon: ${phone.value} \n`
    text += `Freitag: ${freitag.checked ? 'Ja' : 'Nein'} \n`
    text += `Samstag: ${samstag.checked ? 'Ja' : 'Nein'} \n`
    text += `Küche: ${küche.checked ? 'Ja' : 'Nein'} \n`
    text += `Buffet: ${buffet.checked ? 'Ja' : 'Nein'} \n`
    text += `Service: ${service.checked ? 'Ja' : 'Nein'} \n`
    text += `Bar: ${bar.checked ? 'Ja' : 'Nein'} \n`
    text += `Sonstiges: ${sonstiges.checked ? 'Ja' : 'Nein'} \n`

    // send data to api
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        text: text
      })
    })

    // show success message
    if (res.status === 200) {
      // clear form
      name.value = ''
      email.value = ''
      phone.value = ''
      freitag.checked = false
      samstag.checked = false
      küche.checked = false
      buffet.checked = false
      service.checked = false
      bar.checked = false
      sonstiges.checked = false

      // close modal
      const modal = document.getElementById('my-modal-6') as HTMLInputElement
      modal.checked = false

      toast.success('Vielen Dank für deine Anmeldung!')
    } else {
      toast.error('Es ist ein Fehler aufgetreten')
    }
  }

  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Toaster />
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-red-600/10 py-4 font-mono text-sm text-red-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2023-06-09">09.</time>-
              <time dateTime="2023-06-10">10. April, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Konolfingen</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end ">
          <label htmlFor="my-modal-6" className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              ⚠️ Helfer werden ⚠️
            </span>
          </label>
        </div>
        {/* The button to open modal */}


        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-red-600 text-lg">Helfer werden</h3>
            <form className="mt-4" id="helfer-form">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Wie heisst du?</span>
                </label>
                <input id="name" type="text" placeholder="Max Muster" className="input input-bordered w-full max-w-xs" required />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Deine E-Mail</span>
                </label>
                <input id="email" type="email" placeholder="max.muster@gmail.com" className="input input-bordered w-full max-w-xs" required />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Deine Telefonnummer</span>
                </label>
                <input id="phone" type="text" placeholder="0798000000" className="input input-bordered w-full max-w-xs" required />
              </div>
              <h3 className="font-bold text-lg mt-4">Verfügbare Tage</h3>
              <p className="text-gray-500 text-sm">Wähle alle für dich passenden Tage aus.</p>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Freitag 09.06.2023</span>
                  <input id="freitag" type="checkbox" className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Samstag 10.06.2023</span>
                  <input id="samstag" type="checkbox" className="checkbox" />
                </label>
              </div>
              <h3 className="font-bold text-lg mt-4">Funktionen</h3>
              <p className="text-gray-500 text-sm">Wähle alle für dich passenden Funktionen aus.</p>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Küche</span>
                  <input id="küche" type="checkbox" className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Buffet Ausgabe</span>
                  <input id="buffet" type="checkbox" className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Service / Bedienung</span>
                  <input id="service" type="checkbox" className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Bar</span>
                  <input id="bar" type="checkbox" className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Sonstiges</span>
                  <input id="sonstiges" type="checkbox" className="checkbox" />
                </label>
              </div>
            </form>
            <div className="modal-action" onClick={SendMail}>
              <label htmlFor="my-modal-6" className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Absenden
                </span>
              </label>
            </div>
          </div>
        </div>
      </Container>
      <Container className="flex flex-wrap items-center mt-10 sm:hidden justify-center sm:justify-between lg:flex-nowrap">
        <div className="sm:hidden sm:mt-10 lg:mt-0 lg:grow lg:basis-0 lg:justify-end ">
          <label htmlFor="my-modal-6" className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              ⚠️ Helfer werden ⚠️
            </span>
          </label>
        </div>
      </Container>
    </header>
  )
}

export default Header
