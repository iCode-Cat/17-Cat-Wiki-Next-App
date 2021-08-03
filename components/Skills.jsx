const Skills = ({ label, value }) => {
  const object = [
    {
      placeholder: 'Temperament',
      value: 'smart',
    },
    {
      placeholder: 'Grooming:',
      value: 1,
    },
    {
      placeholder: 'Hunt',
      value: 3,
    },
  ];

  const array = Array.from(Array(5).keys());
  console.log(array);

  return (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '5px' }}>
      <span>{label}:</span>
      {typeof value === 'number' ? (
        array.map((arr, index) => (
          <div
            style={{
              display: 'inline-block',
              background: index < value ? 'red' : 'gray',
              width: '20px',
              height: '20px',
            }}
          ></div>
        ))
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export default Skills;
