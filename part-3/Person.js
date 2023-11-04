/** Person Component
 * Properties:
 * -name: String
 * -age: Number
 * -hobbies: Array [ "Strings", ... ] = default
 * -img: String "URL location" = default
 *
 * **/
const Person = ({ name, age, hobbies = ["&", "They", "have", "no", "hobbies."], img = "https://images.squarespace-cdn.com/content/v1/51239e9ae4b0dce195cba126/1556466683303-K5V354MR8E4W0YOOT21G/Question-mark-face.jpg" }) => {
  // logic goes here for what to return, use ternary use map to map over arrays and use info in html if needed
  //?   const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person. </p>
      <ul>
        <li>
          Their name is <b>{name.length > 8 ? name.slice(0, 6) : name}</b>
        </li>
        <li>
          {" "}
          They are <b>{age}</b> years old.
        </li>

        {/* <img className="bio" src={img} height="100px"></img> */}
        <ul>
          <b>Hobbies:</b>
          {/* { hobbiesLIs } */}
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </ul>
      <h3>{age > 18 ? "Please go vote!" : "You must be 18!"}</h3>
    </div>
  );
  // return HTML component
};
