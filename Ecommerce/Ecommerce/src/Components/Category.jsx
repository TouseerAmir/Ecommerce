const CategoryCard = ({ title,description,image }) => {
    // console.log('Card props:', { title,description,image });
     const imgURl= 'http://localhost:4000'
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-32">
        <img
          src={`${imgURl}/${image}`}
          alt={title}
          className="w-full h-24 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          {/* <p className="text-gray-600 mb-2">{description}</p> */}
        </div>
      </div>
    );
  };
  
  export default CategoryCard;