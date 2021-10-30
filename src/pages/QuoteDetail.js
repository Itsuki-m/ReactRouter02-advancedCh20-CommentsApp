//QuoteDetail.js when we click on a singleQuote, then we go to this page
// <Route path="/quotes/:quoteId">

import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// のちにbackend serverに保存するデータ
// const DUMMY_QUOTES = [
//   { id: 'p1', author: 'Max', text: 'Learning React is fun!' },
//   { id: 'p2', author: 'Maximilian', text: 'Learning React is great!' },
// ];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  // if (status === 'error') {
  //   return <p className="centered">{error}</p>;
  // }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // if (!quote) {
  //   return <p>No quote found!</p>;
  // }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.auther} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
