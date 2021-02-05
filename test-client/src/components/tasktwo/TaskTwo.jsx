import React, { useState, useEffect } from 'react';
import {
  Content,
  Heading,
  StyledList,
  Task,
} from '@components/styled-components/Task';

const TaskTwo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/status?message=${encodeURIComponent('Example backend API integration')}`)
      .then(async (response) => {
        const json = await response.json();
        setData(json);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <Task>
      <Heading>Task two</Heading>
      <Content>
        <p>
          Create components and an endpoint driven by unit tests that can
          price a basket of products taking into account some special offers.
          The code should demonstrate your knowledge of clean extendible code.
        </p>
        <p>
          {`Include unit tests. React Testing Library and JUNIT are already 
          configured for you in the skeleton project.`}
        </p>
        <p>Expected: </p>
        <p>Inventory of products that can be purchased and their prices:</p>
        <StyledList>
          <li>Soup - 65p per tin.</li>
          <li>Bread - 80p per loaf.</li>
          <li>Milk - £1.30 per bottle.</li>
          <li>Apples - £1.00 per bag.</li>
        </StyledList>
        <p>Current special offers:</p>
        <StyledList>
          <li>Apples have a 10% discount off their normal price this week.</li>
          <li>Buy 2 tins of soup and get a loaf of bread for half price.</li>
        </StyledList>
        <p>
          Feel free to come up with a design of your own, however the shopping basket must include:
        </p>
        <StyledList>
          <li>The ability to add / remove products from the basket.</li>
          <li>An empty state when the basket is empty.</li>
          <li>A loading state when there is a pending backend request.</li>
          <li>
            The subtotal and total should be calculated in the backend and displayed on
            the client after every add or remove operation.
            <pre>
              <p>
                For example a basket containing:  Apples Milk Bread
              </p>
              <p>
                Should show:
              </p>
              <p>
                <strong>Subtotal: £3.10</strong>
              </p>
              <p>
                <strong>Apples 10% off: 10p</strong>
              </p>
              <p>
                <strong>Total: £3.00</strong>
              </p>
              <p>
                If no special offers are applicable then show:
              </p>
              <p>
                <strong>Subtotal: £1.30 (No offers available)</strong>
              </p>
              <p>
                <strong>
                  Total price: £1.30
                </strong>
              </p>
            </pre>
          </li>
        </StyledList>
        <hr />
        <strong>
          {'Feel free to use this component as a demo page for your work. '}
        </strong>
        {isLoading && (
          <strong>
            Testing backend integration...
          </strong>
        )}
        {error && (
          <strong>
            {`An error has occured while trying to connect to the backend API (Is it running?): ${error}`}
          </strong>
        )}
        {data && (
          <strong>
            {`This message is from the API: ${JSON.stringify(data)}`}
          </strong>
        )}
      </Content>
    </Task>
  );
};

export default TaskTwo;
