import { useState, useEffect } from 'react';


const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
    const [data, setData] = useState(initialValue);
    useEffect(() => {
        callback()
            .then((res) => {
                setData(res.data.data);
        });
    }, dependencyList);
    return {
        data
    }
};
export default useQuery;