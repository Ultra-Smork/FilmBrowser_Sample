

const FilmCard = ({Film1}:any) => {
    return (
    <div className="Film">

      <div>
        <p>{Film1.Year}</p>
      </div>

      <div>
        <img src={Film1.Poster !== 'N/A' ?Film1.Poster : 'https://via.placeholder.com/400'} alt={Film1.Title}/>
      </div>

      <div>
        <span>{Film1.Type}</span>
        <h3>{Film1.Title}</h3>
      </div>
    </div>
  );
}

export default FilmCard;