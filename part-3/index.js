const App = () => {
  return (
    <div>
      <Person name="Eddy" age={39} hobbies={["Studying", "Spending time with my kids and family", "Playing XBOX"]} img="https://upload.wikimedia.org/wikipedia/en/5/5b/Eddie_Munster.JPG" />
      <Person name="BeckyBroome" age={39} hobbies={["Beach", "Time with kids and family"]} img="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/betsy-broome-a5378ce5.jpg" />
      <Person name="RomanBroome" age={10} hobbies={["Swimming", "XBOX"]} img="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/betsy-broome-a5378ce5.jpg" />
      <Person name="AveryBroome" age={8} hobbies={["Swimming", "Makeup", "Friends", "Boy meets world"]} img="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/betsy-broome-a5378ce5.jpg" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));
