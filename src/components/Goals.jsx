import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

const StyledSection = styled.section``;
const mainGoals = [
  {
    id: 0,
    name: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel, laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. Error, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel, laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. Error, sunt."
  },
  {
    id: 2,
    name: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel, laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. Error, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel, laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. Error, sunt."
  },
  {
    id: 3,
    name: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel, laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. Error, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel, laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. laudantium doloribus iusto perferendis minima quis veritatis, quisquam voluptate laboriosam, optio labore neque tenetur dolores ea error tempore. Error, sunt."
  }
]
export default function Goals() {
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  return (
    <Element name={"Goals"} id="goals">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>My Goals</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}
          {mainGoals.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainGoals.map(function ({
                  id,
                  name,
                  description,
                }) {
                  return (
                    <Col key={id}>
                      <StyledCard
                        theme={theme}
                        name={name}
                        description={description}
                      />
                    </Col>
                  );
                })}
              </Row>
            </>
          )}
        </Container>
      </StyledSection>
    </Element>
  );
}
