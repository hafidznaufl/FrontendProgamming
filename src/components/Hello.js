const Hello = (props) => {
  const { name, role } = props;

  return (
    <div>
      <h2>Welcome React</h2>
      <p>Saya {name} - {role}</p>
    </div>
  );
};

export default Hello;
