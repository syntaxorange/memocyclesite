import Image from 'next/image'
import { BellIcon, ClockIcon, LightBulbIcon, GlobeAltIcon, BoltIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const year = (new Date()).getFullYear();
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="header max-w-screen-xl w-full items-center justify-between lg:flex">
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
        <ul className="flex text-white menu font-light">
          <li className="mr-7">
            <a className="hover:underline underline-offset-4 decoration-1" href="#about">О расширении</a>
          </li>
          <li className="mr-7">
            <a className="hover:underline underline-offset-4 decoration-1" href="#benefits">Преимущества</a>
          </li>
          <li>
            <a href="#" className="text-lg font-bold py-3 px-7 border border-white rounded-xl hover:bg-slate-50/5 active:bg-slate-50/10">Установить</a>
          </li>
        </ul>
      </div>
      <div className="max-w-screen-xl mb-20">
        <div className="main-screen flex">
          <div className="left">
            <div className="main-text text-white relative mb-8">Topic Meister - ваш ключ к эффективному обучению!</div>
            <div className="main-text-bottom text-white text-2xl">Расширение доступно для браузеров Chrome и Edge.</div>
            <a href="#" className="install-btn text-lg font-bold py-4 px-9 inline-block bg-white rounded-xl hover:bg-slate-50 active:bg-slate-100">Установить</a>
          </div>
          <div>
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
          <div className="title relative text-center font-bold mb-4" id="about">О расширении</div>
          <p>Вы устали от множества открытых вкладок, бесконечного скроллинга и потери концентрации во время изучения новых тем? "Topic Meister" - это инновационное расширение для вашего браузера, которое сделает процесс обучения более увлекательным, упорядоченным и продуктивным!</p>
          <p>Часто мы заполняем нашу память информацией, которая забывается в течение короткого времени. <span className="underline underline-offset-4">Но с "Topic Meister" каждая новая тема, которую вы изучаете, станет по-настоящему запоминающейся!</span> Создавайте собственные топики и заполняйте их концепциями, которые вы хотите усвоить - будь то ключевые понятия из учебника, новые термины или факты.</p>
          <p>Функциональность "Topic Meister" включает грамотное интегрирование концепций в ваш браузерный опыт. Настроив таймер, вы можете установить интервалы появления попап-окон с концепциями непосредственно на страницах, которые вы просматриваете. Вместо того, чтобы отвлекаться на переключение между вкладками или поиском дополнительной информации, "Topic Meister" привлечет ваше внимание к существенным понятиям, прямо там, где вы уже находитесь!</p>
          <p>Используйте "Topic Meister" для любого предмета или области знаний. Будь то учебные материалы, иностранные языки, профессиональное развитие или просто любопытство - наше расширение поможет вам углубить понимание и улучшить запоминание информации.</p>
        </article>
        <article>
          <div className="title-1 relative font-bold" id="benefits">Преимущества</div>
          <ul className="list text-white">
            <li>
                <span className="font-bold inline-flex"><BellIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> Организация знаний:</span> Создавайте топики и структурируйте концепции для более эффективного обучения.
            </li>
            <li>
                <span className="font-bold inline-flex"><ClockIcon className="relative top-1 h-6 w-6 6 mr-1" aria-hidden="true" /> Гибкое расписание:</span> Установите интервалы появления концепций по таймеру, чтобы оптимизировать запоминание.
            </li>
            <li>
                <span className="font-bold inline-flex"><LightBulbIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> Интеграция в браузер:</span> Попап-окна с концепциями появляются непосредственно на страницах, которые вы просматриваете.
            </li>
            <li>
                <span className="font-bold inline-flex"><GlobeAltIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> Универсальность:</span> Применяйте расширение для изучения любой темы или предмета.
            </li>
            <li>
                <span className="font-bold inline-flex"><BoltIcon className="relative top-1 h-6 w-6 mr-1" aria-hidden="true" /> Максимальная концентрация:</span> Избавьтесь от отвлекающих факторов и фокусируйтесь на существенных понятиях.
            </li>
          </ul>
          <p className="max-width-858">Не ограничивайте свой потенциал - станьте мастером в обучении с помощью "Topic Meister"! Улучшите свои навыки запоминания и усвоения информации, повысьте эффективность своего учебного процесса и достигните новых высот в своих академических или профессиональных целях.</p>
          <p className="font-bold mb-10">Установите "Topic Meister" сейчас и откройте<br /> новые горизонты обучения!</p>
          <a href="#" className="install-btn text-lg font-bold py-4 px-9 inline-block bg-white rounded-xl hover:bg-slate-50 active:bg-slate-100">Установить</a>
        </article>
      </div>
      <footer className="footer flex justify-center items-center max-w-screen-xl w-full border-t border-white pt-10 pb-14">
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
