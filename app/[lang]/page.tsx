import Image from 'next/image'
import { Locale } from './dictionaries'
import { getDictionary } from './dictionaries'
import Accordion from './components/Accordion'
import Button from './components/Button'
import { Dictionary } from './interfaces/Dictionary'
import 'material-icons/iconfont/material-icons.css'

type Props = {
  params: {
    lang: Locale 
  }
}

export default async function Home({ params: { lang } }: Props) {
  const dict: Dictionary = await getDictionary(lang);
  const year = (new Date()).getFullYear();
  const faqData = dict.faq;

  return (
    <main className="max-w-3xl px-4 md:px-0 mx-auto w-full">
      <header className="header flex items-center justify-between py-2 mb-20">
        <a href="/" className="flex">
          <Image
            src="/logo.png"
            alt="Logo"
            className="dark:invert"
            width={157}
            height={27}
            priority
          />
        </a>
        <Button className="flex items-center" url="https://destream.net/live/syntaxorange/donate" blank="true">
          <span className="material-icons-outlined !text-lg mr-1.5">coffee</span> 
          <span className="text-sm">{dict.button.donate}</span>
        </Button>
      </header>
      <div className="flex flex-col main-text mx-auto mb-9 text-center max-w-[592px]">
        <h1 className="title text-4xl	font-medium mb-6" dangerouslySetInnerHTML={{ __html: dict.title }}></h1>
        <div className="description text-sm leading-6 mb-9 text-gray-600" dangerouslySetInnerHTML={{ __html: dict.description }}></div>
        <div>
          <Button 
            className="button text-sm inline-flex items-center justify-center bg-[#6e4bbc] hover:bg-[#5d33bb] text-white rounded-md py-2 px-4"
            url="https://chromewebstore.google.com/detail/topic-meister/igcookmgmogijokbhikdoggmkidbnhnk">
              <Image src="/chrome-logo.png" alt="Chrome logo" className="mr-2.5" width={24} height={24} priority/>
              <span>{dict.button.install}</span>
          </Button>
        </div>
      </div>
      <section>
        <div className="browserlist mb-9 text-center">
          <div className="text-sm text-gray-600 mb-3">{dict.browserlistTitle}</div>
          <Image
            src="/browserlist.png"
            alt="browserlist"
            className="mx-auto"
            width={130}
            height={24}
            priority
          />
        </div>
        <iframe width="100%" height="314" className="mx-auto mb-9 max-w-[560px]" src="https://www.youtube.com/embed/Lr-6NxNAQQc?si=G-m1qbjF1t6je5BH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
      <section className="mb-9">
        <h2 className="font-medium text-2xl mb-6">FAQ</h2>
        <Accordion faqData={faqData} />
      </section>
      <footer className="text-sm text-gray-600 pb-2">
        <p>Contact: <a href="mailto:syntaxorange@gmail.com">syntaxorange@gmail.com</a></p>
        <p>Copyright © {year} Topic Meister</p>
      </footer>
    </main>
  )
}
