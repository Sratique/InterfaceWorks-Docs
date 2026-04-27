import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            to="/docs/tutorials/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Home for the InterfaceWorks luau library"
    >
      <HomepageHeader />
      <div className={clsx(styles.FeaturesDiv)}>
        <article>
          <p style={{ fontWeight: 'bold' }, { fontSize: 30 }}>Fast</p>
          <p>Create UI without the need to think about performance.</p>
        </article>
        <article>
          <p style={{ fontWeight: 'bold' }, { fontSize: 30 }}>Easy to use</p>
          <p>Works like all the libraries you already know.</p>
        </article>
        <article>
          <p style={{ fontWeight: 'bold' }, { fontSize: 30 }}>Debugging</p>
          <p>Easy to use developer tools.</p>
          <a href='https://github.com/Sratique/InterfaceWorks-Debugger'>You can also make your own!</a>
        </article>
      </div>
    </Layout>
  );
}
