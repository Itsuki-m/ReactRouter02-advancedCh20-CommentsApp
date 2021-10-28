//NewQuote adding a brand new quote
// this page should display a form, which allows to add a new quote

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
