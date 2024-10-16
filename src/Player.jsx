export default function Player({player}) {
    console.log(player);
    return (
        <div>
            <h3>Player: {player.name}</h3>
            <p>Age: {player.age}</p>
        </div>
    )
}