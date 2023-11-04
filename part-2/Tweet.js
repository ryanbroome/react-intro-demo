const Tweet = ({ username, name, date, msg }) => {
  return (
    <ul className="tweet">
      <li>
        <b>Username:</b> {username}
      </li>
      <li>
        <b>Name:</b>
        {name}
      </li>
      <li>
        <b>Date: </b> {date}
      </li>
      <li>
        <b>Message: </b>
        {msg}
      </li>
    </ul>
  );
};
