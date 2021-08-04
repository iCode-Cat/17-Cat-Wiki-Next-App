const Skills = ({ label, value }) => {
  const array = Array.from(Array(5).keys());
  return (
    <div
      style={{
        display: 'grid',

        gridTemplateColumns: '140px auto',
        gridAutoFlow: 'column',
        gap: '5px',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <p style={{ fontSize: '1.4rem', fontWeight: '700' }}>{label}:</p>
      {typeof value === 'number' ? (
        array.map((arr, index) => (
          <div
            key={index}
            style={{
              textAlign: 'left',
              background: index < value ? '#544439' : '#E0E0E0',
              width: '30px',
              height: '8px',
              borderRadius: '8px',
            }}
          ></div>
        ))
      ) : (
        <p style={{ fontSize: '1.4rem', fontWeight: '500' }}>{value}</p>
      )}
    </div>
  );
};

export default Skills;
