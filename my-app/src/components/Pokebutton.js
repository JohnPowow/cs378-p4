function Pokebutton({ Pokemon, menuStatee }) {

    const clickCheck = () => {
        menuStatee(true);
        window.alert('Penis!')
    }

    return (
        <button onClick={clickCheck}> {Pokemon} button</button>
    )
}
export default Pokebutton;