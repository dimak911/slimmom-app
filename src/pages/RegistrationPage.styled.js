import styled from 'styled-components';
import descktopBanana1x from '../images/pictures/descktop-banana-1x.png';
import descktopBanana2x from '../images/pictures/descktop-banana-2x.png';
import descktopLeafs1x from '../images/pictures/descktop-leafs-1x.png';
import descktopLeafs2x from '../images/pictures/descktop-leafs-2x.png';
import descktopStrawberry1x from '../images/pictures/descktop-strawberry-1x.png';
import descktopStrawberry2x from '../images/pictures/descktop-strawberry-2x.png';
import descktopFone1x from '../images/pictures/descktop-fone-1x.png';
import descktopFone2x from '../images/pictures/descktop-fone-2x.png';
import tabletBanana1x from '../images/pictures/tablet-banana-1x.png';
import tabletBanana2x from '../images/pictures/tablet-banana-2x.png';
import tabletLeafs1x from '../images/pictures/tablet-leafs-1x.png';
import tabletLeafs2x from '../images/pictures/tablet-leafs-2x.png';
import tabletStrawberry1x from '../images/pictures/tablet-strawberry-1x.png';
import tabletStrawberry2x from '../images/pictures/tablet-strawberry-2x.png';
import tabletFone1x from '../images/pictures/tablet-fone-1x.png';
import tabletFone2x from '../images/pictures/tablet-fone-2x.png';

export const FoneImages = styled.div`

@media screen and (min-width: 768px) {
    position: absolute;
    background-image: url(${tabletStrawberry1x}), url(${tabletBanana1x}), url(${tabletFone1x}), url(${tabletLeafs1x});
    background-size: 291px, 498px, 553px, 740px;
    background-position: right -36px top 381px, left 277px top 513px, left 247px top 381px, left 16px bottom 279px;
    background-repeat: no-repeat;
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${tabletStrawberry2x}), url(${tabletBanana2x}), url(${tabletFone2x}, url(${tabletLeafs2x}));
  
}

  @media screen and (min-width: 1280px) {
    background-image: url(${descktopLeafs1x}), url(${descktopBanana1x}), url(${descktopStrawberry1x}), url(${descktopFone1x});
    background-size: 746px, 498px, 286px, 602px;
    background-position: right 195px top 0px, right 0 top 0, left 958px top 506px, right 0px bottom 0px;
    
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px),
    (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${descktopLeafs2x}), url(${descktopBanana2x}), url(${descktopStrawberry2x}), url(${descktopFone2x});
}
`