import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: payment = [] } = useQuery({
        queryKey: ['paymenthistory', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/paymenthistory?email=${user?.email}`)
            console.log('res from payment', res)
            return res.data;
        },
    })
    return [payment, refetch]

}

export default usePayment;