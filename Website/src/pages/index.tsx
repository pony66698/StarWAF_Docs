import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import HomeHero from '../components/homeHero';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from "./index.module.css";
import 'animate.css';
import {useColorMode} from '@docusaurus/theme-common'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext
import AOS from 'aos';
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiMessageSquareDetail, BiPaint } from "react-icons/bi";
import Head from '@docusaurus/Head';


if (ExecutionEnvironment.canUseDOM) {
  window.addEventListener;
  AOS.init();
};

function HomepageHeader() {
  const { isDarkTheme } = useColorMode();

  return (
    <header className={clsx("hero animate__pulse", styles.heroBanner)}>
      <div className="container">
          <h1 className={(styles.heroTitle)} data-aos="zoom-y-out">
          专为中国大陆用户定制的网站应用级入侵防御 / 加速系统{" "}
          <span className={clsx("gradienttitle")} style={{ color: "var(--ifm-color-primary);" }}>
            Star WAF
          </span>{""}
           .
        </h1>
        <p className={styles.heroDescription} data-aos="zoom-y-out" data-aos-delay="150">
          针对 <strong>中国大陆环境进行链路优化</strong> 采用大量边缘 CDN 和 CN2 GIA 高速链路保证节点与中国的高性能链接 .
        </p>
        <span data-aos="zoom-y-out" data-aos-delay="300">

        <a
          className={clsx(
            "button button--primary button--lg",
            styles.heroButton
          )}
          href="/docs/"
          target="_blank"
          style={{ marginRight: 10 }}
        >
        立即接入 <span className="buttonIcon"><svg className="arrowhome" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" font-size="0.8em" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></span>
        </a>

        <Link
          className={clsx(
            "button button--secondary button--lg",
            styles.heroButton
          )}
          to="/docs/"
        >
          了解更多
        </Link>
        
        </span>

{         <br /> }
        <br />
      </div>
    </header>
  );

}
function FeaturesSection() {
  const features = [
    {
      title: "Simple",
      description:
        "简单，易配置，文档齐全；仅需轻点几下即可加速你的网上应用程式，即使没有使用基础也能轻松配置。",
      icon: <HiOutlineLightBulb fontSize={30} />,
    },
    {
      title: "Support",
      description:
        "7*24小时全时技术支持，为每一位客户提供快速响应和全天候监控，确保服务质量。",
      icon: <BiMessageSquareDetail fontSize={30} />,
    },
    {
      title: "Smart",
      description:
        "动态内容加速，采用多种连接算法，提供 WebSocket 双向或实时连接的更好途径。",
      icon: <BiPaint fontSize={30} />,
    },
  ];

  const renderFeatureCards = (features) => {
    return features.map((feature, key) => (
      <div key={key} className="col col--4" data-aos="zoom-y-out" data-aos-delay="300">
        <div className={clsx("card", styles.featureCard)}>
          <div className={clsx("card__header", styles.featureCardTitle)}>
            <div className={styles.featureCardIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
          <div className={clsx("card__body", styles.featureCardBody)}>
            <p dangerouslySetInnerHTML={{ __html: feature.description }}></p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section>
        <div className="container">
          <div className="row">{renderFeatureCards(features)}</div>
        </div>
    </section>
  );
}
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Digital Support Services (T Level) notes - An awesome textbook alternative that you can contribute to!"
    >
    <Head>
      <meta property="og:image" content="https://meta-image.vercel.app/Welcome%20to%20the%20**Digital%20Support%20Notes**%20!%20%F0%9F%8E%89.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnotes.nayanpatel.net%2Fsitelogo.svg&widths=300&heights=300" />
    </Head>
      <HomepageHeader />
      <br />
      <FeaturesSection />
      <br />
      <br />
    </Layout>
  );
}