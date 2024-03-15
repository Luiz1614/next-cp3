import './Style.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="Header">
                    <img className = "imagem-header" src="/logoCinema.jpeg" alt="" />
                    <h1 className = "titulo-header">Os melhores filmes estão aqui!</h1>
                </div>
            </header>
        </>
    )
}

export default Header;