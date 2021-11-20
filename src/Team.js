import React, { useRef, useEffect, useState } from 'react'
import './Team.css';
import { Box, Button, Image, Heading, Text, Flex, Card } from 'rebass';
import { Tiles } from '@rebass/layout';
import avatar from './resources/avatar_1.png';
import avatar2 from './resources/avatar_1_2.png';
import avatar3 from './resources/avatar_2.png';
import avatar4 from './resources/avatar_2_1.png';
import avatar5 from './resources/avatar_3.png';
import avatar6 from './resources/avatar_3_1.png';
import useOnScreen from './Util/UseOnScreen.js';

const Team = () => {

  const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random() * 6}s linear both ">${letter}</span>`
  const colorLetter = letter => `<span style="color: white;">${letter}</span>`;
  const flickerAndColorText = text =>
    text
      .split('')
      .map(flickerLetter)
      .map(colorLetter)
      .join('');
  const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);

  const h1Ref = useRef(null)
  const isVisible = useOnScreen(h1Ref);
  const [display, setDisplay] = useState(false);
  // const headRef = useRef()

  useEffect(() => {
    const target = h1Ref.current;
    if (isVisible && !display) {
      setDisplay(true);
      neonGlory(target);
    }
    target.onclick = ({ target }) => neonGlory(target);
  }, [isVisible])

  const personCard = (img1, img2, name, position) => {
    return (
      <Flex flexDirection="column"
        borderWidth={1}
        borderStyle='solid'
        sx={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
        <div style={{ width: '250px', height: '250px', position: 'relative', display: 'inline-block' }}>
          <div style={{ width: '250px', height: 'auto', position: 'relative', display: 'inline-block' }} >
            <glitch-image onMouseOver={e => (e.currentTarget.src = img2)}
              onMouseOut={e => (e.currentTarget.src = img1)}
              style={{ borderRadius: "50%" }} src={img1} ></glitch-image>
          </div>
        </div>
        <Heading color="white" fontFamily="Bungee" fontSize={[1, 3, 4]}  >{name} </Heading>
        <Heading color="white" fontFamily="Ubuntu" fontSize={[1, 2, 3]} >{position} </Heading>
        {/* <Heading color="white" fontFamily="Bungee" >Blablablablablablablablablablablablablablablablablabl </Heading> */}
      </Flex >
    );
  }

  return (
    <Flex width={1} flexDirection='column' style={{ margin: '0 auto', alignItems: 'center', minHeight: '100%' }}>
      <Text ref={h1Ref} style={{ top: 0, userSelect: 'none', cursor: 'pointer' }}
        fontFamily={'Bungee'} pt={30}
        fontSize={[2, 4, 6]} >Our team</Text>
      <Flex flexDirection='column'
        sx={{
          height: '100%',
          width: '70%',
          margin: '0 auto',
          justifyContent: 'center',
          // alignItems: 'center',
          // display: 'inline-block',
          gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }} >
        <Text sx={{ marginY: '4vmin', alignSelf: 'center' }} fontSize={[1, 2, 3]} color={'white'} fontFamily={'Ubuntu'} fontWeight={'bold'}>
          We are a young and passionate team with strong hands-on skill.
          <br />

        </Text>
        <Tiles columns={[1, null, 3]} sx={{ justifyItems: 'center', userSelect: 'none' }}>
          {personCard(avatar, avatar2, "Hao", "Founder & Developer")}
          {personCard(avatar3, avatar4, "Mandy", "BA & Developer")}
          {personCard(avatar5, avatar6, "Luca", "Senior Mobile Developer")}
        </Tiles>
      </Flex>
    </Flex>
  );
}

export default Team;