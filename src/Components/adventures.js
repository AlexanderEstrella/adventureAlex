import DATA from "../data";
import Places from "./Countries";

const Adventures = () => {
  return (
    <div className="Primaryadventure">
      <div className="adventuretitle">
        <h2 className="adventurertitle">Adventures</h2>
      </div>
      <div className="Adventureplaces">
        {DATA.map((Place, index) => {
          const { img, title } = Place;
          return <Places key={Place.id} {...Place}></Places>;
        })}
      </div>
    </div>
  );
};

export default Adventures;
