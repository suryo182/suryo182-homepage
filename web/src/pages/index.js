import React, { useEffect, useState } from 'react';
import myImg from '../images/suryo.jpg';

const IndexPage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggleDarkMode = () => {
    setToggle(!toggle);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [toggle]);

  return (
    <div className="h-full">
      <header className="fixed top-0 left-0 w-full z-100 transition-all duration-300">
        <div className="md:max-w-screen-md sm:max-w-screen-sm mx-auto px-3">
          <nav className="flex justify-between py-4">
            <div className="flex gap-x-6 items-center">
              <button className="text-lg font-semibold" href="#">
                Suryo Adi Nugroho
              </button>
              <ul className="sm:flex gap-x-3 hidden">
                <li
                  className={`font-md text-base border-b-2 border-transparent ${
                    toggle ? 'hover:border-white' : 'hover:border-black'
                  } cursor-pointer`}
                >
                  Works
                </li>
                <li
                  className={`font-md text-base border-b-2 border-transparent ${
                    toggle ? 'hover:border-white' : 'hover:border-black'
                  } cursor-pointer`}
                >
                  Posts
                </li>
                <li
                  className={`font-md text-base border-b-2 border-transparent ${
                    toggle ? 'hover:border-white' : 'hover:border-black'
                  } cursor-pointer`}
                >
                  Source
                </li>
              </ul>
            </div>
            <div className="flex gap-x-3 relative">
              <button
                onClick={handleToggleMenu}
                className="flex items-center bg-black px-2 py-3 hover:bg-gray-600 rounded-md sm:hidden order-2"
              >
                <i className="ri-menu-line ri-lg text-white"></i>
              </button>
              <input
                type="checkbox"
                id="checkbox"
                onChange={handleToggleDarkMode}
                className="hidden absolute checkbox"
              />
              <label
                htmlFor="checkbox"
                className="w-9 h-4 px-1 self-center bg-black flex rounded-3xl items-center justify-between relative transform cursor-pointer label mr-2 order-1"
              >
                <i className="ri-contrast-2-line ri-xs text-white"></i>
                <i className="ri-sun-line ri-xxs text-yellow-300"></i>
                <i class="ri-checkbox-blank-circle-fill ri-xs absolute transition-transform delay-200 ease-linear text-white ball"></i>
              </label>

              {toggleMenu && (
                <div
                  className={`w-44 rounded-md p-3 ${
                    toggle ? 'bg-black text-white' : 'bg-white text-black'
                  } absolute right-0 top-full mt-2 border-2`}
                >
                  <ul className="flex flex-col gap-y-2 w-auto">
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? 'hover:border-white' : 'hover:border-black'
                      } cursor-pointer max-w-max`}
                    >
                      About
                    </li>
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? 'hover:border-white' : 'hover:border-black'
                      } cursor-pointer max-w-max`}
                    >
                      Works
                    </li>
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? 'hover:border-white' : 'hover:border-black'
                      } cursor-pointer max-w-max`}
                    >
                      Posts
                    </li>
                    <li
                      className={`font-md text-base border-b-2 border-transparent ${
                        toggle ? 'hover:border-white' : 'hover:border-black'
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

      <main className="sm:max-w-screen-sm mx-auto mt-40">
        <section className="mb-8 text-center">
          <img
            src={myImg}
            className="h-40 w-40 rounded-full mx-auto mb-2"
            alt="Suryo Adi Nugroho"
          />
          <h1 className="text-2xl font-bold">Suryo Adi Nugroho</h1>
          <span className="text-xl font-semibold">Frontend Developer</span>
        </section>

        <section className="mb-14 px-6">
          <h2 className="text-lg font-semibold border-b-2 border-black inline-block mb-2">
            Work
          </h2>
          <p className="indent-6">
            Suryo is a Frontend Developer based in Yogyakarta, Indonesia. He has
            experienced with Fullstack Javascript and doing frontend web
            development for almost 2 years. Currently he's working as Frontend
            Developer at Adactive Asia.
          </p>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default IndexPage;
