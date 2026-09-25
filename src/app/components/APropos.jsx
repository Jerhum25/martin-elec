import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function APropos() {
  return (
    <div className="w-full h-auto flex justify-center" id="apropos">
      <div className="xl:w-[70%] w-full  bg-black flex md:flex-row flex-col  text-white ">
        <div className="md:w-[30%] w-full h-64 md:h-auto relative">
          <Image
            fill
            unoptimized
            alt="cuisine éclairée"
            src="/images/apropos.webp"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="md:w-[40%] w-full px-5 py-10 flex flex-col gap-3 relative">
          <h2 className="uppercase flex gap-2 items-center">
            <div className="h-1 w-10 bg-[#fcbd00]"></div> à propos de nous
          </h2>
          <h3 className="text-3xl font-bold">
            Un artisan de confiance à votre service
          </h3>
          <p>
            Fort de plusieurs années d'expérience, j'ai à coeur de fournir un
            travail de qualité en toute transparence. Ecoute, conseils et
            réactivité sont les valeurs qui me guident au quotidien.
          </p>
        </div>
        <div className="py-10 px-5">
          <ul className="flex flex-col gap-5">
            <li className="flex gap-2">
              <div className="bg-[#fcbd00] h-8 w-8 rounded grid place-items-center mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" ><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" /></svg></div>
              <h4 className="font-bold flex flex-col">Expérience et savoir-faire<span className="font-normal opacity-60">
                Une solide expérience dans le domaine de l'électricité générale.
              </span></h4>
              
            </li>
            <li className="flex gap-2">
              <div className="bg-[#fcbd00] h-8 w-8 rounded grid place-items-center mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" ><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" /></svg></div>
              <h4 className="font-bold flex flex-col">Matériel de qualité<span className="font-normal opacity-60">Des produits fiables et durables.</span></h4>
              
            </li>
            <li className="flex gap-2">
              <div className="bg-[#fcbd00] h-8 w-8 rounded grid place-items-center mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" ><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" /></svg></div>
              <h4 className="font-bold flex flex-col">Devis gratuit<span className="font-normal opacity-60">Une étude de votre projet sans engagement.</span></h4>
              
            </li>
            <li className="flex gap-2">
              <div className="bg-[#fcbd00] h-8 w-8 rounded grid place-items-center mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" ><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" /></svg></div>
              <h4 className="font-bold flex flex-col">Zone d'intervention<span className="font-normal opacity-60">Besançon et ses environs (25 39 70)</span></h4>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
