// this component holds all the quotes displayed on the screen

import QuoteList from '../components/quotes/QuoteList';

// のちにbackend serverに保存するデータ
const DUMMY_QUOTES = [
  { id: 'p1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'p2', author: 'Maximilian', text: 'Learning React is great!' },
];

const AllQuotes = () => {
  return (
    // DUMMY_QUOTESをQuoteListにprops.quotesとして送る
    // ViewFullscreenボタン(QuoteItem.js)押下でQuoteDetail.jsにrouterしたい(QuoteItem.jsで行うこと)
    <QuoteList quotes={DUMMY_QUOTES} />
  );
};

export default AllQuotes;
