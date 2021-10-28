//QuoteDetail.js when we click on a singleQuote, then we go to this page
// <Route path="/quotes/:quoteId">

import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

// のちにbackend serverに保存するデータ
const DUMMY_QUOTES = [
  { id: 'p1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'p2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.auther} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        {/* alternatively, since we're defining a route here (not a link), also can set <path='/quotes/:quoteId/comments'> */}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
