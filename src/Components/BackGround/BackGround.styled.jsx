import styled from 'styled-components';
import ShowCase from '../../images/home/showcase.jpg';

const BackGroundPosition = styled.div`
    position: relative;
    @media (min-width: 767px){

    }
`;

const BackGroundIMG = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url('${ShowCase}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
    @media (min-width: 767px){
        width: 100vw;
        height: 100vh;
    }
`;

export {
    BackGroundIMG,
    BackGroundPosition
};