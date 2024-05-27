import Button from "@/components/ui/Button";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <section className="w-full mt-16">
        {/* Bars for shiny background gradient */}
        <div className="absolute left-0 top-0 z-[-1] size-full">
          <div className="overflow-x-hidden">
            <div className="absolute left-0 h-32 w-[95%] -rotate-45 overflow-x-hidden bg-[#369DFD]/80 blur-[280.4px]"></div>
          </div>
          <div className="overflow-x-hidden">
            <div className="absolute left-0 top-full h-32 w-[90%] -rotate-45 overflow-x-hidden bg-[#369DFD]/40 blur-[337.4px]"></div>
          </div>
          <div className="overflow-x-hidden">
            <div className="absolute right-0 top-[145%] h-40 w-[17%] overflow-x-hidden bg-[#369DFD]/20 blur-[110px]"></div>
          </div>
        </div>
        {/* Blobs */}
        <div className="absolute top-0 -left-[30px] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-[100px] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-0 -right-[20px] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        {/* Hero */}
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle py-4">
              <div className="text-center flex flex-col gap-24">
                <h1 className="max-w-5xl text-2xl leading-none md:text-5xl lg:text-8xl lg:max-w-7xl">
                  ACM <br className="hidden lg:block lg:my-4" />
                  Student Chapter
                </h1>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <Button
                    link="#"
                    className="border-2 border-white border-solid"
                  >
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-content" className="w-full">
        {/* Additional Content Here */}
      </section>
    </main>
  );
}
