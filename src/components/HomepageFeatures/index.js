import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Innbyggerflate",
    link: "/docs/innbyggerflate/",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
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
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Team Sak og behandling. Viktige tekniske eller domene-relaterte
        beslutninger.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <Link href={link} className={clsx("col col--4 margin-horiz--md card")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
