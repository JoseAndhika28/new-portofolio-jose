import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="container mx-auto px-4 text-white">
      <Navbar />

      <div className="AboutMe flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen mt-24">
        {/* Summary */}
        <div className="Summary max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">About Me!</h1>

          <p className="leading-relaxed text-justify">
            Hi, I’m <span className="font-semibold">Jose Andhika Putra</span> a
            first-year Information Systems student at IBI Kwik Kian Gie, proudly
            from Indonesia. I’m passionate about Frontend Development, UI/UX
            design, and game development. One of my biggest dreams is to create
            a popular game either under my own name or through a future game
            studio I build. Right now, I’m focused on building my personal brand
            while diving deeper into the world of programming.
          </p>

          <p className="leading-relaxed text-justify mt-4">
            My goal is that once I’ve gained enough knowledge and experience,
            I’ll share it with the next generation, helping them become more
            aware and ready for the future of technology. When I’m working or
            learning, I love listening to music from artists and bands like
            Adele, Laufey, Wave to Earth, JKT48, Maroon 5, and many more. If
            you’re curious, feel free to check out my{" "}
            <a
              href="https://open.spotify.com/user/31h7rm4jy3hdaqmjy463wpxifwoi?si=e5c9b19daa16454a"
              className="text-[#1db954]"
            >
              Spotify
            </a>
            . 📩 Email me for collaborations or inquiries:
            joseputra238@gmail.com
          </p>
        </div>

        {/* My Picture */}
        <div className="MyPicture flex justify-center md:justify-end">
          <img
            src="/images/DSC04870.JPG"
            alt="Jose Andhika Putra"
            className="object-cover rounded-2xl w-full h-auto md:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
