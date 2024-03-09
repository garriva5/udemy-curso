const Mybutton = () => {
    return <button>Soy button</button>;
};

const App = () => {
const title = 'Mi titulo desde una constante';
const classTitle = "text/center";
const pathImg = "https://picsum.photos/500/500";


    return (
        <>
            <h1 className={classTitle}>{title}</h1>;
            <img src={pathImg} alt={`imagen-${title}`} />
            <Mybutton></Mybutton>
        </>
    );
};

export default App;