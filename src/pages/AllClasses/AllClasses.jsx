import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";


const AllClasses = () => {
    const [allClass, setAllClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/approvedclasses')
            .then(res => res.json())
            .then(data => {
                setAllClass(data)
            })
    }, [allClass])
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-4">All Classes</h2>
            <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    allClass.map(all => <ClassCard key={all._id}
                        all={all}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;