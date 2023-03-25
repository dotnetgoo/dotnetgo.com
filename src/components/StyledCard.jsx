import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card-footer {
    border-top: var(--border);

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export default function StyledCard({ theme, name, description }) {
  return (
    <StyledCardComponent>
      <Card bg={theme === "light" ? "white" : "dark"}>

        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </StyledCardComponent>
  );
}
