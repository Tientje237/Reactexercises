import people from '../data';

function BirthdayList() {
  return (
    <>
      {people.map(function(person) {
        return (
          <div key={person.id} className='birthdayLayout'>
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <p>{person.age}</p>
          </div>
        );
      })}
    </>
  );
}

export default BirthdayList;