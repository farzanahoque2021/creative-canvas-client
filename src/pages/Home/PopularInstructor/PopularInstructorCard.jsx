

const PopularInstructorCard = ({ popular }) => {
    const { name, image } = popular;
    return (
        <div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
                <div>
                    <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="popular instructor" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

                    <p className="text-xl text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-90">{name}</p>

                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;