import usePopularClass from "../../../hooks/usePopularClass";
import PopularClassCard from "./PopularClassCard";


const PopularClass = () => {
    const [popularClass] = usePopularClass();


    return (
        <div className="my-8">
            <h2 className="text-3xl font-bold text-center my-6">Popular Classes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-8 w-3/4">
                {
                    popularClass.map(popular => <PopularClassCard key={popular._id}
                        popular={popular}></PopularClassCard>)
                }
            </div>

        </div>
    );
};

export default PopularClass;