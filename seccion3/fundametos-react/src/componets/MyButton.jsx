const Mybutton = ({text}) => {
    // console.log(props);

const handleClickButton = (title) => {
    console.log("Handle click: " + title)
};

    return (<button onClick={ () =>handleClickButton(text)}>{text}</button> );
};

export default Mybutton;