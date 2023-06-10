import usePopularClass from "../../../hooks/usePopularClass";
import PopularClassCard from "./PopularClassCard";


const PopularClass = () => {
    const [popularClass] = usePopularClass();


    return (
        <div>
            <h2>Popular Classes</h2>
            {
                popularClass.map(popular => <PopularClassCard key={popular._id}
                    popular={popular}></PopularClassCard>)
            }

        </div>
    );
};

export default PopularClass;