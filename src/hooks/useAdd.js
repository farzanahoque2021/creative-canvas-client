import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: added = [] } = useQuery({
        queryKey: ['addedclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/addedclass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [added, refetch]

}

export default useCart;