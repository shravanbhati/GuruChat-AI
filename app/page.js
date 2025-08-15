import Hero from "../Components/Hero.js";
import ProfileCard from "../Components/ProfileCard.js";
import SocialButtons from "../Components/SocialButtons.js";

export default function Home() {
  return (
    <main className=" bg-slate-900 text-slate-100 antialiased">
      <div className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -left-48 -top-40 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-[#6b28ff]/20 to-[#00d1b2]/6 blur-3xl opacity-60 transform-gpu"></div>
          <div className="absolute -right-48 -bottom-40 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-[#ff6bcb]/10 to-[#6b9bff]/8 blur-2xl opacity-40 transform-gpu"></div>

          <div className="absgiolute inset-0 z-10 grid-overlay opacity-50"></div>
        </div>

        <div className="container h-screen mx-auto px-6 lg:px-12 py-20">
          <div className="h-[80vh]">
            <div className="pt-16">
              <Hero />
            </div>

            <section className="mt-12 grid gap-8 sm:grid-cols-2 items-stretch">
              <ProfileCard
                name="Hitesh Choudhary"
                title="Code with Chai, Grow with Vibe - Hitesh Style"
                tags={["#ChaiLover", "#CodingGuru", "#TechMentor"]}
                avatar="/hitesh.jpg"
              />

              <ProfileCard
                name="Piyush Garg"
                title="Trust me, I'm a software engineer"
                tags={["#Single", "#CodingGuru", "#ManWithBigHeart"]}
                avatar="/piyush.jpg"
              />
            </section>
          </div>
          <section className="h-[20vh]">
            <div className="flex items-center justify-center">
              <SocialButtons />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
