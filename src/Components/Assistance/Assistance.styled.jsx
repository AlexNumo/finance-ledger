import styled from 'styled-components';

const AssistancePosition = styled.div`
    display: block;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 500px; */
    padding: 62px 32px 102px 32px;
    
`;

const InfoName = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 16px;
`;


const Info = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 26px;
    margin-bottom: 24px;
`;

const ActionBTN = styled.button`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 18px;
    background-color: #28A745;
    color: white;
    width: 175px;
    height: 57px;
`;

const ActionButtonIMG = styled.img`
    width: 15px;
`;

export {
    AssistancePosition,
    InfoName,
    Info,
    ActionBTN,
    ActionButtonIMG
};