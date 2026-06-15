import "./App.css";
import { stickers } from "./data/stickers";
import StickerCard from "./components/StickerCard";
import { useState } from "react";

function App() {
    console.log(stickers);

    const [statuses, setStatuses] = useState({});

    const handleStatusChange = (id) => {
        const currentStatus = statuses[id] || "falta";

        let newStatus = "";

        if (currentStatus === "falta") {
            newStatus = "tengo";
        } else if (currentStatus === "tengo") {
            newStatus = "repetida";
        } else {
            newStatus = "falta";
        }

        setStatuses({
            ...statuses,
            [id]: newStatus
        });
    };

    return (
        <>
            <h1>Álbum Mundial 2026</h1>

            {
                stickers.slice(0, 5).map((sticker) => (
                    <StickerCard
                        key={sticker.id}
                        number={sticker.code}
                        name={sticker.name}
                        group={sticker.group}
                        status={statuses[sticker.id] || "falta"}
                        onStatusChange={() => handleStatusChange(sticker.id)}
                    />
                ))
            }
        </>
    );
}

export default App;