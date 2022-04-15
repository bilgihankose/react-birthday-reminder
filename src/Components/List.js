const List = ({ people }) => {
  const imageStyle = {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const divStyle = { float: "right", paddingLeft: "10px" };
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <img src={person.image} alt={person.name} style={imageStyle} />
            <div style={divStyle}>
              <p>
                <strong>{person.name}</strong>
              </p>
              <p>{person.age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
