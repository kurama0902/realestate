import Image from 'next/image'
import s from './whatWeOffer.module.css'
import { MagneticButton } from '../MagneticButton/MagneticButton'

export const WhatWeOffer = () => {
    return (
        <section className={s.whatWeOfferWrap}>
            <div className={s.houseImgWrap}>
                <Image className={s.houseImg} src='/house.png' width={1200} height={140} alt='house image' />
                <div className={s.animationCircleWrap}>
                    <div className={s.fCircle}></div>
                    <div className={s.sCircle}></div>
                </div>
            </div>
            <div className={s.whatWeOfferDetailedWrap}>
                <div className={s.whatWeOfferDetailed}>
                    <div className={s.imagesWrap}>
                        <Image className={s.housePoolImg} src='/housePool.png' width={534} height={691} alt='house and pool' />
                        <Image className={s.bathImg} src='/bath.png' width={387} height={240} alt='bath' />
                        <MagneticButton
                            className="learnMore"
                            scale={2}
                            tollerance={.8}
                            speed={.3}
                            borderRadius='50%'
                        >
                            LEARN MORE
                        </MagneticButton>
                    </div>
                    <div className={s.whatWeOfferText}>
                        <h1 className={s.whatText}>what</h1>
                        <h1 className={s.weOfferText}>we offer</h1>
                        <p className={s.description}>Our architecture encourages co-existence. So does our business philosophy. We have abolished barriers of hierarchy and departmentalization to work as a single team. We believe in full transparency — and of course, that entails our clients.</p>
                    </div>
                    <MagneticButton
                        className="slearnMore"
                        scale={2}
                        tollerance={.8}
                        speed={.3}
                        borderRadius='50%'
                    >
                        LEARN MORE
                    </MagneticButton>
                </div>
            </div>
        </section>
    )
}