"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';


const AllColleges = () => { 
    const [search, setSearch] = useState('')
    console.log(search, "search")
    console.log(search)

    const { data: allCollege = [], isLoading, refetch } = useQuery({
        queryKey: ['colleges', search],
        queryFn: async () => {
            const res = await axios.get(`/api/searchCollege?search=${search}`)
            console.log(res);
            return res.data
        }
    })
  
    return { allCollege, isLoading, setSearch, search,refetch };
};

export default AllColleges;