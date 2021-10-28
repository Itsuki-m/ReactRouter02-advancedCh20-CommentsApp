//NewQuote adding a brand new quote
// this page should display a form, which allows to add a new quote

import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
