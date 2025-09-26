import React, {useState} from 'react';
import Nav from "./Nav.jsx";

function Home(){
    const [tema, setTema] = useState("");

    return (
        <>
            <Nav/>

            <main className='home'>
                <h2 className='homeTitle'>Crear un tema</h2>
                <form className='homeForm'>
                    <div className='home__container'>
                        <label htmlFor="tema">Titulo / Descripcion</label>
                        <input type="text" name='tema'onChange={(e) => setTema(e.target.value)}/>
                    </div>

                    <button className='homeBtn'>Crear Tema</button>
                </form>
            </main>
        </>
    );
}

export default Home;