import Image from 'next/image'
import { BellIcon, ClockIcon, LightBulbIcon, GlobeAltIcon, BoltIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import Menu from './menu'
import { Locale } from './dictionaries'
import { getDictionary } from './dictionaries'

type Props = {
  params: {
    lang: Locale 
  }
}

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang)
  const year = (new Date()).getFullYear();

  return (
    <main className="flex flex-col items-center justify-between px-4">
      <div className="header max-w-screen-xl w-full items-center justify-between flex">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className="dark:invert"
            width={163}
            height={30}
            priority
          />
        </a>
        <Menu menuLinks={{ 
          about: dict.menu.about,
          benefits: dict.menu.benefits,
          install: dict.menu.install
        }} />
      </div>
      <div className="max-w-screen-xl mb:10 md:mb-20">
        <div className="main-screen flex flex-col md:flex-row">
          <div className="left">
            <div className="main-text text-white relative mb-4 md:mb-8">{dict.main_text}</div>
            <div className="main-text-bottom text-white lg:text-2xl">{dict.main_text_bottom}</div>
            <a href="#" className="install-btn text-lg font-bold py-4 px-9 inline-block bg-white rounded-xl hover:bg-slate-50 active:bg-slate-100">{dict.menu.install}</a>
          </div>
          <div className="hidden md:block">
            <Image
              src="/owl.png"
              className="main-img"
              alt="owl"
              width="474"
              height="702"
            />
          </div>
        </div>
        <article>
          <div className="title relative text-center font-bold mb-4" id="about">{dict.menu.about}</div>
          <p>{dict.about.multiple_tabs}</p>
          <p dangerouslySetInnerHTML={{__html: dict.about.truly_stick}}></p>
          <p>{dict.about.grabs_attention}</p>
          <p>{dict.about.improve_retention}</p>
        </article>
        <article>
          <div className="title-1 relative font-bold" id="benefits">{dict.menu.benefits}</div>
          <div className="flex flex-col lg:flex-row">
            <ul className="list text-white w-full lg:pr-7 lg:w-2/4">
              <li>
                <span className="font-bold flex md:inline-flex mb-1 md:mb-0"><BellIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> {dict.benefits.organization.title}</span> <span>{dict.benefits.organization.text}</span>
              </li>
              <li>
                <span className="font-bold flex md:inline-flex mb-1 md:mb-0"><ClockIcon className="relative top-1 h-6 w-6 6 mr-1" aria-hidden="true" /> {dict.benefits.schedule.title}</span> {dict.benefits.schedule.text}
              </li>
              <li>
                <span className="font-bold flex md:inline-flex mb-1 md:mb-0"><LightBulbIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> {dict.benefits.integration.title}</span> {dict.benefits.integration.text}
              </li>
              <li>
                <span className="font-bold flex md:inline-flex mb-1 md:mb-0"><GlobeAltIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> {dict.benefits.universality.title}</span> {dict.benefits.universality.text}
              </li>
              <li>
                <span className="font-bold flex md:inline-flex mb-1 md:mb-0"><BoltIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> {dict.benefits.focus.title}</span> {dict.benefits.focus.text}
              </li>
              <li>
                <span className="font-bold flex md:inline-flex mb-1 md:mb-0"><Cog6ToothIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> {dict.benefits.functionality.title}</span> {dict.benefits.functionality.text}
              </li>
            </ul>
            <div className="mb-8 w-full lg:w-2/4">
              <iframe width="100%" height="360" src="https://www.youtube.com/embed/Lr-6NxNAQQc?si=__T4nCw5U9KpT6Ya" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <p className="max-width-858">{dict.benefits.learning_master}</p>
          <p className="font-bold mb-10" dangerouslySetInnerHTML={{__html: dict.benefits.install}}></p>
          <a href="#" className="install-btn text-lg font-bold py-4 px-9 inline-block bg-white rounded-xl hover:bg-slate-50 active:bg-slate-100">{dict.menu.install}</a>
        </article>
      </div>
      <footer className="footer flex justify-center items-center max-w-screen-xl w-full border-t border-white py-4 md:py-10">
        <Image
          src="/logo-bot.png"
          alt="logo-bot"
          width={184}
          height={55}
        />
        <span className="text-white font-bold">@{year}</span>
      </footer>
    </main>
  )
}
