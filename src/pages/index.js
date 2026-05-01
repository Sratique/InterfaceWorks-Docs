import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className={clsx(styles.SplashScreen)}>
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
          <div>
            <p style={{ fontWeight: 'bold' }, { fontSize: 30 }}>Fast</p>
            <p>Create UI without the need to think about performance.</p>
            <br/>
            <p>The test on the right creates 512 elements, applies properties and parents them to the player's UI(Initial composition), in just 14ms.</p>
            <p>The same test but with 1024 elements takes 50ms.</p>
            <br/>
            <p>These times might vary depending on where it is being rendered. These results are from UI labs.</p>
          </div>
          <div className={clsx(styles.imgcontainer)}>
            <img style={{width: 400}, {height: 400}} src={require('../../static/img/promo1.jpeg').default}></img>
          </div>
        </article>
        <article>
          <div>
            <p style={{ fontWeight: 'bold' }, { fontSize: 30 }}>Easy to use</p>
            <p>Works like all the libraries you already know.</p>
          </div>
          <div className={clsx(styles.imgcontainer)}>
            <div className={clsx(styles.Promo2)}></div>
          </div>
        </article>
        <article>
          <div>
            <p style={{ fontWeight: 'bold' }, { fontSize: 30 }}>Debugging</p>
            <p>There is a debugging tool coming in the future.</p>
            <p>Sadly it is not ready yet.</p>
          </div>
          <div className='imgcontainer'>
              
          </div>
        </article>
      </div>
    </Layout>
  );
}
