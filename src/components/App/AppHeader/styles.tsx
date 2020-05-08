import styled from '@emotion/styled';
import {appColors} from '../../../styles/variables';
import {NavLink} from 'react-router-dom';
// import {appColors} from '@app/styles/variables';


export const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: ${appColors.black};
`;


export const HomeDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    margin-left: 5%;
    width: 9em;
`;



export const HomeLink = styled(NavLink)`
    padding: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    color: white;
    border: 10px solid transparent;
    text-decoration: none !important;


    &:hover {
        background-color: ${appColors.green};
        cursor: pointer;
    }

    &.main-nav-active {
        border-bottom: 10px solid ${appColors.green};
      }
`;

export const NavElement = styled(NavLink)`
    padding: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    width: inherit;
    justify-content: center;
    color: white;
    border: 10px solid transparent;
    text-decoration: none !important;


    &:hover {
        background-color: ${appColors.green};
        cursor: pointer;
    }

    &.main-nav-active {
        border-bottom: 10px solid ${appColors.green};
      }
`;

export const NavLinks = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

// export const Nav = styled(NavLink)`
//     text-decoration: none !important;

//     &:hover {
//     border-bottom: 1px solid red;
//     }

//     &.main-nav-active {
//     color: green;
//     font-weight: 500;
//     border-bottom: none;
//     }
// `;