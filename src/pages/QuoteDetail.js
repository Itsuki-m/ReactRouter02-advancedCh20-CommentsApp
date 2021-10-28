//QuoteDetail.js when we click on a singleQuote, then we go to this page
// <Route path="/quotes/:quoteId">

import { Fragment } from 'react';
import { useParams, Route } from 'react-router';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        {/* alternatively, since we're defining a route here (not a link), also can set <path='/quotes/:quoteId/comments'> */}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
