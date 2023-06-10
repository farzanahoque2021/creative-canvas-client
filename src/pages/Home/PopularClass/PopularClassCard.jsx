
const PopularClassCard = ({ popular }) => {
    const { image, name, price } = popular;
    return (
        <div>
            <div className="card h-80 bg-base-100 shadow-lg rounded-xl relative">

                <figure><img src={image} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto text-green-400">{name}</h2>
                    <p className="w-3/12  bg-slate-700 text-white rounded-xl absolute top-0 right-0 opacity-75 px-2">Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;