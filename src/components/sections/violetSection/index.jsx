import { motion } from "framer-motion";

const VioletCharacter = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900 text-white overflow-hidden">
      <motion.div
        className="flex justify-center w-[200px] items-end py-24 px-10 relative h-full transition-all duration-[400ms] flex-grow hover:flex-grow-[3] group"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-4 w-full z-10 translate-y-[500px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[400ms]">
          <h1 className="text-3xl font-bold">Violet Evergarden</h1>
          <p className="text-sm">
            Violet Evergarden (ヴァイオレット・エヴァーガーデン, Vaioretto
            Evāgāden?) is the protagonist of the Violet Evergarden series Violet
            is a former soldier who was enlisted in the Leidenschaftlich army
            and fought in the war, where she was treated as nothing more than a
            weapon.
          </p>
          <button
            className="bg-blue-600/70 rounded-md hover:rounded-xl transition-all duration-200 hover:tracking-widest font-semibold px-10 py-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <img
          className="absolute inset-0 object-cover object-center h-full opacity-30 group-hover:opacity-100 transition-all duration-[400ms]"
          src="/Violet-26.jpg"
        />
      </motion.div>
      <motion.div
        className="flex justify-center w-[200px] items-end py-24 px-10 relative h-full transition-all duration-[400ms] flex-grow hover:flex-grow-[3] group"
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 w-full z-10 translate-y-[500px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[400ms]">
          <h1 className="text-3xl font-bold">Claudia Hodgins</h1>
          <p className="text-sm">
            Claudia Hodgins (クラウディア・ホッジンズ, Kuraudia Hojjinzu?) is a
            character in the Violet Evergarden series. He is a former
            lieutenant-colonel of the army, but quit the military after the war
            ended and established the CH Postal Company, where he serves as its
            president. He is tasked with watching over Violet, a task given to
            him by Gilbert.
          </p>
        </div>
        <img
          className="absolute inset-0 object-cover object-center h-full opacity-30 group-hover:opacity-100 transition-all duration-[400ms]"
          src="/Violet Evergarden img-9.jpg"
        />
      </motion.div>
      <motion.div
        className="flex justify-center w-[200px] items-end py-24 px-10 relative h-full transition-all duration-[400ms] flex-grow hover:flex-grow-[3] group"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 w-full z-10 translate-y-[500px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[400ms]">
          <h1 className="text-3xl font-bold">Benedict Blue</h1>
          <p className="text-sm">
            Benedict Blue (ベネディクト・ブルー, Benedikuto Burū?) is a
            character in the Violet Evergarden series. He is a postman working
            at the CH Postal Company. He has known Hodgins since before the
            company's establishment and has had a brusque attitude towards him
            ever since he started to work there.
          </p>
        </div>
        <img
          className="absolute inset-0 object-cover object-center h-full opacity-30 group-hover:opacity-100 transition-all duration-[400ms]"
          src="/Violet Evergarden img-12.png"
        />
      </motion.div>
      <motion.div
        className="flex justify-center w-[200px] items-end py-24 px-10 relative h-full transition-all duration-[400ms] flex-grow hover:flex-grow-[3] group"
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 w-full z-10 translate-y-[500px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[400ms]">
          <h1 className="text-3xl font-bold">Cattleya Baudelaire</h1>
          <p className="text-sm">
            Cattleya Baudelaire (カトレア・ボードレール, Katorea Bōdorēru?) is a
            character in the Violet Evergarden series. Being a figurehead Auto
            Memories Doll who works for the CH Postal Company, Cattleya is
            relentlessly requested and often takes on clients with love
            troubles. She works alongside Violet and has been close with Hodgins
            since before the company was established, joining as one of its
            initial employees.
          </p>
        </div>
        <img
          className="absolute inset-0 object-cover object-center h-full opacity-30 group-hover:opacity-100 transition-all duration-[400ms]"
          src="/Violet Evergarden img-11.png"
        />
      </motion.div>
      <motion.div
        className="flex justify-center w-[200px] items-end py-24 px-10 relative h-full transition-all duration-[400ms] flex-grow hover:flex-grow-[3] group"
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 w-full z-10 translate-y-[500px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[400ms]">
          <h1 className="text-3xl font-bold">Iris Cannary</h1>
          <p className="text-sm">
            Iris Cannary (アイリス・カナリー, Airisu Kanarī?) is a character in
            the Violet Evergarden series. A rookie Auto Memories Doll with an
            unyielding spirit who works at CH Postal Company, Iris admires young
            working women and is enthusiastic about quickly making a name for
            herself in the industry.
          </p>
        </div>
        <img
          className="absolute inset-0 object-cover object-center h-full opacity-30 group-hover:opacity-100 transition-all duration-[400ms]"
          src="/Violet Evergarden img-10.png"
        />
      </motion.div>
      <motion.div
        className="flex justify-center w-[200px] items-end py-24 px-10 relative h-full transition-all duration-[400ms] flex-grow hover:flex-grow-[3] group"
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 w-full z-10 translate-y-[500px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 transition-all duration-[400ms]">
          <h1 className="text-3xl font-bold">Erica Brown</h1>
          <p className="text-sm">
            Erica Brown (エリカ・ブラウン, Erika Buraun?) is a former Auto
            Memories Doll who worked at CH Postal Company. She is currently
            working as a playwright.
          </p>
        </div>
        <img
          className="absolute inset-0 object-cover object-center h-full opacity-30 group-hover:opacity-100 transition-all duration-[400ms]"
          src="/Violet Evergarden img-13.png"
        />
      </motion.div>
    </div>
  );
};

export default VioletCharacter;
