import styled from '@emotion/styled';

export const Container = styled.div`
  width: fit-content;

 

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 8px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 0.01em;

  vertical-align: middle;

  padding: 16px;
  color: #1f3349;
`;

export const StatItem = styled.ul`
  display: inline-flex;
  flex-direction: column;

  padding: 5px 18px;
  color: #ffffff;
  :first-of-type {
    border-bottom-left-radius: 8px;
  }
  :last-of-type {
    border-bottom-right-radius: 8px;
  }
`;

export const ItemName = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  margin-bottom: 5px;
`;
export const ItemPercentage = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`;
