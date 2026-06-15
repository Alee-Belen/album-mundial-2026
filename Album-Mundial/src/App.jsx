import "./App.css";
import { stickers } from "./data/stickers";
import StickerCard from "./components/StickerCard";

function App() {
  console.log(stickers);

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
                    status="falta"
                />
            ))
        }
    </>
);
}

export default App;