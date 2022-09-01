import React from 'react';

function ColaboratorLink(props) {
  const { nickname, link } = props;
  return (
    <a className="p-2" href={link}>
      {nickname}
    </a>
  );
}

const COLABORATORS = [
  { nickname: '@Magnetto', link: 'https://twitter.com/magnetto_eth' },
  { nickname: '@LautiRad', link: 'https://lautirad.vercel.app/' },
  { nickname: '@julian.eth', link: 'https://www.linkedin.com/in/julianperez64/' },
  { nickname: '@tomasfrancisco', link: 'https://www.tomasfreire.xyz/' },
];

export default function Footer() {
  return (
    <footer className="w-full py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
        <span className="md:mr-2">Sitio realizado con mucho 💙 por:</span>
        {COLABORATORS.map(({ nickname, link }) => (
          <ColaboratorLink nickname={nickname} link={link} key={nickname} />
        ))}
      </div>
    </footer>
  );
}
