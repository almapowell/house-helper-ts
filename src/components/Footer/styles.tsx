import styled from '@emotion/styled';
import {appColors} from '../../styles/variables';

export const FooterContainer = styled.div`
    color: white;
    background-color: ${appColors.black};

    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Tags = styled.p``;

export const SocialMediaTag = styled.p`
    width: 100%;
    padding: 20px;
    justify-content: center;
    display: flex;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
`;