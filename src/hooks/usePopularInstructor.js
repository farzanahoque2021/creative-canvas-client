import { useEffect, useState } from "react";

const usePopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/popularinstructor')
            .then(res => res.json())
            .then(data => {
                setPopularInstructor(data)
                setLoading(false)
            })
    }, [popularInstructor])
    return [popularInstructor, loading]
}
export default usePopularInstructor;