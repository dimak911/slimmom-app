import styled from 'styled-components';
import descktop_fone_1x from 'images/pictures/descktop-fone-1x.png';
import descktop_banana_1x from 'images/pictures/descktop-banana-1x.png';
import descktop_strawberry_1x from 'images/pictures/descktop-strawberry-1x.png';
import descktop_leafs_1x from 'images/pictures/descktop-leafs-1x.png';

export const MainPageBg = styled.div`
  height: 100vh;
  width: 940px;
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(${descktop_leafs_1x}), url(${descktop_strawberry_1x}),
    url(${descktop_banana_1x}), url(${descktop_fone_1x});
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: top 0 left 0, bottom 0 right 0, top 0 right 0,
    bottom 0 right 0;
`;
