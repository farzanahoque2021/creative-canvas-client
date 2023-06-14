import { useEffect, useState } from "react";

const usePopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://creative-canvas-server-farzanahoque2021.vercel.app/popularclass')
            .then(res => res.json())
            .then(data => {
                setPopularClass(data)
                setLoading(false)
            })
    }, [popularClass])
    return [popularClass, loading]
}
export default usePopularClass;