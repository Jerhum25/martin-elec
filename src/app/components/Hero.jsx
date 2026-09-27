import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen flex justify-center relative ">
      <div className="absolute top-0 left-0 w-full flex ml-[50%] translate-x-[-50%] h-screen z-0 ">
        <Image
          fill
          unoptimized
          alt="fond hero"
          src="/images/hero.webp"
          style={{ objectFit: "cover", objectPosition: "70%" }}
        />
      </div>
      <div className="w-full h-screen bg-linear-to-r from-black to-transparent  absolute top-0 left-0 z-5"></div>
      <div className="xl:w-[70%] w-full h-screen relative z-100 flex flex-col">
        <div className="lg:w-1/2 w-full h-screen flex flex-col justify-center gap-10 px-5  ">
          <h2 className="uppercase -mb-8 mt-5 text-[#FCBD00]">
            électricité générale et industrielle à Besançon
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold">
            Des installations électriques sûres et durables
          </h3>
          <p>
            Artisant électricien à Besançon, je vous accompagne dans tous vos
            projets : neuf, rénovation et dépannage. Des solutions fiables,
            adaptées à vos besoins et conformes aux normes en vigueur.
          </p>
          <div className="flex items-center sm:justify-start justify-center">
            <button className="bg-[#FCBD00] rounded-full px-5 py-3 flex items-center gap-2 text-black mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                />
              </svg>
              <a href="tel:0622334455" className="font-semibold">
                Demander un devis gratuit
              </a>
            </button>
          </div>
        </div>
        <div className="w-full mb-25 pl-5 ">
          <ul className="flex justify-between sm:flex-row flex-col sm:gap-10 gap-3">
            <li className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FCBD00"
                  d="M12.025 21.025q-3.425 0-5.725-2.475T4 12.725V5.5q0-.825.588-1.413Q5.175 3.5 6 3.5h12q.825 0 1.413.587Q20 4.675 20 5.5v1.75q0 .4-.15.762q-.15.363-.425.638l-5.775 5.775q-.575.575-1.412.575q-.838 0-1.413-.575L8 11.6l1.4-1.425L12.25 13L18 7.25V5.5H6v7.3q0 2.55 1.725 4.375Q9.45 19 12.025 19q2.5 0 4.237-1.75Q18 15.5 18 13h2q0 3.35-2.312 5.688q-2.313 2.337-5.663 2.337Z"
                />
              </svg>
              <h3 className="text-sm font-bold flex flex-col">
                Travail soigné{" "}
                <span className="text-xs text-white opacity-60 font-normal">
                  Des installations durables et sécurisées
                </span>
              </h3>
            </li>
            <li className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#FCBD00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0l-2 3m2-8v5"
                />
              </svg>
              <h3 className="text-sm font-bold flex flex-col">
                Proximité{" "}
                <span className="text-xs text-white opacity-60 font-normal">
                  Intervention rapide à Besançon et alentours
                </span>
              </h3>{" "}
            </li>
            <li className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#FCBD00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0l-2 3m2-8v5"
                />
              </svg>
              <h3 className="text-sm font-bold flex flex-col">
                Conformité{" "}
                <span className="text-xs text-white opacity-60 font-normal">
                  Respect des normes NF C 15-100
                </span>
              </h3>{" "}
            </li>
            <li className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="#FCBD00" strokeWidth="1.5">
                  <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
                  <circle cx="12" cy="10" r="3" />
                </g>
              </svg>
              <h3 className="text-sm font-bold flex flex-col">
                Conseils personnalisés{" "}
                <span className="text-xs text-white opacity-60 font-normal">
                  Un accompagnement sur mesure pou chaque projet
                </span>
              </h3>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
