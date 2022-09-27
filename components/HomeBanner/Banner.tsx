//images
import NationalTeam from "./banner-assets/nationalteam.png";
import PremierLeauge from "./banner-assets/premier.png";
import Bundesliga from "./banner-assets/bundesliga.png";
import SeriA from "./banner-assets/seria.png";
import LaLiga from "./banner-assets/laliga.png";
import LigueOne from "./banner-assets/ligue1.png";

//nextjs
import Image from "next/image";
import Link from "next/link";

//styling
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-10/12 xl:w-8/12 lg:mx-auto gap-4 mt-8">
      <Link href="/leauge/national-teams">
        <Image
          className={styles.zoomAnimation}
          src={NationalTeam}
          alt="national team banner"
        />
      </Link>
      <Link href="/leauge/premier-leauge">
        <Image
          className={styles.zoomAnimation}
          src={PremierLeauge}
          alt="premier leauge banner"
        />
      </Link>
      <Link href="/leauge/bundesliga">
        <Image
          className={styles.zoomAnimation}
          src={Bundesliga}
          alt="bundesliga banner"
        />
      </Link>
      <Link href="/leauge/seriea-leauge">
        <Image
          className={styles.zoomAnimation}
          src={SeriA}
          alt="serie-a banner"
        />
      </Link>
      <Link href="/leauge/la-liga">
        <Image
          className={styles.zoomAnimation}
          src={LaLiga}
          alt="la-liga banner"
        />
      </Link>
      <Link href="/leauge/ligue-one">
        <Image
          className={styles.zoomAnimation}
          src={LigueOne}
          alt="ligue-one banner"
        />
      </Link>
    </div>
  );
};

export default Banner;
