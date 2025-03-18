import { FC } from "react";

const Shapes3D: FC = () => {
  const n12hedron = 12;
  const n20hedron = 20;
  const nOpen = 30;
  const nShapes = 2;
  const n5gon = 5;
  const n10gon = 10;
  const types: string[] = ["inf", "mid", "sup"];

  const render12Hedron = (): JSX.Element => {
    const elements = [];
    for (let i = 0; i < n12hedron; i++) {
      const cond = Math.floor(i / n10gon);
      const idx = 2 * (cond ? i % 2 : Math.floor(i / n5gon));
      elements.push(
        <div
          key={`s12hedron-${i}`}
          className={`s2d s5gon ${cond ? "cup" : "lat"} ${types[idx]}`}
        ></div>
      );
    }
    return <div className="s12hedron">{elements}</div>;
  };

  const render20Hedron = (): JSX.Element => {
    const elements = [];
    for (let i = 0; i < n20hedron; i++) {
      const cond = Math.floor(i / n5gon) % 2;
      const idx = 2 * Math.floor(i / n10gon);
      elements.push(
        <div
          key={`s20hedron-${i}`}
          className={`s2d s3gon ${cond ? "cup" : "lat"} ${types[idx]}`}
        ></div>
      );
    }
    return <div className="s20hedron">{elements}</div>;
  };

  const renderOpenShapes = (): JSX.Element => {
    const elements = [];
    for (let i = 0; i < nOpen; i++) {
      const idx = Math.floor(i / n10gon);
      const cond = (1 - (idx % 2)) * Math.floor((i % n10gon) / n5gon);
      elements.push(
        <div
          key={`open-${i}`}
          className={`s2d s4gon ${cond ? "cup" : "lat"} ${types[idx]}`}
        ></div>
      );
    }
    return <div className="open">{elements}</div>;
  };

  return (
    <div className="a3d">
      {Array.from({ length: nShapes }).map((_, index) => (
        <div className="s3d" key={`s3d-${index}`}>
          {render12Hedron()}
          {render20Hedron()}
          {renderOpenShapes()}
        </div>
      ))}
    </div>
  );
};

export default Shapes3D;
