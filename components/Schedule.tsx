import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import Container from './Container'
import { pb } from '../lib/pocketbase'
import { ListResult } from 'pocketbase'
import { ScheduleInterface } from '../lib/interfaces'

interface DaysInterface {
  date: string
  dateTime: string
  summary: string
  timeSlots: ScheduleInterface[]
}

// const schedule = [
//   {
//     date: '09. Juni',
//     dateTime: '2023-06-09',
//     summary:
//       'Der erste Tag besteht aus einem spannenden Abendprogramm.',
//     timeSlots: [
//       {
//         name: 'Abends',
//         description: 'Marschparade mehrerer Jugendmusiken aus der Region',
//         start: '18:00',
//         end: '20:00',
//       },
//       {
//         name: 'Abends Festzelt',
//         description: 'Disco, Festwirtschaft und Barbetrieb',
//         start: '20:00',
//         end: '23:00',
//       }
//     ],
//   },
//   {
//     date: '10. Juni',
//     dateTime: '2023-06-10',
//     summary:
//       'Der zweite Tag besteht aus einem ganztägigen Programm.',
//     timeSlots: [
//       {
//         name: 'Vormittag',
//         description: 'Empfang der Musikgesellschaften auf dem Festgelände Mehrzweckplatz, Konzertvorträge im Kirchgemeindehaus Konolfingen, Unterhaltungskonzerte im Festzelt Mehrzweckplatz',
//         start: '08:00',
//         end: '12:00',
//       },
//       {
//         name: 'Nachmittag',
//         description: 'Konzertvorträge im Kirchgemeindehaus Konolfingen, Unterhaltungskonzerte im Festzelt Mehrzweckplatz',
//         start: '12:00',
//         end: '16:00',
//       },
//       {
//         name: 'Vorabend',
//         description: 'Maschmusik-Parade mit anschliessendem Gesamtchor',
//         start: '16:00',
//         end: '18:00',
//       },
//       {
//         name: 'Abend',
//         description: 'Unterhaltung mit der Blaskapelle "Echt Bähmisch" Festwirtschaft und Barbetrieb im Festzelt Mehrzweckplatz',
//         start: '18:00',
//         end: '23:00',
//       }
//     ],
//   },
// ]

function ScheduleTabbed({ schedule }: { schedule: DaysInterface[] }) {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {/* @ts-ignore */}
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }} />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }: any) {
  return (
    <>
      <h3 className="sm:text-2xl font-semibold tracking-tight text-red-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-gray-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: any) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-red-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot: ScheduleInterface, timeSlotIndex: any) => {
        const startDate = new Date(timeSlot.start_datetime)
        const endDate = new Date(timeSlot.end_datetime)
        // only hh:mm without seconds
        const timeStringStart = startDate.toUTCString().slice(17, 22);
        const timeStringEnd = endDate.toUTCString().slice(17, 22);
        return (
          <li
            key={timeSlot.collectionId}
            aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
          >
            {timeSlotIndex > 0 && (
              <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
            )}
            <h4 className="text-lg font-semibold tracking-tight text-red-900">
              {timeSlot.name}
            </h4>
            {timeSlot.description && (
              <p className="mt-1 tracking-tight text-gray-900">
                {timeSlot.description}
              </p>
            )}
            <p className="mt-1 font-mono text-sm text-slate-500">
              <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
                { timeStringStart }
              </time>{' '}
              -{' '}
              <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
                { timeStringEnd }
              </time>{' '}
            </p>
          </li>
        )
      })}

    </ol>
  )
}

function ScheduleStatic({ schedule }: { schedule: DaysInterface[] }) {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      {schedule.map((day: any) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

const Schedule = () => {
  const [schedule, setSchedule] = useState<DaysInterface[]>([
    {
      date: '09. Juni',
      dateTime: '2023-06-09',
      summary: 'Der erste Tag besteht aus einem spannenden Abendprogramm.',
      timeSlots: []
    },
    {
      date: '10. Juni',
      dateTime: '2023-06-10',
      summary: 'Der zweite Tag besteht aus einem ganztägigen Programm.',
      timeSlots: []
    }
  ])

  useEffect(() => {
    (
      async () => {
        await pb.collection('schedules').getList(1, 50, {
        }).then((res: ListResult) => {
          // @ts-ignore
          let tempSchedules: ScheduleInterface[] = res.items
          // add each musikgesellschaft to the correct day
          if (tempSchedules.length > 0) {
            tempSchedules.forEach((schedule: ScheduleInterface) => {
              let dayString = schedule.start_datetime.toString()
              // if musikgesellschaft.start_datetime contains the string "2023-06-09"
              if ((dayString.indexOf('2023-06-09') > -1)) {
                // add musikgesellschaft to the first day
                setSchedule((prevSchedule) => {
                  let newDays = [...prevSchedule]
                  newDays[0].timeSlots.push(schedule)
                  return newDays
                })
              } else {
                // add musikgesellschaft to the second day
                setSchedule((prevSchedule) => {
                  let newDays = [...prevSchedule]
                  newDays[1].timeSlots.push(schedule)
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

  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-6xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl">
            Unser zweitägiger Zeitplan ist prall gefüllt mit talentierten, kreativen und beeindruckenden Köpfen aus der Blasmusikszene.
          </h2>
          <p className="mt-4 font-display sm:text-2xl tracking-tight text-gray-900">
            Unser Programm bietet Konzerte, Auftritte und mitreissende Marschmusik-Präsentationen, sowie eine Disco und Barbetrieb. Zusätzlich gibt es eine Festwirtschaft mit kulinarischen Köstlichkeiten und erfrischenden Getränken.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-red-50">
          {/* <img
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={'/images/background.jpg'}
            alt=""
            width={918}
            height={1495}
          /> */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed schedule={schedule} />
          <ScheduleStatic schedule={schedule} />
        </Container>
      </div>
    </section>
  )
}

export default Schedule
