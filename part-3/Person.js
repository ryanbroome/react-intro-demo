const Person = ({ name, age, hobbies = ["&", "They", "have", "no", "hobbies."], img = "https://images.squarespace-cdn.com/content/v1/51239e9ae4b0dce195cba126/1556466683303-K5V354MR8E4W0YOOT21G/Question-mark-face.jpg" }) => {
  // logic goes here for what to return, use ternary use map to map over arrays and use info in html if needed
  return (
    <div>
      <p>
        <br />
        Learn some information about this person. Their name is <b>{name.length > 8 ? name.slice(0, 6) : name}</b>, and they are <b>{age}</b> years old.
      </p>
      {/* <img className="bio" src={img} height="100px"></img> */}
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
      <h3>{age > 18 ? "Please go vote!" : "You must be 18!"}</h3>
    </div>
  );
  // return HTML component
};
