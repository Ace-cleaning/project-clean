
import Header from '@/components/header'
import Footer from '@/components/footer'


export default function About() {
  return (
    <>
    <Header />
    <section className="py-24 text-gray-600 body-font bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mt-10 mb-10">
      <h2 className="text-base font-semibold leading-7 text-center text-indigo-600">Ace C&M</h2>
              <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
              </p>

        <p className="mt-5 mb-5 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        <b>Your Comprehensive Cleaning Solution for New York City and Beyond</b>
        </p>
        <p className="text-base leading-relaxed lg:w-3/4 mx-auto">
        Ace C&M is a full-service cleaning company dedicated to providing exceptional cleaning services to a wide range of industries across New York City and surrounding areas. Our team of highly trained and experienced professionals is equipped to handle any cleaning challenge, from routine janitorial services to specialized cleanings for healthcare facilities. We are committed to exceeding our clients' expectations with every service we provide.
        </p>
      </div>
      <div>
      <h3 className="sm:text-2xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
    Why Choose Ace C&M?
        </h3>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium">
            Experienced and Reliable Professionals
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium">
            Tailored Cleaning Solutions
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium">
            State-of-the-Art Equipment and Products
            </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="title-font font-medium">
            Commitment to Safety
            </span>
          </div>
        </div>

      </div>
    </div>


    <div className="container px-5 mx-auto mt-10">
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img
                className="mx-auto  rounded-full"
                src="images/f5.jpg"
                alt=""
              />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Unwavering Accountability
          </h2>
          <p className="leading-relaxed text-base">
          We take full ownership of our work and are committed to meeting our clients' needs with the utmost professionalism and integrity.
          </p>
          <a href="/contact" className="mt-3 text-indigo-500 inline-flex items-center">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Unwavering Commitment
          </h2>
          <p className="leading-relaxed text-base">
          We are passionate about providing exceptional cleaning services and are dedicated to exceeding expectations every step of the way.
          </p>
          <a href="/contact" className="mt-3 text-indigo-500 inline-flex items-center">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img
                className="mx-auto  rounded-full"
                src="images/f6.jpg"
                alt=""
              />
        </div>
      </div>
      <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img
                className="mx-auto  rounded-full"
                src="images/f4.jpg"
                alt=""
              />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Unwavering Reliability
          </h2>
          <p className="leading-relaxed text-base">
          You can count on us to deliver consistent, high-quality cleaning services on time and within budget, ensuring your peace of mind.
          </p>
          <a href="/contact" className="mt-3 text-indigo-500 inline-flex items-center">
            Contact Us
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <p className="mt-20 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Call : (201) 233-2098</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </a>

            </div>
    </div>



  </section>
  



    <Footer />
    </>
  )
}
