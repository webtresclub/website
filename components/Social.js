import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function SocialLink(props) {
  const { link, name, image } = props;
  return (
    <a href={link} className="flex flex-row items-center">
      <Image className={`${name.toLowerCase()}`} src={image} alt={name} width={50} height={50} />
      <span className="md:hidden ml-5">{name}</span>
    </a>
  );
}

export default function Social() {
  return (
    <div className={`${styles.redes} mx-auto flex flex-col md:flex-row py-10 md:py-5`}>
      <SocialLink name="Github" link="https://github.com/webtresclub" image="/github.png" />
      <SocialLink name="Twitter" link="https://twitter.com/webtresclub" image="/twitter.png" />
      <SocialLink name="Twitch" link="https://twitch.tv/webtresclub" image="/twitch.png" />
      <SocialLink
        name="Youtube"
        link="https://youtube.com/channel/UC467rZFxtBzuvIjwPoqzzzg"
        image="/youtube.png"
      />
      <SocialLink
        name="Instagram"
        link="https://instagram.com/webtresclub"
        image="/instagram.png"
      />
      <SocialLink name="Telegram" link="https://t.me/webtresclub" image="/telegram.png" />
      <SocialLink name="Facebook" link="https://facebook.com/webtresclub" image="/facebook.png" />
      <SocialLink name="Tiktok" link="https://tiktok.com/@webtresclub" image="/tiktok.png" />
      <SocialLink
        name="Linkedin"
        link="https://linkedin.com/company/webtresclub"
        image="/linkedin.png"
      />
    </div>
  );
}
