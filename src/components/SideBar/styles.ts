import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SB;
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  padding: 20px 38px;
  border-radius: 4px;
  margin-right: 1px;
`;

export const MenuTools = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  > h2 {
    color: #fff;
    margin-bottom: 8px;
    font-size: 13pt;
    font-weight: bold;
    transition: 0.1s;
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 12pt;
    color: #fff;
    cursor: pointer;
    margin-left: 15px;
    padding: 4px;
    border-radius: 4px;
  }

  > span:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  > span:last-child {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
