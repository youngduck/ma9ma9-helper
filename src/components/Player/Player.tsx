import React from "react";
import styled from "styled-components";

// interface Grade {}

interface Info {
  name: string;
  mainWeather: string;
  subWeather: string;
}
interface Stats {
  power: number;
  contact: number;
  speed: number;
  throwing: number;
  deffense: number;
}
interface Hitter {
  info: Info;
  stats: Stats;
}

// interface PitcherStats {}

const Player = () => {
  const hitterList: Hitter[] = [
    {
      info: {
        name: "lee",
        mainWeather: "rain",
        subWeather: "sun",
      },
      stats: { power: 20, contact: 10, speed: 50, throwing: 50, deffense: 20 },
    },
    {
      info: {
        name: "man",
        mainWeather: "rain",
        subWeather: "sun",
      },
      stats: { power: 70, contact: 10, speed: 70, throwing: 50, deffense: 20 },
    },
  ];

  return (
    <>
      <Div>
        {hitterList.map((hitteritem) => (
          <div>
            <div>{hitteritem.info.name}</div>
            <div>{hitteritem.stats.power}</div>
            <div>{hitteritem.stats.contact}</div>
            <div>{hitteritem.stats.speed}</div>
            <div>{hitteritem.stats.throwing}</div>
            <div>{hitteritem.stats.deffense}</div>
          </div>
        ))}
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
`;
export default Player;
