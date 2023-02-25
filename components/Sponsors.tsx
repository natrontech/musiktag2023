import { ListResult } from 'pocketbase'
import { useEffect, useState } from 'react'
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
          console.log(tempSponsors)
          // sort sponsors by type, GOLD first, then SILVER, then BRONZE, then NONE
          tempSponsors.sort((a,b) => {
            const typeOrder: any = { gold: 1, silver: 2, bronze: 3, none: 4 }
            return typeOrder[a.type] - typeOrder[b.type];
          })
          console.log(tempSponsors)
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
          Die Sponsoren des Anlasses
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor: SponsorInterface) => (
            <a
              key={sponsor.name}
              className="flex items-center justify-center"
              href={sponsor.url}
              target="_blank"
              rel="noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={parseImageUrl(sponsor)} alt={sponsor.name} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Sponsors
