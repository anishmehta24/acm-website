export default function Home() {
  return (
    <main className="bg-[#0270F1] min-h-screen p-8">
      {/* Logic Lounge Title Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between">
        {/* Left side - Text and Logo */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-bold text-white">
            LOGIC LOUNGE
          </h1>
          <p className="text-white">@acmbitmesra</p>
        </div>

        {/* Right side - Coding Image */}
        <div className="mt-6 lg:mt-0 w-full lg:w-1/2">
          <div className="relative w-full h-64 bg-gray-300 rounded-xl overflow-hidden">
            {/* Replace with image */}
            <p className="absolute top-4 left-4 text-white font-semibold">Level up your coding game with Discussions!</p>
          </div>
        </div>
      </section>

      {/* Section with Image and Heading */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        {/* Left side - Image Card */}
        <div className="relative bg-white p-4 rounded-xl shadow-lg">
          <div className="relative w-full h-80 bg-gray-400 rounded-lg overflow-hidden">
            {/* Image here */}
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-semibold">ACM Presents</h3>
            <h2 className="text-4xl font-bold">Logic Lounge</h2>
            <p className="mt-2">Let's discuss contests!</p>
            <p className="mt-2">bit.ly/ACMk23</p>
            <p>@acmbitmesra</p>
          </div>
        </div>

        {/* Right side - Heading with Button */}
        <div className="flex flex-col justify-center space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold">Heading</h2>
          <p className="text-lg">
            Another subheading—maybe it's related to the image on the left, or the button below.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2">
              <span>Button Label</span>
              <span>→</span>
            </button>
            <div className="bg-white border-2 border-black p-2 rounded-full">
              {/* Instagram Icon (example) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
              </div>
              </div>
              </div>
              
              </section>
              </main>
  );
}