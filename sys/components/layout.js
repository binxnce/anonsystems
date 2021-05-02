import Link from 'next/link'
import {useEffect} from "react";

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, page }) {
    function isActive(item) {
        if (item === page) {
            return "is-active";
        }
        return ""
    }

    const totalCount = 4;
    let randomBackground = () => {
        const num = Math.ceil(Math.random() * totalCount);
        document.getElementById("main").style.backgroundImage = 'url("/bg/'+num+'.jpeg")';
    }

    useEffect(() => {
        randomBackground()

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }
    });

    return (
        <section className="hero is-fullheight is-info background-image" id="main">
            <div className="hero-head">
                <header className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src="/img/logo.png" alt="Logo" width="400px" height="400px"/>
                            </a>
                            <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
                        </div>
                        <div id="navbarMenuHeroC" className="navbar-menu">
                            <div className="navbar-end">
                                <Link href="/"><a className={"navbar-item " + isActive("home") }>
                                    Home
                                </a></Link>
                                <Link href={"/app/board/"}><a className={"navbar-item " + isActive("board")}>
                                    Board
                                </a></Link>

                                <a className="navbar-item" href="https://github.com/anon-systems/">Github</a>
                                <a className="navbar-item" href="https://twitter.com/SCMAGLEV1">Twitter</a>
                                <span className="navbar-item">
            </span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>


            <main>{children}</main>

            <div className="hero-foot">
                <nav className="tabs">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a
                                href="https://twitter.com/akinecoco987/status/1379738294204780547">Background by
                                @akinecoco987</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}