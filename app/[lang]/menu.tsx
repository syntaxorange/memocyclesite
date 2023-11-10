'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Menu({ menuLinks }: any) {
  const [isVisible, setIsVisible] = useState(false);
  
  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <ul className="text-white menu font-light hidden sm:flex">
        <li className="mr-4 md:mr-7">
          <a className="hover:underline underline-offset-4 decoration-1" href="#about">{menuLinks.about}</a>
        </li>
        <li className="mr-4 md:mr-7">
          <a className="hover:underline underline-offset-4 decoration-1" href="#benefits">{menuLinks.benefits}</a>
        </li>
        <li>
          <a href="https://chromewebstore.google.com/detail/topic-meister/igcookmgmogijokbhikdoggmkidbnhnk" className="text-base md:text-lg font-bold py-3 px-7 border border-white rounded-xl hover:bg-slate-50/5 active:bg-slate-50/10">{menuLinks.install}</a>
        </li>
      </ul>
      <div className={`${isVisible ? '' : 'hidden'} fixed inset-0 z-50 overflow-hidden sm:hidden`}>
        <div className="absolute backdrop-blur bg-slate-900/25 inset-0" onClick={handleClick}></div>
        <div className="mobile-menu fixed h-full bg-white z-10 w-80 top-0 right-0">
          <div className="mobile-menu-header py-5 pl-5 pr-4 flex justify-between border-b">
            <a href="/">
              <Image
                src="/mobile-logo.png"
                alt="mobile-logo"
                width="35"
                height="34"
              />
            </a>
            <XMarkIcon width="30" height="30" onClick={handleClick} />
          </div>
          <ul className="font-bold px-7 py-4 border-b">
            <li className="mb-4">
              <a className="block py-2" href="#about">{menuLinks.about}</a>
            </li>
            <li className="mb-4">
              <a className="block py-2" href="#benefits">{menuLinks.benefits}</a>
            </li>
            <li className="mb-4">
              <a className="block py-2" href="#">{menuLinks.install}</a>
            </li>
          </ul>
        </div>
      </div>
      <Bars3Icon className="text-white sm:hidden" width="24" height="24" onClick={handleClick} />
    </>
  )
}