import ImageComponent from '@/src/components/elements/image/page'
import ButtonWithLoader from '@/src/components/elements/buttonLoader/page'
import style from './cardComponent.module.css'

export default function Card(props: {
  title: string
  description: string
  href: string
  image: string
}) {
  return (
    <>
      <div className={style.cards}>
        <div className={style.image}>
          <ImageComponent
            src={props.image}
            alt={props.title}
            height={1260}
            width={2240}
          />
        </div>
        <div className="py-6">
          <div className={style.head}>
            <h5 className={style.h5}>{props.title}</h5>
          </div>
          <p className={style.p}>{props.description}</p>
        </div>
        <ButtonWithLoader href={props.href} className="w-full">
          Click Here
        </ButtonWithLoader>
      </div>
    </>
  )
}
