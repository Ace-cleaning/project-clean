"use client"
import Header from '@/components/header'
import ContactForm from '@/components/contact-form'
import Rhf from '@/components/rhf'
import RhfWithZod from '@/components/rhf-with-zod'
import SimpleForm from '@/components/simple'
import RhfWithAction from '@/components/with-action'
import Logoclouds from '@/components/logoclouds'
import Testimonials from '@/components/testimonials'
import Services from '@/components/services'
import Footer from '@/components/footer'

import { useState } from 'react'

import { Bars3Icon, XMarkIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'


const stats = [
  { id: 1, name: 'Effortlessly schedule your cleaning appointments online or by phone.', value: 'Convenient Scheduling and Management', img: '/images/f1.jpg' },
  { id: 2, name: 'We offer a wide range of cleaning services tailored to the specific needs of your commercial establishment.', value: 'Comprehensive Cleaning Services Tailored to Your Needs', img: '/images/f2.jpg' },
  { id: 3, name: 'Our team of experienced and reliable cleaning professionals is committed to providing top-notch service.', value: 'Experienced and Reliable Cleaning Professionals', img: '/images/f3.jpg' },
]

const features = [
  {
    name: 'Commercial Cleaning',
    description:
      'No matter the size of your organization, we offer top-tier cleaning and facilities maintenance services that meet and exceed industry standards.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Specialty',
    description:
      'We provides expert cleaning and facilities maintenance for businesses of all sizes, ensuring a cleaner, healthier, and more productive work environment. Our comprehensive services and commitment to excellence make us the ideal choice for your cleaning and facilities needs.',
    icon: LockClosedIcon,
  },
  {
    name: 'Emergency',
    description:
      'Need urgent help with snow removal or office cleaning? We have got you covered. No matter the situation, rely on our prompt and professional services.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced pro',
    description:
      'Your One-Stop Shop for Expert Cleaning Services. Experience the difference with Advanced Pro, your trusted partner for sparkling clean spaces. ',
    icon: FingerPrintIcon,
  },
]

export default function Home() {
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const myStyle = {
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <>

<div className="bg-white" style={myStyle}>
      <Header/>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
            <p className="mb-4"><b>Serving the Greater New York City Area</b></p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Enhance Your Business with Our Trusted Cleaning & Maintenance.
            </h1>
            <p className="mt-6 text-lg text-gray-600 sh-subtitle">
              <span>Call : (201) 233-2098 </span> 
            {/* Let Us Handle the Cleanliness, You Focus on Success. */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </a>

            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />'
        </div>
      </div>

</div>{/* END Main Div */}

<section className="text-gray-600 body-font mt-10">
  <div className="container px-20 mx-auto">
    <div className="flex flex-wrap -m-5 text-center sh-center">
      <div className="p-4 sm:w-1/5 w-1/2">
        <img src="/images/icon-cd-lg-black.png" alt="" />
      </div>
      <div className="p-4 sm:w-1/5 w-1/2">
        <img src="/images/icon-epa-logo-black.png" alt="" />
      </div>
      <div className="p-4 sm:w-1/5 w-1/2">
        <img src="/images/icon-issa-1.jpg" alt="" />
      </div>
      <div className="p-4 sm:w-1/5 w-1/2">
        <img src="/images/icon-osha-black.png" alt="" />
      </div>
      <div className="p-4 sm:w-1/5 w-1/2">
        <img src="/images/icon-site-seal-platinum-old-black.png" alt="" />
      </div>
    </div>
  </div>
</section>


{/* How We Work */}
<div className="bg-white sh-featurestop">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Ace Cleaning & Maintenance</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serving the Greater New York City Area
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                
              </p>
            </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <img src={stat.img} />
              <div className="text-lg font-semibold tracking-tight text-gray-900 sm:text-lg">
                {stat.value}
              </div>
              <div className="sh-features text-gray-600">{stat.name}</div>
            </div>
          ))}
        </dl>
      </div>
      <p className="mt-10 mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Call : (201) 233-2098</p>
    </div>
<hr/>
{/* Features */}
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Featured</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Highlighted Our Services
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <section>
      <Services />
    </section>


    <section>
      <Testimonials />
    </section>



      
      <section className='py-24 bg-gray-100'>
        <div className='container mx-auto  lg:text-center'>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Ace C&M</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
              </p>
              <p className="mt-6  text-center text-sm leading-8 text-gray-600 sh-contact">
              Contact Ace C&M today to learn more about our services and how we can help you maintain a clean, safe, and functional property. 
              </p><br/>
        <ContactForm />
      </div>
      </section>

      <section>
      <Logoclouds />
    </section>

    <section>
      <Footer />
    </section>

    </>
)}
