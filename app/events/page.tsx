export default function Home() {
  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center space-y-16">
      {/* Blue Page */}
      <div
        className="bg-[#0270F1] p-8 rounded-3xl"
        style={{
          marginTop: "140px",
          position: "relative",
          width: "78%",
          minHeight: "700px",
          height: "80vh",
          maxWidth: "1200px",
        }}
      >
        {/* EVENTS Text - Centered at the top */}
        <h1
          className="text-6xl text-white text-center"
          style={{
            marginTop: "-150px",
            fontFamily: "'Chakra Petch', sans-serif",
            letterSpacing: "0.2em",
            fontWeight: "300",
          }}
        >
          EVENTS
        </h1>

        {/* Section Content */}
        <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between mt-12">
          {/* Left side - Text and Logo */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold text-white">LOGIC LOUNGE</h1>
            <p className="text-white">@acmbitmesra</p>
          </div>

          {/* Right side - SVG image */}
          <div className="mt-6 lg:mt-0 w-full lg:w-3/5">
            <div
              className="relative bg-gray-300 rounded overflow-hidden"
              style={{
                marginTop: "30px",
                width: "500px",
                height: "240px",
                borderRadius: "36px",
              }}
            >
              <img
                src="P1BL.svg"
                alt="Code snippets"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className="absolute top-4 left-4 text-white font-semibold"
                style={{
                  marginTop: "145px",
                  marginLeft: "16px",
                }}
              >
                Level up your coding game <br />
                with Discussions!
              </p>
            </div>
          </div>
        </section>

        {/* Another Section - Adjusting for Blue Page */}
        <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-16">
          <div
            className="relative bg-gray-400 rounded overflow-hidden"
            style={{
              width: "325px",
              height: "325px",
              borderRadius: "36px",
            }}
          >
            <img
              src="P1BR.svg"
              className="w-full h-full object-cover"
              style={{ borderRadius: "36px" }}
            />
          </div>
        </section>
      </div>

      {/* Green Page */}
      <div
        className="bg-[rgba(11,178,118,1)] p-8 rounded-3xl"
        style={{
          position: "relative",
          width: "78%",
          minHeight: "700px",
          height: "80vh",
          maxWidth: "1200px",
        }}
      >
        

        {/* Section Content */}
        <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between mt-12">
          {/* Left side - Text and Logo */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold text-white"style={{marginTop:"-120px",}}>CQM</h1>
            <p className="text-white">@acmbitmesra</p>
          </div>

          {/* Right side - SVG image */}
          <div className="mt-6 lg:mt-0 w-full lg:w-3/5">
            <div
              className="relative bg-gray-300 rounded overflow-hidden"
              style={{
                marginTop: "-35px",
                width: "500px",
                height: "240px",
                borderRadius: "36px",
              }}
            >
              <img
                src="P2GL.png"
                alt="Code snippets"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className="absolute top-4 left-4 text-white font-semibold"
                style={{
                  marginTop: "145px",
                  marginLeft: "16px",
                }}
              >
                Master the fundamentalsof Data <br />
                Structures and Algorithm
              </p>
            </div>
          </div>

        </section>

        {/* Another Section - Adjusting for Green Page */}
        <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-16">
          <div
            className="relative bg-gray-400 rounded overflow-hidden"
            style={{
              marginTop:"-32px",
              width: "325px",
              height: "325px",
              borderRadius: "36px",
            }}
          >
            <img
              src="P2GR.svg"
              className="w-full h-full object-cover"
              style={{ borderRadius: "36px" }}
            />
          </div>
        </section>
      </div>
      {/* Voilet Page */}
      <div
        className="bg-[rgba(135,11,178,1)] p-8 rounded-3xl"
        style={{
          position: "relative",
          width: "78%",
          minHeight: "700px",
          height: "80vh",
          maxWidth: "1200px",
        }}
      >
        

        {/* Section Content */}
        <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between mt-12">
          {/* Left side - Text and Logo */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold text-white"style={{marginTop:"-120px",}}>DSA WORKSHOP</h1>
            <p className="text-white">@acmbitmesra</p>
          </div>

          {/* Right side - SVG image */}
          <div className="mt-6 lg:mt-0 w-full lg:w-3/5">
            <div
              className="relative bg-gray-300 rounded overflow-hidden"
              style={{
                marginTop: "-35px",
                width: "500px",
                height: "240px",
                borderRadius: "36px",
              }}
            >
              <img
                src="P3PL.svg"
                alt="Code snippets"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className="absolute top-4 left-4 text-white font-semibold"
                style={{
                  marginTop: "145px",
                  marginLeft: "16px",
                }}
              >
                Master the fundamentalsof Data <br />
                Structures and Algorithm
              </p>
            </div>
          </div>
        </section>

        {/* Another Section - Adjusting for voilet Page */}
        <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-16">
          <div
            className="relative bg-gray-400 rounded overflow-hidden"
            style={{
              marginTop:"-32px",
              width: "325px",
              height: "325px",
              borderRadius: "36px",
            }}
          >
            <img
              src="P2GR.svg"
              className="w-full h-full object-cover"
              style={{ borderRadius: "36px" }}
            />
          </div>
        </section>
      </div>
      
      {/* 4th Blue Page */}
      <div
        className="bg-[rgba(11,128,178,1)] p-8 rounded-3xl"
        style={{
          position: "relative",
          width: "78%",
          minHeight: "700px",
          height: "80vh",
          maxWidth: "1200px",
        }}
      >
        

        {/* Section Content */}
        <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between mt-12">
          {/* Left side - Text and Logo */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold text-white"style={{marginTop:"-120px",}}>CP WORKSHOP</h1>
            <p className="text-white">@acmbitmesra</p>
          </div>

          {/* Right side - SVG image */}
          <div className="mt-6 lg:mt-0 w-full lg:w-3/5">
            <div
              className="relative bg-gray-300 rounded overflow-hidden"
              style={{
                marginTop: "-35px",
                width: "500px",
                height: "240px",
                borderRadius: "36px",
              }}
            >
              <img
                src="P4BL.svg"
                alt="Code snippets"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className="absolute top-4 left-4 text-white font-semibold"
                style={{
                  marginTop: "145px",
                  marginLeft: "16px",
                }}
              >
                Master Problem-Solving Skills at our <br />
                Competetitive Programming WorkShop!
              </p>
            </div>
          </div>
        </section>

        {/* Another Section - Adjusting for 4th Blue Page */}
        <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-16">
          <div
            className="relative bg-gray-400 rounded overflow-hidden"
            style={{
              marginTop:"-32px",
              width: "350px",
              height: "355px",
              borderRadius: "36px",
            }}
          >
            <img
              src="P4BR.svg"
              className="w-full h-full object-cover"
              style={{ borderRadius: "36px" }}
            />
          </div>
        </section>
      </div>
      {/* Yellow Page */}
      <div
        className="bg-[rgba(222,135,71,1)] p-8 rounded-3xl"
        style={{
          position: "relative",
          width: "78%",
          minHeight: "700px",
          height: "80vh",
          maxWidth: "1200px",
        }}
      >
        

        {/* Section Content */}
        <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between mt-12">
          {/* Left side - Text and Logo */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold text-white"style={{marginTop:"-120px",}}>CODEZILLA &<br/>
            LOST CODE</h1>
            <p className="text-white">@acmbitmesra</p>
          </div>

          {/* Right side - SVG image */}
          <div className="mt-6 lg:mt-0 w-full lg:w-3/5">
            <div
              className="relative bg-gray-300 rounded overflow-hidden"
              style={{
                marginTop: "-35px",
                width: "500px",
                height: "240px",
                borderRadius: "36px",
              }}
            >
              <img
                src="P5YL.svg"
                alt="Code snippets"
                className="w-full h-full object-cover rounded-lg"
              />
              <p
                className="absolute top-4 left-4 text-white font-semibold"
                style={{
                  marginTop: "145px",
                  marginLeft: "16px",
                }}
              >
                Master the fundamentalsof Data <br />
                Structures and Algorithm
              </p>
            </div>
          </div>
        </section>

        {/* Another Section - Adjusting for Yellow Page */}
        <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-16">
          <div
            className="relative bg-gray-400 rounded overflow-hidden"
            style={{
              marginTop:"-32px",
              width: "325px",
              height: "325px",
              borderRadius: "36px",
            }}
          >
            <img
              src="P2GR.svg"
              className="w-full h-full object-cover"
              style={{ borderRadius: "36px" }}
            />
          </div>
        </section>
      </div>
      
            
    </main>
  );
}
