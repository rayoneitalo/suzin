import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SB;
  display: flex;
  flex-direction: column;
  background: var(--color-primary);
  padding: 20px 0px;
  border-radius: 4px;
  margin-right: 1px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  > button {
    width: 100%;
    cursor: pointer;
    font-size: 15pt;
    padding: 5px 0 5px 38px;
    text-align: start;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  > button:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 52px;

  > li {
    color: #333;
    font-size: 12pt;
    margin-bottom: 8px;
    cursor: pointer;
    list-style: none;
  }

  > li:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;
