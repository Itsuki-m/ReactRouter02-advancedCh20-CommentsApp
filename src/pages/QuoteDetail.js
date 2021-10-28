//QuoteDetail.js when we click on a singleQuote, then we go to this page
// <Route path="/quotes/:quoteId">

import { Fragment } from 'react';

import { useParams } from 'react-router';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetail;
