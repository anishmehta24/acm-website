export default function Home() {
  return (
    <main className="bg-[#0270F1] min-h-screen p-8">
      {/* Logic Lounge Title Section */}
      <section className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-between">
        {/* Left side - Text and Logo */}
        <div className="flex flex-col items-start space-y-4" style=
        {{ 
          marginTop: "-150px",
          marginLeft:"70px",
           }}>
          <h1 className="text-4xl font-bold text-white">LOGIC LOUNGE</h1>
          <p className="text-white">@acmbitmesra </p>
        </div>

        {/* Right side - SVG image */}
        <div className="mt-6 lg:mt-0 w-full lg:w-1/2">
          <div
          
            className="relative bg-gray-300 rounded overflow-hidden"
            style={{
              width: "570px",
              height: "251px",
              top: "18px",
              left: "6px",
              right:"30px",
              gap: "0px",
              borderRadius: "36px 36px 36px 36px",
            }}
          >
            <img src="/EVENTS1.svg" alt="Code snippets" className="w-full h-full object-cover rounded-lg" />
            
            <p className="absolute top-4 left-4 text-white font-semibold"style={{
              marginTop:"106px",
              marginLeft:"26px",
            }}>Level up your coding game <br></br>with Discussions!</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 mt-16" style={{
           borderRadius: "360px",
        }}>
        
          <div
            className="relative bg-gray-400 rounded overflow-hidden"
            style={{
              width: "425px",
              height: "425px",
              top: "2px",
              left: "88px",
              gap: "0px",
              borderRadius: "36px 36px 36px 36px",
             
            }}
          >
            <img src="/lounge.svg" className="w-full h-full object-cover" style = {{borderRadius: "36px"}} />
          </div>
       
      </section>
    </main>
  );
}
