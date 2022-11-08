
export default function NavBar(){

    return(
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" >
                        {/*<img src="../../public/ECLOFOGRAY.png" width="148" height="147"/> */}
                        EC </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Nowy Projekt
                        </a>


                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Wybór projektu
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    Lista do uzupełnienia
                                </a>

                                <hr className="navbar-divider"/>
                                    <a className="navbar-item">
                                       Opcja
                                    </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Zapisz</strong>
                                </a>
                                <a className="button is-light">
                                    Wygeneruj Raport
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}