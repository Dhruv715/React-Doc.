
function Card({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

export default Card;
