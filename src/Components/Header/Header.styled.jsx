import styled from 'styled-components';

const HeaderPosition = styled.div`
    padding-left: 22px;
    padding-top: 22px;
    padding-right: 22px;
    color: white;
    @media (min-width: 767px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const LogoPosition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (min-width: 767px){
        display: flex;
    }
`;

const NameLogo = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 28px;
    color: white;
    margin-left: 8px;
`;

const NameLogoColor = styled.span`
    color: #28A745;
`;

const LinkListPosition = styled.div`
    margin-top: 8px;
    @media (min-width: 767px){
        width: 300px;
    } 
    
`;

const LinkList = styled.ul`
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export {
    HeaderPosition,
    LogoPosition,
    NameLogo,
    NameLogoColor,
    LinkListPosition,
    LinkList

};