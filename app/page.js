import Hero from "../Components/Hero.js";
import ProfileCard from "../Components/ProfileCard.js";
import SocialButtons from "../Components/SocialButtons.js";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-100 antialiased overflow-x-hidden">
      <div className="relative h-dvh">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        >
          <div className="absolute -left-24 -top-20 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-br from-[#6b28ff]/20 to-[#00d1b2]/6 blur-3xl opacity-60 transform-gpu"></div>
          <div className="absolute -right-24 -bottom-20 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[#ff6bcb]/10 to-[#6b9bff]/8 blur-2xl opacity-40 transform-gpu"></div>

          <div className="absolute inset-0 z-10 grid-overlay h-[100%] opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div>
            <div className="pt-6 sm:pt-8 md:pt-12">
              <Hero />
            </div>

            <section className="mt-8 sm:mt-10">
              <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 items-stretch">
                <ProfileCard
                  name="Hitesh Choudhary"
                  title="Code with Chai, Grow with Vibe"
                  tags={["#ChaiLover", "#CodingGuru", "#CommunityCaptain"]}
                  avatar="/hitesh.jpg"
                />

                <ProfileCard
                  name="Piyush Garg"
                  title="Trust me, I'm a software engineer"
                  tags={["#Single", "#CodingGuru", "#Cutie"]}
                  avatar="/piyush.jpg"
                />
              </div>
            </section>

            <section className="mt-40 sm:mt-10 md:mt-5 lg:mt-60 py-6 sm:py-8">
              <div className="flex items-center justify-center">
                <SocialButtons />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
