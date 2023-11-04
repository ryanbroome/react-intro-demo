const App = () => {
  return (
    <div>
      <Tweet username="EddyMunsta" name="Eddy" date="Today" msg="Hi" />
      <Tweet username="Becky" name="Betsy" date="A month ago" msg="Hi" />
      <Tweet username="Favery" name="Avery" date="Last Tuesday" msg="Hi" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));
