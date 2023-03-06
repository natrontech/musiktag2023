import { ListResult } from 'pocketbase'
import { useEffect, useState } from 'react'
import { classNames } from '../lib/design'
import { SponsorInterface } from '../lib/interfaces'
import { parseImageUrl } from '../lib/parser'
import { pb } from '../lib/pocketbase'
import Container from './Container'

const Sponsors = () => {
  const [sponsors, setSponsors] = useState<SponsorInterface[]>([])


  useEffect(() => {
    (
      async () => {
        await pb.collection('sponsors').getList(1, 50, {
        }).then((res: ListResult) => {
          // @ts-ignore
          let tempSponsors: SponsorInterface[] = res.items
          // sort sponsors by type (gold, silber, bronze, supporter, lieferanten, medien, raumsponsor)
          tempSponsors.sort((a, b) => {
            const types = ['gold', 'silber', 'bronze', 'supporter', 'lieferanten', 'medien', 'raumsponsor']
            return types.indexOf(a.type) - types.indexOf(b.type)
          })
          setSponsors(tempSponsors)
        }).catch((err) => {
          console.log(err)
        })
      }
    )()
  }, [])

  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-gray-900 sm:text-5xl">
          Die Partner des Anlasses
        </h2>
        {
          // for each type of sponsor (gold, silber, bronze, supporter, lieferanten, medien, raumsponsor)
          ['gold', 'silber', 'bronze', 'supporter', 'lieferanten', 'medien', 'raumsponsor'].map((type) => {
            // filter sponsors by type
            const filteredSponsors = sponsors.filter((sponsor) => sponsor.type === type)
            return (
              <div key={type} className="mt-10">
                <h3 className={
                  classNames(
                    'text-center',
                    'font-display',
                    'font-medium',
                    'tracking-tighter',
                    'text-gray-900',
                    'sm:mt-4',
                    type == 'gold' ? 'text-yellow-500 text-5xl' : '',
                    type == 'silber' ? 'text-gray-400 text-4xl' : '',
                    type == 'bronze' ? 'text-orange-500 text-3xl' : '',
                    type == 'supporter' ? 'text-gray-500 text-xl' : '',
                    type == 'lieferanten' ? 'text-gray-500 text-xl' : '',
                    type == 'medien' ? 'text-gray-500 text-xl' : '',
                    type == 'raumsponsor' ? 'text-gray-500 text-xl' : '',
                  )
                }>
                  {type === 'gold' && 'Gold'}
                  {type === 'silber' && 'Silber'}
                  {type === 'bronze' && 'Bronze'}
                  {type === 'supporter' && 'Unterstützer'}
                  {type === 'lieferanten' && 'Lieferanten'}
                  {type === 'medien' && 'Medien'}
                  {type === 'raumsponsor' && 'Raumsponsor'}
                </h3>
                  {
                    filteredSponsors.length === 0 && (
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-center text-gray-500">
                          Noch keine Partner
                        </p>
                      </div>
                    )
                  }
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {
                    // for each sponsor
                    filteredSponsors.map((sponsor) => {
                      return (
                        <div key={sponsor.id} className={classNames(
                          "flex flex-col items-center justify-center",
                          sponsor.type == 'gold' ? 'h-48' : '',
                          sponsor.type == 'silber' ? 'h-32' : '',
                          sponsor.type == 'bronze' ? 'h-24' : '',
                          sponsor.type == 'supporter' ? 'h-16' : '',
                          sponsor.type == 'lieferanten' ? 'h-16' : '',
                          sponsor.type == 'medien' ? 'h-16' : '',
                          sponsor.type == 'raumsponsor' ? 'h-16' : '',
                        )}>
                          <a href={sponsor.url} target="_blank" rel="noreferrer">
                            <img
                              className={classNames(
                                'w-auto',
                                'object-contain',
                                'object-center',
                                'mx-auto',
                                'rounded',
                                'transition-shadow',
                                'duration-200',
                                'ease-in-out',
                                sponsor.type == 'gold' ? 'h-48' : '',
                                sponsor.type == 'silber' ? 'h-32' : '',
                                sponsor.type == 'bronze' ? 'h-24' : '',
                                sponsor.type == 'supporter' ? 'h-16' : '',
                                sponsor.type == 'lieferanten' ? 'h-16' : '',
                                sponsor.type == 'medien' ? 'h-16' : '',
                                sponsor.type == 'raumsponsor' ? 'h-16' : '',
                              )}
                              src={parseImageUrl(sponsor)}
                              alt={sponsor.name}
                            />
                          </a>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </Container>
    </section>
  )
}

export default Sponsors
