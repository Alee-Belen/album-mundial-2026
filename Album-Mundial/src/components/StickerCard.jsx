function StickerCard(props) {

    let color = "";

    if (props.status === "tengo") {
        color = "lightgreen";
    }

    if (props.status === "repetida") {
        color = "khaki";
    }

    if (props.status === "falta") {
        color = "lightgray";
    }

    return (
        <div
            style={{backgroundColor: color, padding: "15px", margin: "10px", borderRadius: "10px", color: "black"}}
            className="sticker-card"
            onClick={props.onStatusChange}
        >
            <h3>{props.number}</h3>

            <p>{props.name}</p>

            <p>{props.group}</p>
        </div>
    );
}

export default StickerCard;