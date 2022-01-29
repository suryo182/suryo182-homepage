import React, { useEffect, useRef, useState } from "react";
import myImg from "../images/suryo.jpg";

const IndexPage = () => {
  const menuModalRef = useRef(null);
  const toggleMenuRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggleDarkMode = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuModalRef.current &&
          !menuModalRef.current.contains(event.target)) ||
        (toggleMenuRef.current && toggleMenuRef.current.contains(event.target))
      ) {
        setToggleMenu(!toggleMenu);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [toggle]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-100 transition-all duration-300">
        <div className="px-3 mx-auto md:max-w-screen-md sm:max-w-screen-sm">
          <nav className="flex justify-between py-4">
            <div className="flex items-center gap-x-6">
              <button className="text-lg font-semibold" href="#">
                Suryo Adi Nugroho
              </button>
              <ul className="hidden sm:flex gap-x-3">
                <li
                  className={`font-md text-base border-b-2 border-transparent ${
                    toggle ? "hover:border-white" : "hover:border-black"
                  } cursor-pointer`}
                >
                  Works
                </li>
                <li
                  className={`font-md text-base border-b-2 border-transparent ${
                    toggle ? "hover:border-white" : "hover:border-black"
                  } cursor-pointer`}
                >
                  Posts
                </li>
                <li
                  className={`font-md text-base border-b-2 border-transparent ${
                    toggle ? "hover:border-white" : "hover:border-black"
                  } cursor-pointer`}
                >
                  Source
                </li>
              </ul>
            </div>
            <div className="relative flex gap-x-3">
              <button
                // onClick={handleToggleMenu}
                ref={toggleMenuRef}
                className="flex items-center order-2 px-2 py-3 bg-black hover:bg-gray-600 rounded-md sm:hidden"
              >
                <i className="text-white ri-menu-line ri-lg"></i>
              </button>
              <input
                type="checkbox"
                id="checkbox"
                onChange={handleToggleDarkMode}
                className="absolute hidden checkbox"
              />
              <label
                htmlFor="checkbox"
                className="relative flex items-center self-center justify-between order-1 h-4 px-1 mr-2 bg-black cursor-pointer w-9 rounded-3xl transform label"
              >
                <i className="text-white ri-contrast-2-line ri-xs"></i>
                <i className="text-yellow-300 ri-sun-line ri-xxs"></i>
                <i class="ri-checkbox-blank-circle-fill ri-xs absolute transition-transform delay-200 ease-linear text-white ball"></i>
              </label>

              {toggleMenu && (
                <div
                  className={`w-44 rounded-md p-3 ${
                    toggle ? "bg-black text-white" : "bg-white text-black"
                  } absolute right-0 top-full mt-2 border-2`}
                  ref={menuModalRef}
                >
                  <ul className="flex flex-col w-auto gap-y-2">
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? "hover:border-white" : "hover:border-black"
                      } cursor-pointer max-w-max`}
                    >
                      About
                    </li>
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? "hover:border-white" : "hover:border-black"
                      } cursor-pointer max-w-max`}
                    >
                      Works
                    </li>
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? "hover:border-white" : "hover:border-black"
                      } cursor-pointer max-w-max`}
                    >
                      Posts
                    </li>
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? "hover:border-white" : "hover:border-black"
                      } cursor-pointer max-w-max`}
                    >
                      View Source
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto mt-40 sm:max-w-screen-sm flex-1">
        <section className="mb-8 text-center">
          <img
            src={myImg}
            className="w-40 h-40 mx-auto mb-2 rounded-full"
            alt="Suryo Adi Nugroho"
          />
          <h1 className="text-2xl font-bold">Suryo Adi Nugroho</h1>
          <span className="text-xl font-semibold">Frontend Developer</span>
        </section>

        <section className="px-6 mb-10">
          <h2 className="inline-block mb-2 text-lg font-semibold border-b-2 border-gray-500">
            Work
          </h2>
          <p className="indent-6">
            Suryo is a Frontend Developer based in Yogyakarta, Indonesia. He has
            experienced with Fullstack Javascript and doing frontend web
            development for almost 2 years. Currently he's working as Frontend
            Developer at Adactive Asia.
          </p>
        </section>

        <section className="px-6 mb-10">
          <h2 className="inline-block mb-2 text-lg font-semibold border-b-2 border-gray-500">
            Bio
          </h2>

          <ul>
            <li>
              <div className="mr-2 inline-block font-semibold">1995</div>
              <span>Born in Yogyakarta, Indonesia</span>
            </li>
            <li>
              <div className="mr-2 inline-block font-semibold">2020</div>
              <span>
                Completed Bachelor Degree in Informatics at Islamic University
                of Indonesia
              </span>
            </li>
            <li>
              <div className="mr-2 inline-block font-semibold">
                2021 to present
              </div>
              <span>Worked at Adactive Asia Singapore</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="flex justify-center py-6">
        <span className="text-sm opacity-40">
          &copy; 2022 Suryo Adi Nugroho. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default IndexPage;
