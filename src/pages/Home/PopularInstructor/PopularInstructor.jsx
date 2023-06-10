import usePopularInstructor from "../../../hooks/usePopularInstructor";
import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructor = () => {
    const [popularInstructor] = usePopularInstructor();
    return (
        <div className="my-8">
            <h2 className="text-3xl font-bold text-center my-6">Popular Instructors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-8 w-3/4">
                {
                    popularInstructor.map(popular => <PopularInstructorCard key={popular._id}
                        popular={popular}></PopularInstructorCard>)
                }
            </div>

        </div>
    );
};

export default PopularInstructor;