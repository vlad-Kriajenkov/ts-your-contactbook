import React, { FC } from 'react';
import { Container, Title, StatItem, ItemName } from './UploadStats.styled';
import stats from '../../../data.json';
import randomColor from '../../../utility/randomColor';

const UploadStats: FC = () => {
  return (
    <Container>
      <Title> Upload stats </Title>
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem style={{ backgroundColor: randomColor() }} key={id}>
              <ItemName>{label}</ItemName>
              <span>{percentage}%</span>
            </StatItem>
          );
        })}
      </ul>
    </Container>
  );
};

export { UploadStats };
