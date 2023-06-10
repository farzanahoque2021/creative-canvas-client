import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-4">All instructors</h2>
            <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id}
                        instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;