import React from 'react'
import QuestionMarkCircleIcon from '@/src/components/layout/footer/QuestionMarkCircleIcon'
import BookOpenIcon from '@/src/components/layout/footer/BookOpenIcon'

const features = [
  {
    name: 'Quiz',
    description: 'Engage in interactive quizzes for fun learning.',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Books',
    description: 'Access in our Books Download section.',
    icon: BookOpenIcon,
  },
]

export default function Feature() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Codebloglab Feature
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need available here
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
