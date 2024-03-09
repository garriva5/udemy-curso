import img1  from "./assets/imagenes/img.jpg";

import Mybutton from "./componets/MyButton";
import WelcomeText from "./componets/WelcomeText";
import Listfrut from "./componets/fruts/Listfrut";
import ButtonState from "./componets/Buttonstate";


function App() {
    const title = 'Mi titulo desde una constante';
    const classTitle = "text/center";
    // const pathImg = "src/assets/imagenes/img.jpg";
    const user = true;
    const fruts = ['🍆', '🍗', '🌷', '🍔'];
    const frutstwo = ['🥚', '🥞', '🥙', '🍟'];

    return (
        <>
            <ButtonState />
            <h1 className={classTitle}>{title}</h1>
            <img src={img1} alt={`imagen-${title}`} />

            <Mybutton text='Boton 1' />
            <Mybutton text='Boton 2' />
            <Mybutton text='Boton 3' />

            {/* Respuesta falsa con el operador && perimire que else no este */}
            <WelcomeText user={user} />

            {/* se utilizaron los dos componentes para dar como respuesta utilizando un operador terniario user ? */}
            {/* {user ? <OnlineText/>: < OfflineText/>} */}
            <Listfrut fruts={fruts} />
            <Listfrut fruts={frutstwo} />


        </>
    );
}

export default App;