import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    
    align-items: center;

    input {
        width: 20px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    button {
        font-size: 1.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
    }
`
));