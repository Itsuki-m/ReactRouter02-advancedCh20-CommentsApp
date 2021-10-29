// this component holds all the quotes displayed on the screen
import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
// のちにbackend serverに保存するデータ
// const DUMMY_QUOTES = [
//   { id: 'p1', author: 'Max', text: 'Learning React is fun!' },
//   { id: 'p2', author: 'Maximilian', text: 'Learning React is great!' },
// ];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <div className="centered">{error}</div>;
  }
  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return (
    // DUMMY_QUOTESをQuoteListにprops.quotesとして送る
    // ViewFullscreenボタン(QuoteItem.js)押下でQuoteDetail.jsにrouterしたい(QuoteItem.jsで行うこと)
    // <QuoteList quotes={DUMMY_QUOTES} />
    <QuoteList quotes={loadedQuotes} />
  );
};
export default AllQuotes;

///////////////////////////////
// // this component holds all the quotes displayed on the screen

// import QuoteList from '../components/quotes/QuoteList';

// // のちにbackend serverに保存するデータ
// const DUMMY_QUOTES = [
//   { id: 'p1', author: 'Max', text: 'Learning React is fun!' },
//   { id: 'p2', author: 'Maximilian', text: 'Learning React is great!' },
// ];

// const AllQuotes = () => {
//   return (
//     // DUMMY_QUOTESをQuoteListにprops.quotesとして送る
//     // ViewFullscreenボタン(QuoteItem.js)押下でQuoteDetail.jsにrouterしたい(QuoteItem.jsで行うこと)
//     <QuoteList quotes={DUMMY_QUOTES} />
//   );
// };

// export default AllQuotes;
