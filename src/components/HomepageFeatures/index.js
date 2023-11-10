import clsx from "clsx";
import Heading from "@theme/Heading";
import { useColorMode } from "@docusaurus/theme-common";
// import useThemeContext from "@theme/hooks/useThemeContext"; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Innbyggerflate",
    link: "/docs/innbyggerflate/",
    Svg: require("@site/static/img/PersonGroupFill.svg").default,
    SvgDark: require("@site/static/img/PersonGroupFill_dark.svg").default,
    description: (
      <>
        Team Innbyggerflate. Viktige tekniske eller domene-relaterte
        beslutninger.
      </>
    ),
  },
  {
    title: "Sak og behandling ",
    link: "/docs/sak-og-behandling/",
    Svg: require("@site/static/img/GavelSoundBlockFill.svg").default,
    SvgDark: require("@site/static/img/GavelSoundBlock_dark.svg").default,
    description: (
      <>
        Team Sak og behandling. Viktige tekniske eller domene-relaterte
        beslutninger.
      </>
    ),
  },
];

function Feature({ Svg, SvgDark, title, description, link, dark }) {
  console.log("DARK: ", dark);
  return (
    <Link href={link} className={clsx("col col--4 margin-horiz--md card")}>
      <div className="text--center">
        {dark ? (
          <SvgDark className={styles.featureSvg} role="img" />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();

  console.log("color: ", colorMode);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature dark={colorMode === "dark"} key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
