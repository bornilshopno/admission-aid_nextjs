"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

const AllColleges = () => { 
    const [search, setSearch] = useState('')
    // const [debouncedSearch] = useDebounce(search, 1000)
    const { data: allCollege = [], isLoading, refetch } = useQuery({
        queryKey: ['colleges', search],
        queryFn: async () => {
            const res = await axios.get(`/api/searchCollege?search=${search}`)
            console.log(res);
            return res.data
        }
    })
    // const filterTedCollege = useMemo(() => {
    //     if (!debouncedSearch.trim()) return allCollege

    //     return allCollege.filter(collage =>
    //         collage.college_Name.toLowerCase().includes(debouncedSearch.toLocaleLowerCase())
    //     )


    // }, [debouncedSearch, allCollege])
    return { allCollege, isLoading, setSearch, search,refetch };
};

export default AllColleges;