import { useEffect, useState } from "react";

const usePopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://creative-canvas-server-farzanahoque2021.vercel.app/popularinstructor')
            .then(res => res.json())
            .then(data => {
                setPopularInstructor(data)
                setLoading(false)
            })
    }, [popularInstructor])
    return [popularInstructor, loading]
}
export default usePopularInstructor;