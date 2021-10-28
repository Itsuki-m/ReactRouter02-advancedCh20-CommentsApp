// App.js Routeで設定しているURLと全く関係ないURLで検索されたときNot Found Pageを表示させるためのコード

const NotFound = () => {
  return (
    <div className="centered">
      <p>No quote found!</p>
    </div>
  );
};

export default NotFound;
