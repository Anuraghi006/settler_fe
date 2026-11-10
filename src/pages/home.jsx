import { Link } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'
import {
  LuBus,
  LuCalendarDays,
  LuFileText,
  LuHeartPulse,
  LuHouse,
  LuShieldCheck,
  LuShoppingBasket,
  LuUsers,
  LuWrench,
} from 'react-icons/lu'

const features = [
  { icon: LuHeartPulse, title: 'Emergencies and Healthcare', text: 'Find hospitals, clinics, and 24-hour pharmacies nearby, with one-tap calling.' },
  { icon: LuWrench, title: 'Trusted Service Providers', text: 'Book verified plumbers, electricians, and mechanics at fair, published prices.' },
  { icon: LuBus, title: 'Getting Around', text: 'Bus, metro, and train routes, typical fares, and commute time estimates.' },
  { icon: LuShoppingBasket, title: 'Daily Essentials', text: 'Supermarkets, vegetable markets, and specialty shops, with reviews from residents.' },
  { icon: LuFileText, title: 'Paperwork and Utilities', text: 'Step-by-step guides for residence proof, licenses, and utility connections.' },
  { icon: LuHouse, title: 'Neighborhoods and Safety', text: 'Area profiles covering rent, connectivity, and safety from people who live there.' },
  { icon: LuCalendarDays, title: 'Community', text: 'Meetups, clubs, cultural events, and volunteer opportunities near you.' },
  { icon: LuUsers, title: 'Families and Pets', text: 'Schools, child care, senior care, veterinarians, and pet services.' },
]

const steps = [
  { number: '1', title: 'Create your account', text: 'Sign up with email or Google in under a minute.' },
  { number: '2', title: 'Explore your city', text: 'Search the directories and build your settling-in checklist.' },
  { number: '3', title: 'Ask and help', text: 'Ask questions, and as a verified resident, answer them and earn points.' },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center">
          <span className="inline-block rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-sm text-brand-400">
            For people new to a city
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Settle into your new city
            <span className="block text-brand-400">with confidence</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Settler answers the everyday questions every newcomer faces: where the hospital is,
            who to call when the sink breaks, and how to get your papers in order.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                Get started free
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" color="gray" className="border-slate-700">
                I already have an account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">Everything you need in one place</h2>
          <p className="mt-3 text-slate-400">
            Eight areas, one trusted platform built around local residents.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-800 bg-slate-900">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600/15 text-brand-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-slate-400">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold text-white">How it works</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust callout */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <LuShieldCheck className="mx-auto h-10 w-10 text-emerald-400" />
        <h2 className="mt-4 text-3xl font-bold text-white">Verified people, verified places</h2>
        <p className="mt-3 text-slate-400">
          Providers are checked by our admins before they appear in the directory, and residents
          confirm their address before they can answer questions.
        </p>
      </section>

      {/* Final call to action */}
      <section className="mx-auto max-w-4xl px-4 pb-24">
        <div className="rounded-2xl bg-linear-to-r from-brand-700 to-brand-500 p-10 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to feel at home?</h2>
          <p className="mt-3 text-brand-100">Create your free account and start exploring today.</p>
          <Link to="/register" className="mt-8 inline-block">
            <Button size="lg" color="light">
              Create an account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home