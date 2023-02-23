import Pokecalls from "./Pokecalls";
function Window() {
    const pokemonArray = ["pikachu", "ditto"]
    const [count, setCount] = useState(2);

    const generateButtons = () => {
        let buttons = [];
        for (let i = 0; i < count; i++) {
            buttons.push(<Pokecalls pokemon={pokemonArray[i]} />);
        }
        return buttons;
    }

    return (
        <div>
            {generateButtons()}
        </div>
    );
};

export default Window;