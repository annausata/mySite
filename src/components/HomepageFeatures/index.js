import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Desert Giants: Solid-Less Planets',
    Svg: require('@site/static/img/cosmonaut.svg').default,
    description: (
      <>
        You wouldn't be able to walk on Jupiter, Saturn, Uranus or Neptune because they don't have a solid surface.
      </>
    ),
  },
  {
    title: 'About the size of the sun',
    Svg: require('@site/static/img/sun.svg').default,
    description: (
      <>
        98% of the mass of all objects in the Solar System is the mass of the Sun.
      </>
    ),
  },
  {
    title: 'There is silence in space',
    Svg: require('@site/static/img/sound.svg').default,
    description: (
      <>
        There is silence in space, because there is no medium for the propagation of sound. For those who like to keep silent, the cosmos would surely be to their liking.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
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
