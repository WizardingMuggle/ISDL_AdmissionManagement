import React from "react";
import styled from "styled-components";

// Styled components
const FAQWrapper = styled.div`
  font-size: 18px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4; /* Adding a light gray background color */
  border-radius: 10px; /* Adding some border radius for a rounded appearance */
`;

const Question = styled.li`
  margin-bottom: 20px;
`;

const QuestionTitle = styled.strong`
  display: block;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  line-height: 1.6;
`;

function Faq() {
  return (
    <FAQWrapper>
      <h1>Welcome to FAQ Page</h1>
      <ol>
        <Question>
          <QuestionTitle>1. Where is LNMIIT located?</QuestionTitle>
          <Answer>
            LNMIIT is located in Jaipur at Rupa-ki-Nangal, Post: Sumel, Via:
            Jamdoli, Jaipur - 302031, Rajasthan, India. It is approximately 15
            km from the heart of the city (Ajmeri Gate) and 11 km from Transport Nagar.
          </Answer>
        </Question>
        <Question>
          <QuestionTitle>2. How shall I reach LNMIIT?</QuestionTitle>
          <Answer>
            It is located on the bypass that connects Jaipur-Agra Highway with
            Jaipur-Delhi Highway. This bypass can be reached via a link road
            connecting Jaipur-Agra Highway with Shishodia Rani-ka-Bagh, Keshav
            Vidypeeth, Jamdoli, and Sumel.
          </Answer>
        </Question>
        <Question>
          <QuestionTitle>3. How is the climate in Jaipur?</QuestionTitle>
          <Answer>
            The weather in Jaipur is semi-arid type. The summer season begins in
            April and continues till July. The temperature rises to an average of 30°C
            with the maximum temperature of 44°C. The city experiences monsoon
            showers in the months of August and September. With pleasant weather in
            the month of October, November to February are the months when the city
            observes winters. The temperature ranges between 5-15°C during this
            season.
          </Answer>
        </Question>
      </ol>
    </FAQWrapper>
  );
}

export default Faq;
