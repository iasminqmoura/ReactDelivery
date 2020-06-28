import styled from "styled-components";

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`;

export const StatusChecked = styled.View`
    background-color: #02a678;
    border-radius: 50px;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

export const StatusUnchecked = styled(StatusChecked)`
    background-color: #cfd1d2;
`;

export const StatusName = styled.Text`
    margin-left: 20px;
    font-size: 16px;
`;

