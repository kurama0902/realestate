'use client'

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { MobMenu } from '../mobMenu/mobMenu';


import s from './header.module.css';

export const Header = () => {

    const [headerVisibility, setHeaderVisibility] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [mobMenuVisibility, setMobMenuVisibility] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = prevScrollPos < currentScrollPos;
            setHeaderVisibility(!isScrollingDown);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);


    const setVisibility = () => {
        if(mobMenuVisibility === null) {
            document.body.style.overflow = "hidden";
        }

        if(mobMenuVisibility === true) {
            document.body.style.overflow = "scroll";
        }

        if(mobMenuVisibility === false) {
            document.body.style.overflow = "hidden";
        }

        setMobMenuVisibility(!mobMenuVisibility)
    }

    return (
        <>
        <header className={`${s.headerWrap} ${headerVisibility === true ? s.visible : headerVisibility !== null && s.invisible}`}>
            <Image className={s.call} src='/call.svg' width={50} height={50} alt='call' unoptimized />
            <div className={s.logoWrap}>
                <Image className={s.logo} src='/logo.svg' width={56} height={29} alt='logo' unoptimized />
            </div>
            <button onClick={setVisibility} className={s.openBtn}>
                {
                    mobMenuVisibility === null 
                    ? 
                    <Image className={s.mobMenu} src='/mobMenu.svg' width={50} height={50} alt='mob menu' unoptimized />
                     : 
                     mobMenuVisibility 
                     ?
                      <Image src='/cross.svg' className={s.closeMenu} width={50} height={50} alt='close' unoptimized/>
                     :
                     <Image className={s.mobMenu} src='/mobMenu.svg' width={50} height={50} alt='mob menu' unoptimized />
                }

            </button>
            <div className={s.links}>
                <div className={s.linkWrap}>
                    <Link href='#' className={`${s.link} ${s.fLink}`}>for ukrainians</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>catalog</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>buy</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>sell</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>blog</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>about</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>services</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>Contact</Link>
                </div>
                <div className={s.linkWrap}>
                    <Link href='#' className={s.link}>eng</Link>
                </div>
            </div>
        </header>
        {mobMenuVisibility && <MobMenu />}</>

    )
}