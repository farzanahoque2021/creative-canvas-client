

const PopularInstructorCard = ({ popular }) => {
    const { name, image } = popular;
    return (
        <div>
            <div className="card h-72 bg-base-100 shadow-lg rounded-xl relative my-4 hover:border-orange-400 hover:border">

                <figure><img src={image} alt="Popular Instructor" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto text-cyan-500 hover:text-orange-500">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;