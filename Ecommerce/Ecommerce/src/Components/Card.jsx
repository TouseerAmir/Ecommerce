const Card = ({ title, image, description, price, category }) => {
  console.log('Product Card props:', { title, image, description, price, category });
  const imgURl= 'http://localhost:4000'
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={`${imgURl}/${image}`}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-blue-600 font-semibold mb-2">${price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Category: {category.name}</p>
      </div>
    </div>
  );
};

export default Card;
