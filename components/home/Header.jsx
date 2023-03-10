import Image from "next/image";
import axios from "../axios";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [gameData, setGameData] = useState();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const game = await axios.get("?cc=IND&l=english");
        setGameData([...new Set(game.data.top_sellers.items)]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDetails();
  }, []);

  return (
    <section>
      {/* games list  */}
      <div className="flex overflow-scroll">
        {gameData?.map((item) => (
          <div key={item.id} className="relative text-white pr-3 last:pr-0">
            <div className=" w-[400px]">
              <Image
                src={item.header_image}
                width={1080}
                height={1920}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Header;
