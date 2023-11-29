import Rhf from '@/components/rhf'
import RhfWithZod from '@/components/rhf-with-zod'
import SimpleForm from '@/components/simple'
import RhfWithAction from '@/components/with-action'

export default function Home() {
  return (
    <>
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-16 text-2xl font-medium'>React Hook Forms</h1>
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        {/* <RhfWithZod /> */}
        <RhfWithAction />
      </div>
    </section>
    <>
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta httpEquiv="x-ua-compatible" content="IE=edge" />
  <meta name="author" content="SemiColonWeb" />
  <meta
    name="description"
    content="Create Cleaner Rental Websites with Canvas Template. Get Canvas to build powerful websites easily with the Highly Customizable & Best Selling Bootstrap Template, today."
  />
  {/* Font Imports */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="http://fonts.googleapis.com/css?family=Heebo:400,500,700"
    rel="stylesheet"
  />
  {/* Core Style */}
  <link rel="stylesheet" href="/public/css/style.css" />
  {/* Font Icons */}
  <link rel="stylesheet" href="/public/css/font-icons.css" />
  {/* Plugins/Components CSS */}
  <link rel="stylesheet" href="/public/css/components/daterangepicker.css" />
  {/* DatePicker CSS */}
  <link rel="stylesheet" href="/public/css/components/ion.rangeslider.css" />
  {/* Range Slider CSS */}
  {/* Niche Demos */}
  <link rel="stylesheet" href="/public/css/cleaner.css" />{" "}
  {/* Cleaner Theme Custom CSS */}
  {/* Custom CSS */}
  <link rel="stylesheet" href="/public/css/custom.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Document Title
	============================================= */}
  <title>Cleaner | Canvas</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n\t\t.form-group > label.error {\n\t\t\tdisplay: block !important;\n\t\t\ttext-transform: none;\n\t\t}\n\n\t\t.form-group input.valid ~ label.error,\n\t\t.form-group input[type="text"] ~ label.error,\n\t\t.form-group input[type="email"] ~ label.error,\n\t\t.form-group input[type="number"] ~ label.error,\n\t\t.form-group select ~ label.error { display: none !important; }\n\t'
    }}
  />
  {/* Document Wrapper
	============================================= */}
  <div id="wrapper">
    {/* Header
		============================================= */}
    <header
      id="header"
      className="full-header header-size-md border-0"
      data-sticky-shrink="false"
    >
      <div id="header-wrap">
        <div className="container-fluid pe-0">
          <div className="header-row">
            {/* Logo
						============================================= */}
            <div id="logo" className="col col-sm-auto">
              <a href="demo-cleaner.html">
                <img
                  className="logo-default"
                  srcSet="/public/images/logo.png, /public/images/logo@2x.png 2x"
                  src="/public/images/logo@2x.png"
                  alt="Canvas Logo"
                />
              </a>
            </div>
            {/* #logo end */}
            <div className="primary-menu-trigger">
              <button
                className="cnvs-hamburger"
                type="button"
                title="Open Mobile Menu"
              >
                <span className="cnvs-hamburger-box">
                  <span className="cnvs-hamburger-inner" />
                </span>
              </button>
            </div>
            <div className="header-misc">
              <a
                href="#section-price"
                data-scrollto="#section-price"
                data-offset={60}
                className="button button-light text-dark fw-semibold ls-1 text-uppercase fw-bold"
              >
                <i className="bi-currency-dollar me-1" />
                Cost Calculate
              </a>
            </div>
            {/* Primary Navigation
						============================================= */}
            <nav className="primary-menu">
              <ul className="menu-container border-end-0 me-0">
                <li className="menu-item active">
                  <a className="menu-link ls-1 text-uppercase fw-bold" href="#">
                    <div>Home</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link ls-1 text-uppercase fw-bold" href="#">
                    <div>About Us</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link ls-1 text-uppercase fw-bold" href="#">
                    <div>Services</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link ls-1 text-uppercase fw-bold" href="#">
                    <div>FAQs</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link ls-1 text-uppercase fw-bold" href="#">
                    <div>Contact</div>
                  </a>
                </li>
              </ul>
            </nav>
            {/* #primary-menu end */}
          </div>
        </div>
      </div>
      <div className="header-wrap-clone" />
    </header>
    {/* #header end */}
    {/* Slider
		============================================= */}
    <section
      id="slider"
      className="slider-element"
      style={{
        background:
          'url("demos/cleaner/images/hero.jpg") center center no-repeat',
        backgroundSize: "cover",
        height: 700
      }}
    >
      <div className="vertical-middle">
        <div className="container">
          <div className="row py-5">
            <div className="col-xl-6 col-lg-5 col-md-2" />
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="slider-title dark">
                <h1 className="">
                  Busy in Work Life? Don't have Enough Time for Cleaning?
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium similique consequuntur velit explicabo inventore
                  sit totam voluptate dolorum.
                </p>
              </div>
              <div
                className="card border-0 p-3 shadow-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
              >
                <div className="form-widget card-body" data-alert-type="inline">
                  <div className="form-result" />
                  <form
                    id="form-cleaning"
                    name="form-cleaning"
                    action="include/form.php"
                    method="post"
                    className="row form-cleaning mb-0"
                  >
                    <div className="form-process">
                      <div
                        className="form-cleaning-loader css3-spinner"
                        style={{ position: "absolute" }}
                      >
                        <div className="css3-spinner-double-bounce1" />
                        <div className="css3-spinner-double-bounce2" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group form-group">
                        <span className="input-group-text bg-color text-white">
                          <img
                            src="/public/images/icons/cleaner2.svg"
                            alt=""
                            width={20}
                          />
                        </span>
                        <select
                          className="required form-select"
                          name="form-cleaning-service"
                          id="form-cleaning-service"
                        >
                          <option value="" disabled="" selected="">
                            -- Select Your Service --
                          </option>
                          <option value="Home Cleaning">Home Cleaning</option>
                          <option value="Office Cleaning">
                            Office Cleaning
                          </option>
                          <option value="Window Cleaning">
                            Window Cleaning
                          </option>
                          <option value="Garden Maintenance">
                            Garden Maintenance
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group form-group">
                        <span className="input-group-text bg-color text-white">
                          <i className="bi-map" />
                        </span>
                        <input
                          type="text"
                          name="form-cleaning-location"
                          id="form-cleaning-location"
                          className="form-control required"
                          defaultValue=""
                          placeholder="Location"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group form-group">
                        <span className="input-group-text bg-color text-white">
                          <i className="bi-calendar-week" />
                        </span>
                        <input
                          type="text"
                          className="form-control cleaning-date datetimepicker-input required"
                          name="form-cleaning-date-&-time"
                          id="form-cleaning-date"
                          defaultValue="Select your Date & Time"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group input-group">
                        <span className="input-group-text bg-color text-white">
                          <i className="bi-layers" />
                        </span>
                        <input
                          type="number"
                          name="form-cleaning-area"
                          min={200}
                          id="form-cleaning-area"
                          className="form-control required"
                          defaultValue=""
                          placeholder="Area (sqft.)"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group form-group">
                        <span className="input-group-text bg-color text-white">
                          <i className="bi-envelope-paper" />
                        </span>
                        <input
                          type="email"
                          name="form-cleaning-email"
                          id="form-cleaning-email"
                          className="form-control required"
                          defaultValue=""
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group form-group">
                        <span className="input-group-text bg-color text-white">
                          <i className="bi-telephone-outbound" />
                        </span>
                        <input
                          type="text"
                          name="form-cleaning-phone"
                          id="form-cleaning-phone"
                          className="form-control required"
                          defaultValue=""
                          placeholder="Contact Number"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="d-none"
                      id="form-cleaning-botcheck"
                      name="form-cleaning-botcheck"
                      defaultValue=""
                    />
                    <input
                      type="hidden"
                      name="prefix"
                      defaultValue="form-cleaning-"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      defaultValue="Cleaning Request"
                    />
                    <input
                      type="hidden"
                      name="html_title"
                      defaultValue="Cleaning"
                    />
                    <div className="col-12">
                      <button
                        type="submit"
                        name="form-cleaning-submit"
                        className="btn btn-lg bg-color text-white fw-semibold w-100 mt-2"
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="svg-separator">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2273 390"
            fill="#FFF"
          >
            <path d="M0,211.28s373-254,1119-205,765,173,1154,0v384H0Z" />
          </svg>
        </div>
      </div>
    </section>
    {/* Content
		============================================= */}
    <section id="content">
      <div className="content-wrap pt-4 pb-0">
        <div className="container">
          <div
            className="heading-block text-center mx-auto"
            style={{ maxWidth: 700 }}
          >
            <h2 className="mb-2 text-transform-none ls-0">How We Work</h2>
            <span>
              Objectively actualize process-centric infomediaries via ethical
              niche markets. Professionally plagiarize leading-edge
              potentialities.
            </span>
          </div>
          <div className="row justify-content-center col-mb-50">
            <div className="col-md-4">
              <div className="feature-box mx-0 fbox-small fbox-center border-0">
                <div className="fbox-img position-relative">
                  <img
                    src="demos/cleaner/images/icons/book.svg"
                    alt="Book Icon"
                    height={160}
                  />
                </div>
                <h2 className="mt-4 h5 mb-3 text-transform-none fw-semibold ls-0">
                  <span>1.</span> Book your Cleaner &amp; Time
                </h2>
                <p>
                  Seamlessly e-enable value-added deliverables and progressive
                  models. Enthusiastically whiteboard fully tested channels.
                </p>
                <a href="#" className="btn second-bg-color px-3 fw-semibold">
                  Get Started <i className="bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box mx-0 fbox-small fbox-center border-0">
                <div className="fbox-img position-relative">
                  <img
                    src="demos/cleaner/images/icons/confirm3.svg"
                    alt="Confirm Icon"
                    height={160}
                  />
                </div>
                <h2 className="mt-4 h5 mb-3 text-transform-none fw-semibold ls-0">
                  <span>2.</span> Confirm Your Booking
                </h2>
                <p>
                  Credibly enable market positioning resources after
                  principle-centered customer service. Competently negotiate
                  interdependent.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box mx-0 fbox-small fbox-center border-0">
                <div className="fbox-img position-relative">
                  <img
                    src="demos/cleaner/images/icons/enjoy.svg"
                    alt="Relax Icon"
                    height={160}
                  />
                </div>
                <h2 className="mt-4 h5 mb-3 text-transform-none fw-semibold ls-0">
                  <span>3.</span> Relax &amp; Enjoy
                </h2>
                <p>
                  Quickly disintermediate multidisciplinary relationships via
                  functional e-tailers. Collaboratively grow cutting-edge
                  information without.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div
          className="text-center dark hero-diagonal mt-6 mb-6"
          style={{ padding: "170px 0" }}
        >
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 className="mb-4 h1 fw-normal">
              We make your Home Shine and Sparkle
            </h2>
            <span className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              mollitia, quam modi necessitatibus placeat dolores laudantium.
              Laudantium, eveniet, possimus.
            </span>
          </div>
        </div>
        <div className="clear" />
        <div className="container mt-5 mb-6">
          <div
            className="heading-block text-center mx-auto"
            style={{ maxWidth: 700 }}
          >
            <h2 className="mb-2 text-transform-none ls-0">
              Why You Choose Us?
            </h2>
            <span>
              Authoritatively create performance based web services for
              exceptional products. Dynamically disseminate customized.
            </span>
          </div>
          <div className="clear" />
          <div className="row col-mb-50 mt-3">
            <div className="col-lg-4 text-center order-lg-last">
              <img
                src="demos/cleaner/images/cleaner-icon.svg"
                alt="Cleaner"
                width={340}
              />
              <small className="d-block tright">
                <a href="http://www.freepik.com" style={{ color: "#DDD" }}>
                  Designed by macrovector / Freepik
                </a>
              </small>
            </div>
            <div className="col-lg-4 col-md-6 pb-0">
              <div className="feature-box fbox-plain mb-5">
                <div className="fbox-icon">
                  <img
                    src="demos/cleaner/images/icons/cleaner-man.svg"
                    alt="Cleaner Icon"
                  />
                </div>
                <div className="fbox-content">
                  <h3 className="text-transform-none fw-semibold ls-0">
                    100% Trusted Cleaners
                  </h3>
                  <p>
                    Stretch your Website to the Full Width or make it boxed to
                    surprise your visitors.
                  </p>
                </div>
              </div>
              <div className="feature-box fbox-plain mb-5">
                <div className="fbox-icon">
                  <img
                    src="demos/cleaner/images/icons/cleaning-man.svg"
                    alt="Cleaner Icon"
                  />
                </div>
                <div className="fbox-content">
                  <h3 className="text-transform-none fw-semibold ls-0">
                    820+ Over Cleaners
                  </h3>
                  <p>
                    We have covered each &amp; everything in our Docs including
                    Videos &amp; Screenshots.
                  </p>
                </div>
              </div>
              <div className="feature-box fbox-plain mb-5">
                <div className="fbox-icon">
                  <img
                    src="demos/cleaner/images/icons/guarantee.svg"
                    alt="Cleaner Icon"
                  />
                </div>
                <div className="fbox-content">
                  <h3 className="text-transform-none fw-semibold ls-0">
                    Satisfaction Guarantee
                  </h3>
                  <p>
                    Display your Content attractively using Parallax Sections
                    with HTML5 Videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box fbox-plain mb-5">
                <div className="fbox-icon">
                  <img
                    src="demos/cleaner/images/icons/product.svg"
                    alt="Cleaner Icon"
                  />
                </div>
                <div className="fbox-content">
                  <h3 className="text-transform-none fw-semibold ls-0">
                    Eco-Friendly Products
                  </h3>
                  <p>
                    Canvas provides support for Native HTML5 Videos that can be
                    added to a Background.
                  </p>
                </div>
              </div>
              <div className="feature-box fbox-plain mb-5">
                <div className="fbox-icon">
                  <img
                    src="demos/cleaner/images/icons/time.svg"
                    alt="Cleaner Icon"
                  />
                </div>
                <div className="fbox-content">
                  <h3 className="text-transform-none fw-semibold ls-0">
                    Saves Your Time
                  </h3>
                  <p>
                    Complete control on each &amp; every element that provides
                    endless customization.
                  </p>
                </div>
              </div>
              <div className="feature-box fbox-plain mb-5">
                <div className="fbox-icon">
                  <img
                    src="demos/cleaner/images/icons/price.svg"
                    alt="Cleaner Icon"
                  />
                </div>
                <div className="fbox-content">
                  <h3 className="text-transform-none fw-semibold ls-0">
                    Flat Rate Price
                  </h3>
                  <p>
                    Change your Website's Primary Scheme instantly by simply
                    adding the dark class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div
          id="section-price"
          className="section mb-0 mt-6"
          style={{ paddingBottom: 100, overflow: "visible" }}
        >
          <div className="svg-separator top">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2273 390"
                fill="#F9F9F9"
              >
                <path d="M0,211.28s373-254,1119-205,765,173,1154,0v384H0Z" />
              </svg>
            </div>
          </div>
          <div className="container">
            <div className="form-widget">
              <div className="form-result" />
              <form
                id="cleaner-form"
                name="cleaner-form"
                action="include/form.php"
                method="post"
                className="cleaner-form mb-0"
                encType="multipart/form-data"
              >
                <div className="form-process" />
                <div className="row gutter-40">
                  <div className="col-lg-8">
                    <div className="heading-block border-bottom-0">
                      <h2 className="mb-3 text-transform-none ls-0">
                        Cleaning Cost Calculator
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed voluptate vero esse ea hic quod veniam quam
                        accusamus laboriosam ipsam provident.
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="cleaner-form-area" className="mb-3">
                          Select Area:
                        </label>
                        <br />
                        <input
                          id="cleaner-form-area"
                          name="cleaner-form-area"
                          className="clean-area required input-range-slider"
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="cleaner-form-rooms" className="mb-3">
                          Select Rooms:
                        </label>
                        <br />
                        <input
                          id="cleaner-form-rooms"
                          name="cleaner-form-rooms"
                          className="clean-rooms required input-range-slider"
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label
                          htmlFor="cleaner-form-bathrooms"
                          className="mb-3"
                        >
                          Select Bathrooms:
                        </label>
                        <br />
                        <input
                          id="cleaner-form-bathrooms"
                          name="clean-form-bathrooms"
                          className="clean-bathrooms required input-range-slider"
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label
                          htmlFor="cleaner-form-livingrooms"
                          className="mb-3"
                        >
                          Select Living Rooms:
                        </label>
                        <br />
                        <input
                          id="cleaner-form-livingrooms"
                          name="clean-form-livingrooms"
                          className="clean-livingrooms required input-range-slider"
                        />
                      </div>
                      <div className="col-12 form-group mb-4">
                        <label className="mb-3">
                          Others Requirment:{" "}
                          <small className="text-transform-none ls-0 text-black-50">
                            (Select Multiples)*
                          </small>
                        </label>
                        <br />
                        <div className="btn-group w-100" role="group">
                          <input
                            type="checkbox"
                            name="clean-form-others[]"
                            className="btn-check"
                            id="clean-form-others-clean-garden"
                            data-price={4}
                            autoComplete="off"
                            defaultValue="Clean Garden"
                          />
                          <label
                            htmlFor="clean-form-others-clean-garden"
                            className="btn btn-outline-secondary px-4 fw-semibold ls-0 text-transform-none"
                          >
                            Clean Garden
                          </label>
                          <input
                            type="checkbox"
                            name="clean-form-others[]"
                            className="btn-check"
                            id="clean-form-others-play-room"
                            data-price={5}
                            autoComplete="off"
                            defaultValue="Play Room"
                          />
                          <label
                            htmlFor="clean-form-others-play-room"
                            className="btn btn-outline-secondary px-4 fw-semibold ls-0 text-transform-none"
                          >
                            Play Room
                          </label>
                          <input
                            type="checkbox"
                            name="clean-form-others[]"
                            className="btn-check"
                            id="clean-form-others-garage"
                            data-price="5.4"
                            autoComplete="off"
                            defaultValue="Garage"
                          />
                          <label
                            htmlFor="clean-form-others-garage"
                            className="btn btn-outline-secondary px-4 fw-semibold ls-0 text-transform-none"
                          >
                            Garage
                          </label>
                          <input
                            type="checkbox"
                            name="clean-form-others[]"
                            className="btn-check"
                            id="clean-form-others-gym"
                            data-price="4.2"
                            autoComplete="off"
                            defaultValue="Gym"
                          />
                          <label
                            htmlFor="clean-form-others-gym"
                            className="btn btn-outline-secondary px-4 fw-semibold ls-0 text-transform-none"
                          >
                            Gym
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 form-group mb-4">
                        <label htmlFor="clean-form-name">Name:</label>
                        <input
                          type="text"
                          name="clean-form-name"
                          id="clean-form-name"
                          className="form-control required"
                          defaultValue=""
                          placeholder="Enter your Full Name"
                        />
                      </div>
                      <div className="col-6 form-group mb-4">
                        <label htmlFor="clean-form-email">Email:</label>
                        <input
                          type="email"
                          name="clean-form-email"
                          id="clean-form-email"
                          className="form-control required"
                          defaultValue=""
                          placeholder="Enter your Email"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="clean-form-message">
                          Additional Message{" "}
                          <small className="text-transform-none ls-0 text-black-50">
                            (Optional):
                          </small>
                        </label>
                        <textarea
                          name="clean-form-message"
                          id="clean-form-message"
                          className="form-control"
                          cols={30}
                          rows={6}
                          defaultValue={""}
                        />
                      </div>
                      <input
                        type="text"
                        className="d-none"
                        id="clean-form-botcheck"
                        name="clean-form-botcheck"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        name="prefix"
                        defaultValue="clean-form-"
                      />
                      <input
                        type="hidden"
                        name="subject"
                        defaultValue="Cleaner Cost Estimate Request"
                      />
                      <input
                        type="hidden"
                        name="html_title"
                        defaultValue="Cleaner Cost Estimation"
                      />
                      <input
                        type="hidden"
                        id="clean-form-price"
                        name="website-cost-total-price"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 mt-4 mt-md-0">
                    <div className="card text-center border-0 shadow-sm">
                      <div className="card-body pt-4 pb-0">
                        <h4 className="card-title fw-semibold text-uppercase mb-0">
                          Final Cost
                        </h4>
                        {/* Price Value */}
                        <div className="total-price color fw-bold py-3" />
                      </div>
                      <div className="line my-1" />
                      <div className="card-body py-4">
                        <ul className="iconlist d-flex flex-column align-items-center ms-0 op-08">
                          <li className="mb-2">100% Trusted Cleaners</li>
                          <li className="mb-2">Over 820+ Cleaners</li>
                          <li className="mb-2">No Hidden Charges</li>
                          <li>Credit Cards Accepted</li>
                        </ul>
                        <button
                          type="submit"
                          name="clean-form-submit"
                          className="button button-rounded button-light button-large second-bg-color text-dark w-100 ls-0 m-0"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="fancy-title title-border mt-5">
                      <h4 className="fw-semibold">Pricing FAQs</h4>
                    </div>
                    <div className="toggle">
                      <div className="toggle-header justify-content-between">
                        <div className="toggle-icon">
                          <i className="toggle-closed bi-plus-circle" />
                          <i className="toggle-open bi-dash-circle" />
                        </div>
                        <div className="toggle-title fw-semibold">
                          How can I Pay?
                        </div>
                      </div>
                      <div className="toggle-content text-black-50">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda, dolorum, vero ipsum molestiae minima
                        odio quo voluptate illum excepturi quam cum voluptates
                        doloribus.
                      </div>
                    </div>
                    <div className="toggle">
                      <div className="toggle-header justify-content-between">
                        <div className="toggle-icon">
                          <i className="toggle-closed bi-plus-circle" />
                          <i className="toggle-open bi-dash-circle" />
                        </div>
                        <div className="toggle-title fw-semibold">
                          How can I Pay?
                        </div>
                      </div>
                      <div className="toggle-content text-black-50">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda, dolorum, vero ipsum molestiae minima
                        odio quo voluptate illum excepturi quam cum voluptates
                        doloribus.
                      </div>
                    </div>
                    <div className="toggle">
                      <div className="toggle-header justify-content-between">
                        <div className="toggle-icon">
                          <i className="toggle-closed bi-plus-circle" />
                          <i className="toggle-open bi-dash-circle" />
                        </div>
                        <div className="toggle-title fw-semibold">
                          Can I cancel my Plan?
                        </div>
                      </div>
                      <div className="toggle-content text-black-50">
                        Minima odio quo voluptate illum excepturi quam cum
                        voluptates doloribus quae nisi tempore necessitatibus
                        dolores ducimus enim libero eaque explicabo suscipit
                        animi at quaerat aliquid ex expedita perspiciatis?
                        Saepe, aperiam, nam unde quas beatae vero vitae nulla.
                      </div>
                    </div>
                    <p className="fw-semibold">
                      Want to know more?{" "}
                      <a href="#">
                        <u>See the full FAQs</u>
                      </a>{" "}
                      <i className="bi-caret-right-fill color" />
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="section m-0 dark"
          style={{
            background:
              'linear-gradient(rgba(51,94,238,0.8), rgba(51,94,238,0.8)), url("demos/cleaner/images/section2.jpg") center center no-repeat',
            backgroundSize: "cover",
            padding: "80px 0 230px"
          }}
        >
          <div className="container">
            <div
              className="heading-block text-center mx-auto"
              style={{ maxWidth: 700 }}
            >
              <h5 className="fw-normal text-uppercase ls-2">
                High Rated Cleaners
              </h5>
              <h2 className="mb-2 text-transform-none ls-0">
                820+ Over Cleaners Completed their Jobs.
              </h2>
              <span>
                Authoritatively create performance based web services for
                exceptional products. Dynamically disseminate customized.
              </span>
            </div>
          </div>
        </div>
        <div className="negetive-margin">
          <div className="container">
            <div
              id="cleaner-carousel"
              className="owl-carousel carousel-widget"
              data-margin={30}
              data-nav="true"
              data-pagi="true"
              data-items-xs={1}
              data-items-sm={2}
              data-items-md={3}
              data-items-lg={4}
              data-items-xl={4}
            >
              <div className="card border-0 shadow-sm">
                <img
                  src="demos/cleaner/images/cleaners/1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body second-bg-color rounded-bottom p-4">
                  <h4 className="card-title">Penny Tool</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <img
                  src="demos/cleaner/images/cleaners/2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body second-bg-color rounded-bottom p-4">
                  <h4 className="card-title">Sue Shei</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <img
                  src="demos/cleaner/images/cleaners/3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body second-bg-color rounded-bottom p-4">
                  <h4 className="card-title">Benjamin Evalent </h4>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <img
                  src="demos/cleaner/images/cleaners/4.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body second-bg-color rounded-bottom p-4">
                  <h4 className="card-title">Malcolm Function</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <img
                  src="demos/cleaner/images/cleaners/5.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body second-bg-color rounded-bottom p-4">
                  <h4 className="card-title">Alan Fresco </h4>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
              <div className="card border-0 shadow-sm">
                <img
                  src="demos/cleaner/images/cleaners/6.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body second-bg-color rounded-bottom p-4">
                  <h4 className="card-title">Justin Case</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section bg-transparent">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-5 text-center">
                <img
                  src="demos/cleaner/images/icons/reviews.svg"
                  alt="Review Image"
                  width={400}
                />
                <div className="row mt-5">
                  <div className="col-6">
                    <h3 className="color fw-normal h1 mb-3">1100+</h3>
                    <h5 className="text-muted fw-normal">
                      Jobs Done, consectetur adipisicing elit. Eveniet, sunt.
                    </h5>
                  </div>
                  <div className="col-6">
                    <h3 className="color fw-normal h1 mb-3">4.9/5.0</h3>
                    <h5 className="text-muted fw-normal">
                      Average review across all of our company Service lines.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="heading-block">
                  <h2 className="mb-2 text-transform-none ls-0">
                    More than <span>12000+</span> Customers Reviews
                  </h2>
                  <span>
                    Objectively actualize process-centric infomediaries via
                    ethical niche markets. Professionally plagiarize
                    leading-edge potentialities.
                  </span>
                </div>
                <div
                  id="oc-testi"
                  className="owl-carousel testimonials-carousel carousel-widget card"
                  data-margin={10}
                  data-nav="false"
                  data-pagi="true"
                  data-items={1}
                  data-autoplay={5000}
                  data-loop="true"
                >
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-auto">
                        <img
                          className="rounded-circle"
                          src="images/testimonials/1.jpg"
                          alt="Customer Testimonails"
                        />
                      </div>
                      <div className="col">
                        <h4 className="fw-normal">
                          Holisticly iterate world-class niches before
                          best-of-breed initiatives. Seamlessly optimize
                          goal-oriented outsourcing before low-risk high-yield
                          processes. Uniquely deploy extensive networks for
                          leading-edge models.
                        </h4>
                        <h4 className="h6 mb-0 fw-medium">Siri Alexa</h4>
                        <small className="text-muted">Apple Inc.</small>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-auto">
                        <a href="#">
                          <img
                            className="rounded-circle"
                            src="images/testimonials/2.jpg"
                            alt="Customer Testimonails"
                          />
                        </a>
                      </div>
                      <div className="col">
                        <h4 className="fw-normal">
                          Progressively scale front-end models whereas
                          standardized technology. Collaboratively
                          disintermediate user friendly communities vis-a-vis
                          cross-platform results. Completely productize
                          client-centric benefits vis-a-vis optimal.
                        </h4>
                        <h4 className="h6 mb-0 fw-medium">Bailey Wonger</h4>
                        <small className="text-muted">Apple Inc.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section text-center mb-0"
          style={{
            padding: "120px 0",
            backgroundColor: "rgba(51,94,238,0.08)"
          }}
        >
          <div className="container" style={{ maxWidth: 700 }}>
            <img
              src="demos/cleaner/images/icons/apply.svg"
              alt="Apply Icon"
              height={200}
              className="mb-4"
            />
            <h2 style={{ fontSize: 38 }}>
              Try out now &amp; Apply for Cleaner
            </h2>
            <p className="mb-5" style={{ fontSize: "1.125rem" }}>
              Dynamically predominate B2B resources whereas interdependent
              strategic theme areas. Completely underwhelm out-of-the-box
              functionalities for worldwide e-tailers. Dynamically restore fully
              researched architectures.
            </p>
            <a
              href="#"
              className="btn btn-lg bg-color text-white fw-semibold px-4"
            >
              Get Started
            </a>
            <a
              href="#"
              className="btn btn-lg bg-white fw-semibold color px-4 ms-2"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* #content end */}
    <div
      className="position-relative"
      style={{ backgroundColor: "rgba(51,94,238,0.08)" }}
    >
      <svg
        className="svg-separator"
        viewBox="0 0 1440 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 24H1440V0C722.5 52 0 0 0 0V24Z" fill="#335EEE" />
      </svg>
    </div>
    {/* Footer
		============================================= */}
    <footer id="footer" className="border-0 dark bg-color">
      <div className="container">
        {/* Footer Widgets
				============================================= */}
        <div className="footer-widgets-wrap">
          <div className="row">
            <div className="col-6 col-lg-4">
              <img
                className="mb-5"
                src="demos/bike/images/logo-foo.png"
                alt=""
                width={123}
              />
              <p className="text-white-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                repellat possimus sapiente officiis alias, eius libero fugiat ex
                error tempore.
              </p>
              <div className="d-flex">
                <a
                  href="#"
                  className="social-icon bg-white bg-opacity-25 border-transparent rounded-circle si-small h-bg-facebook"
                >
                  <i className="fa-brands fa-facebook-f" />
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href="#"
                  className="social-icon bg-white bg-opacity-25 border-transparent rounded-circle si-small h-bg-x-twitter"
                >
                  <i className="fa-brands fa-x-twitter" />
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a
                  href="#"
                  className="social-icon bg-white bg-opacity-25 border-transparent rounded-circle si-small h-bg-youtube"
                >
                  <i className="fa-brands fa-youtube" />
                  <i className="fa-brands fa-youtube" />
                </a>
                <a
                  href="#"
                  className="social-icon bg-white bg-opacity-25 border-transparent rounded-circle si-small h-bg-appstore"
                >
                  <i className="fa-brands fa-apple" />
                  <i className="fa-brands fa-apple" />
                </a>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <h4>Features</h4>
              <ul className="list-unstyled mb-0 text-small">
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Cool stuff
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Another one
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 mt-5 mt-lg-0">
              <h4>Resources</h4>
              <ul className="list-unstyled mb-0 text-small">
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Another resource
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mt-5 mt-lg-0">
              <h4>About</h4>
              <ul className="list-unstyled mb-0 text-small">
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .footer-widgets-wrap end */}
      </div>
      {/* Copyrights
			============================================= */}
      <div id="copyrights" className="dark">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 text-white-50">
              Copyrights © 2023 All Rights Reserved by Canvas Inc.
              <br />
              <div className="copyright-links">
                <a href="#" className="text-white-50">
                  Terms of Use
                </a>{" "}
                /{" "}
                <a href="#" className="text-white-50">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end mt-4 mt-md-0">
              <div className="copyrights-menu copyright-links mb-0">
                <a href="#" className="text-white-50">
                  Home
                </a>
                /
                <a href="#" className="text-white-50">
                  About Us
                </a>
                /
                <a href="#" className="text-white-50">
                  Price
                </a>
                /
                <a href="#" className="text-white-50">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* #copyrights end */}
    </footer>
    {/* #footer end */}
  </div>
  {/* #wrapper end */}
  {/* Go To Top
	============================================= */}
  <div
    id="gotoTop"
    className="uil uil-angle-up rounded-circle bg-color h-bg-dark"
  />
  {/* JavaScripts
	============================================= */}
  {/* DatePicker JS */}
  {/* Range Slider Plugin */}
</>


    
  </>
  )
}
