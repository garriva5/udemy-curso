import ItemFurt from "./ItemFurt";

const Listfrut = ({fruts}) => {
// const fruts = ['🍆','🍗','🌷','🍔'];
        return <ul> 
        {/* // de esta forma se puede iterar un array, devolviedo con li y pintalo como nosotros querramos  */}
            {fruts.map((frut, index) => (
                    <ItemFurt key= {index} frutas={frut}/>
            ))}
        </ul>
    };

    export default Listfrut;