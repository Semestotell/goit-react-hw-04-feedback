import styled from "styled-components";

export const Btn = styled.button`
    padding: 5px 15px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
    text-transform: capitalize;
    font-weight: bold;
    cursor: pointer;
    &:not(:last-child) {
        margin-right: 10px;
    }
    :hover,
    :focus {
        background-color: #00bfff;
        color: white;
        transition: all 0.2s;
    }
`;