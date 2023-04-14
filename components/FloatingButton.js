import React from 'react';
import styles from '../styles/FloatingButton.module.css';
import Image from 'next/image';

const FloatingDiscordButton = () => {
  const openDiscord = () => {
    const discordInviteUrl = 'https://discord.gg/eegRCDmwbM';
    window.open(discordInviteUrl, '_blank');
  };

  return (
    <button className={styles.floatingButton} onClick={openDiscord}>
      <Image src="/discord.png" alt="Discord" width={60} height={60} />
    </button>
  );
};

export default FloatingDiscordButton;
