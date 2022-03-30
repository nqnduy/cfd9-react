import { useState, useEffect } from 'react';


const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading]  = useState(true);
    useEffect(() => {
        setLoading(true),
        callback()
            .then((res) => {
                setData(res.data)
                setLoading(false)
        });
    }, dependencyList);
    return {
        data,
        loading
    }
};
export default useQuery;