import Link from "next/link"

import s from './mobMenu.module.css';

export const MobMenu = () => {
    return (
        <div className={s.mobMenuWrap}>
            <nav className={s.links}>
                <Link className={s.link} href="#">ukrainians</Link>
                <Link className={s.link} href="#">Catalog</Link>
                <Link className={s.link} href="#">BUY</Link>
                <Link className={s.link} href="#">SELL</Link>
                <Link className={s.link} href="#">BLOG</Link>
                <Link className={s.link} href="#">SERVICES</Link>
                <Link className={s.link} href="#">About</Link>
                <Link className={s.link} href="#">Contact</Link>
                <div className={s.engRuUA}>
                    <Link href='' className={s.eng}>ENG</Link>
                    <Link href='' className={s.ru}>RU</Link>
                    <Link href='' className={s.ua}>UA</Link>
                </div>
            </nav>
        </div>
    )
}