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
import { mainGoals } from "../data";
const StyledSection = styled.section``;
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
              Oops, Connection problem...
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
