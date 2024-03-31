import Link from 'next/link'
import style from './footer.module.css'
import FaReadme from './FaReadme'
import FaPeopleArrows from './FaPeopleArrows'
import QuestionMarkCircleIcon from './QuestionMarkCircleIcon'
import BookOpenIcon from './BookOpenIcon'
import Newsletter from './newsletter'

const footer = [
  {
    id: 0,
    name: 'Quiz',
    link: '/quiz',
    icon: QuestionMarkCircleIcon,
  },
  {
    id: 1,
    name: 'Classes',
    link: '/class',
    icon: BookOpenIcon,
  },
]

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Stay in the loop with the latest news, and tips straight to your
              inbox! Don&apos;t miss out on valuable insights and exciting
              updates from us.
            </p>
            <Newsletter />
          </div>
          <dl className="grid grid-cols-2 gap-x-8 md:gap-y-6 gap-y-10 lg:pt-2">
            {footer.map((footer) => (
              <div className={style.detailInner} key={footer.name}>
                <div className={style.detail}>
                  <footer.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <Link href={footer.link}>
                  <dt className={style.text}>{footer.name}</dt>
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </footer>
  )
}
