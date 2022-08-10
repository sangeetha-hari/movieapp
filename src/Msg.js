export function Msg(props) {
  // const name = "Ranjana";
  return (
    <div>
      <h1>hello {props.name}</h1>
      <img className="profilePic" src={props.pic} alt={props.name} />
    </div>
  );
}
