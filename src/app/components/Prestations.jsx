/* eslint-disable react/no-unescaped-entities */
export default function Prestations() {
  return (
    <div className="w-full flex justify-center bg-white" id="prestations">
      <div className="xl:w-[70%] w-full flex lg:flex-row flex-col bg-white text-black py-5">
        <div className="lg:w-[30%] w-full p-5 flex flex-col gap-3">
          <h2 className="uppercase flex gap-2 items-center">
            <div className="h-1 w-10 bg-[#fcbd00]"></div> nos prestations
          </h2>
          <h3 className="text-3xl font-bold">
            Des services complets pour tous vos projets électriques
          </h3>
          <p>
            De l'installation à la rénovation en passant par le dépannage, je
            vous propose des solutions adaptées à chaque solution, particuliers
            comme professionnels.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5  lg:w-[70%] w-full p-5">
          <div className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-2xl p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fcbd00"
                d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
              />
            </svg>
            <h4 className="font-semibold">Installation électrique</h4>
            <p>Neuf et rénovation pour tous types de locaux.</p>
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-2xl p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#fcbd00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="m10.05 10.607l-7.07 7.07a2 2 0 0 0 0 2.83v0a2 2 0 0 0 2.828 0l7.07-7.072m4.315.365l3.878 3.878a2 2 0 0 1 0 2.828v0a2 2 0 0 1-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61L2.49 3.075l1.414-1.414L7.44 3.782zm0 0l2.83 2.83" />
                <path d="M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718s4.95-2.121 6.717-1.06l-3.04 3.04l-.283 3.111l3.111-.282l3.04-3.041c1.062 1.768.68 4.978-1.06 6.717c-1.74 1.74-4.564 1.905-6.717 1.061" />
              </g>
            </svg>
            <h4 className="font-semibold">Mise aux normes</h4>
            <p>Sécurité et conformité NF C 15-100.</p>
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-2xl p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fcbd00"
                d="M20 11h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12zM12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1.86 1.27 3.43 3 3.87z"
              />
            </svg>
            <h4 className="font-semibold capitalize">éclairage</h4>
            <p>Intérieur et extérieur, classique ou led.</p>
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-2xl p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 32 32"
            >
              <path
                fill="#fcbd00"
                d="m26.607 30.515l-1.714-1.03L26.983 26h-5l3.91-6.515l1.714 1.03L25.517 24h5zM20 30H6V4c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v12h-2V4H8v24h12zm0-6h-2v-4h2zm-6 0h-2v-4h2zm6-6h-2v-4h2zm-6 0h-2v-4h2zm6-6h-2V8h2zm-6 0h-2V8h2z"
              />
            </svg>

            <h4 className="font-semibold">Tableau électrique</h4>
            <p>Pose, rénovation et mise en sécurité.</p>
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-2xl p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#fcbd00" strokeWidth="1.5">
                <path d="M17.854 12.16c-.383.45-1.09.454-1.537.007l-4.484-4.483c-.447-.447-.444-1.155.007-1.538l1.231-1.047a6.5 6.5 0 0 1 3.133-1.448l.725-.122c.685-.116 1.405.123 1.919.637l.986.987c.514.513.753 1.233.637 1.918l-.122.725a6.5 6.5 0 0 1-1.448 3.133z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 4.5l2-2m-19 19l2-2"
                />
                <path d="M6.146 11.84c.383-.45 1.09-.454 1.538-.007l4.483 4.484c.447.446.444 1.154-.007 1.537l-1.231 1.047a6.5 6.5 0 0 1-3.133 1.448l-.725.122c-.685.116-1.405-.123-1.918-.637l-.987-.986c-.514-.514-.753-1.234-.637-1.919l.122-.725a6.5 6.5 0 0 1 1.448-3.133z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.5 12.5l2-2m1 5l2-2"
                />
              </g>
            </svg>
            <h4 className="font-semibold capitalize">électroménager</h4>
            <p>Branchement et raccordement (lave-linge, four...).</p>
          </div>
          <div className="flex flex-col gap-2 bg-gray-100 shadow-lg rounded-2xl p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fcbd00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.252 14.407a6.82 6.82 0 0 1-6.532 1.776a2.02 2.02 0 0 0-1.95.487l-4.28 4.294a.974.974 0 0 1-1.385 0l-2.067-2.069a.976.976 0 0 1 0-1.385l4.28-4.284a1.95 1.95 0 0 0 .488-1.951a6.84 6.84 0 0 1 1.912-6.65a6.82 6.82 0 0 1 6.736-1.566l-2.925 2.927c-.75.752-1.112 2.342-.341 3.103l1.715 1.727c.76.761 2.35.41 3.11-.351l2.925-2.927a6.84 6.84 0 0 1-1.686 6.869"
              />
            </svg>
            <h4 className="font-semibold">Dépannage</h4>
            <p>Intervention rapide en cas de panne.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
