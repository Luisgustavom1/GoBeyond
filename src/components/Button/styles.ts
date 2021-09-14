import styled, { css } from 'styled-components';

interface IButton {
  width: number
  height: number
}

export const ButtonStyle = styled.button<IButton>`
  background: #E9BF33;
  color: white;

  font-size: 1.2rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.8rem;

  border-radius: .5rem;

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}

  &:hover {
    filter: brightness(.8)
  }
`;
