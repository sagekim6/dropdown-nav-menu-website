import Button from "./Button";
import { ReactComponent as Audiophile } from "../images/client-audiophile.svg";
import { ReactComponent as Databiz } from "../images/client-databiz.svg";
import { ReactComponent as Maker } from "../images/client-maker.svg";
import { ReactComponent as Meet } from "../images/client-meet.svg";

const Section = () => {
  return (
    <section>
      <div className="content">
        <h2>Make remote work</h2>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button text="Learn more" className="learn_more_btn" />
      </div>
      <div className="client_images">
        <Databiz />
        <Audiophile />
        <Meet />
        <Maker />
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <main>
      <Section />
      <div className="bg_container">
        <div className="bg_image"></div>
      </div>
    </main>
  );
};

export default Main;
