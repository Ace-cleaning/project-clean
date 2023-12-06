/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: 'Building Cleaning and Maintenance',
    description: 'Keep your building sparkling clean and well-maintained with our professional services.',
    imageSrc: 'images/s1.jpg',
    imageAlt: 'Keep your building sparkling clean and well-maintained with our professional services.',
    href: '#',
  },
  {
    name: 'Supermarket Cleaning and Maintenance',
    description: 'Maintain a hygienic and inviting environment for your customers with our supermarket cleaning services.',
    imageSrc: 'images/s2.jpg',
    imageAlt: 'Maintain a hygienic and inviting environment for your customers with our supermarket cleaning services.',
    href: '#',
  },
  {
    name: 'Retail Cleaning',
    description: 'Create a welcoming and pleasant shopping experience for your customers with our retail cleaning services.',
    imageSrc: 'images/s3.jpg',
    imageAlt: 'Create a welcoming and pleasant shopping experience for your customers with our retail cleaning services.',
    href: '#',
  },
  {
    name: 'Law Office & Professional Cleanings',
    description: 'Project a professional image and ensure a healthy work environment with our law office and professional cleaning services.',
    imageSrc: 'images/s4.jpg',
    imageAlt: 'Project a professional image and ensure a healthy work environment with our law office and professional cleaning services.',
    href: '#',
  },
  {
    name: 'Carpet Cleaning & Maintenance',
    description: 'Extend the life of your carpets and keep them looking their best with our carpet cleaning and maintenance services.',
    imageSrc: 'images/s5.jpg',
    imageAlt: 'Extend the life of your carpets and keep them looking their best with our carpet cleaning and maintenance services.',
    href: '#',
  },
  {
    name: 'Window Cleaning',
    description: 'Let in an abundance of natural light and enjoy sparkling clean windows with our professional window cleaning services.',
    imageSrc: 'images/s6.jpg',
    imageAlt: 'Let in an abundance of natural light and enjoy sparkling clean windows with our professional window cleaning services.',
    href: '#',
  },
  {
    name: 'Schools Daycare Cleaning',
    description: 'Provide a safe and healthy learning environment for children with our school and daycare cleaning services.',
    imageSrc: 'images/s7.jpg',
    imageAlt: 'Provide a safe and healthy learning environment for children with our school and daycare cleaning services.',
    href: '#',
  },
  {
    name: 'Church Cleaning Service',
    description: 'Maintain a clean and welcoming place of worship with our church cleaning services.',
    imageSrc: 'images/s8.jpg',
    imageAlt: 'Maintain a clean and welcoming place of worship with our church cleaning services.',
    href: '#',
  },
  {
    name: 'Snow Removal',
    description: 'Ensure safe and accessible walkways and parking areas during the winter months with our snow removal services.',
    imageSrc: 'images/s9.jpg',
    imageAlt: 'Ensure safe and accessible walkways and parking areas during the winter months with our snow removal services.',
    href: '#',
  },
]

export default function Services() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-base font-semibold leading-7 text-center text-indigo-600">Ace C&M</h2>
              <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Commercial Cleaning Services
              </p>
              <br/>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative sh-services">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-gray-500 v">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base  text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
