import Image from "next/image";
import axios from "../axios";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [dataNo, setDataNo] = useState(1);
  const [data, setData] = useState();
  const [sample, setSample] = useState();
  const arr = ["h", "e", "l", "d", "p", "o"];

  useEffect(() => {
    arr.map((item, index) => {
      index == dataNo && setData(item);
    });
  }, [dataNo]);

  const appId = 1766720;
  useEffect(() => {
    async function fetchDetails() {
      try {
        const game = await axios.get(`?appids=${appId}`);
        setSample(game.data[appId].data.name);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDetails();
  }, []);
  console.log(sample);
  return (
    <section>
      {/* game data  */}
      <div>
        {/* <Image src="hello" width={1080} height={1920} alt="hello" /> */}
        <span>{data}</span>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis
          minus suscipit.
        </h1>
        <p>
          Starting at <span>3900</span>
        </p>
        <div>
          <button>Buy Now</button>
          <button>Add to Wishlist</button>
        </div>
      </div>

      {/* games list  */}
      {arr.map((item, index) => (
        <div key={item} onClick={() => setDataNo(index)}>
          {/* <Image src="hello" width={1080} height={1920} alt="hello" /> */}
          <h1>destiny 2</h1>
        </div>
      ))}
      <div>{String(sample)}</div>
    </section>
  );
};

export default Header;
