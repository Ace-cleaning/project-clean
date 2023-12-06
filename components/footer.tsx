export default function Footer() {
    return (
<footer className=" bg-gray-100 dark:bg-gray-900">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="./"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="images/logo.png"
          className="sh-footerlogo"
          alt="ACE C&M"
        />
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="./" className="hover:underline me-4 md:me-6">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline me-4 md:me-6">
          About Us
          </a>
        </li>
        <li>
          <a href="/services" className="hover:underline me-4 md:me-6">
          Services
          </a>
        </li>
        <li>
          <a href="contact" className="hover:underline">
          Contact Us
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="#" className="hover:underline">
        Ace Cleaning & Maintenance
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

    )
}