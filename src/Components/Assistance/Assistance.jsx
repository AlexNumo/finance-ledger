import NextIcon from '../../images/gallery/next.png';
import {
    AssistancePosition,
    InfoName,
    Info,
    ActionBTN,
    ActionButtonIMG
} from './Assistance.styled';

const Assistance = () => {
    return (
        <AssistancePosition>
            <InfoName>The Sky Is The Limit</InfoName>
            <Info>We provide world class financil assistance</Info>
            <ActionBTN>
                <ActionButtonIMG src={NextIcon} alt="NextIcon"/>
                Read More
            </ActionBTN>
        </AssistancePosition>
    )
};

export default Assistance;