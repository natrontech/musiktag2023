import { useEffect, useId, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import Container from './Container'
import { DiamondIcon } from './DiamondIcon'
import { MusikgesellschaftInterface } from '../lib/interfaces'
import { ListResult } from 'pocketbase'
import { pb } from '../lib/pocketbase'
import { parseImageUrl } from '../lib/parser'

interface DaysInterface {
  name: string
  date: string
  dateTime: string
  speakers: MusikgesellschaftInterface[]
}

function ImageClipPaths({ id, ...props }: any) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

const Musikgesellschaften = () => {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  const [days, setDays] = useState<DaysInterface[]>([
    {
      name: 'Abends',
      date: '09. Juni',
      dateTime: '2022-06-09',
      speakers: []
    },
    {
      name: 'Ganztägig',
      date: '10. Juni',
      dateTime: '2022-06-10',
      speakers: []
    }
  ])

  useEffect(() => {
    (
      async () => {
        await pb.collection('musikgesellschaften').getList(1, 50, {
        }).then((res: ListResult) => {
          // @ts-ignore
          let tempMusikgesellschaften: MusikgesellschaftInterface[] = res.items
          // add each musikgesellschaft to the correct day
          if (tempMusikgesellschaften.length > 0) {
            tempMusikgesellschaften.forEach((musikgesellschaft: MusikgesellschaftInterface) => {
              let dayString = musikgesellschaft.start_datetime.toString()
              // if musikgesellschaft.start_datetime contains the string "2023-06-09"
              if ((dayString.indexOf('2023-06-09') > -1)) {
                // add musikgesellschaft to the first day
                setDays((prevDays) => {
                  let newDays = [...prevDays]
                  newDays[0].speakers.push(musikgesellschaft)
                  return newDays
                })
              } else {
                // add musikgesellschaft to the second day
                setDays((prevDays) => {
                  let newDays = [...prevDays]
                  newDays[1].speakers.push(musikgesellschaft)
                  return newDays
                })
              }
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    )()
  }, [])

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl"
          >
            Musikgesellschaften
          </h2>
          <p className="mt-4 font-display sm:text-2xl tracking-tight text-gray-900">
            Beim Amtsmusiktag 2023 werden zahlreiche Musikgesellschaften aus der Region vertreten sein.
            Wir sind stolz darauf, dass so viele musikalische Vereine sich an diesem Tag zusammenfinden und ihr Bestes geben werden.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {/* @ts-ignore */}
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                        dayIndex === selectedIndex
                          ? 'fill-red-600 stroke-red-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-red-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[focus:outline-none focus:none">
                          <span className="absolute inset-0" />
                          {day.name}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="mt-1.5 block sm:text-2xl font-semibold tracking-tight text-red-900"
                      >
                        {day.date}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid focus:none grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 focus:outline-none"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-red-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <img
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={parseImageUrl(speaker)}
                          alt=""
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.description}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}

export default Musikgesellschaften
