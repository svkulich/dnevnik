import './galochki.css';

const galochki = ({ studentsArray, datesArray }) => {
  const saveDateElements = datesArray[0].map((stats, i) => {
    return (
      <div className="statWrapper">
        <p className="saveDate">{stats.date}</p>
        {studentsArray.map((student, index) => (
          <div className="galochki_container" key={index}>
            <div className="galochki_wrap">
              <input
                type="checkbox"
                className="galochki"
                checked={student.stats[i].value}
                onChange={() => {
                  // Обработчик изменения состояния чекбокса
                }}
              />
              <label className="custom-galochki" htmlFor={`galochki_${index}_${i}`} />
            </div>
          </div>
        ))}
      </div>
    );
  });

  return <>{saveDateElements}</>;
};

export default galochki;