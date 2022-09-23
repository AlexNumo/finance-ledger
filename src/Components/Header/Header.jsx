import Favicon from '../../images/favicon.png';

import {
    HeaderPosition,
    LogoPosition,
    LinkListPosition,
    NameLogoColor,
    NameLogo,
    LinkList
} from './Header.styled';

const Header = () => {
    return (
        <HeaderPosition>
            <LogoPosition>
                <img src={Favicon} alt="Favicon" width={39}/>
                <NameLogo><NameLogoColor>Finance</NameLogoColor> Ledger</NameLogo>
            </LogoPosition>
            <LinkListPosition>
                <LinkList>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Cases</a>
                    </li>
                                        <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </LinkList>
            </LinkListPosition>
        </HeaderPosition>  
    );
}

export default Header;