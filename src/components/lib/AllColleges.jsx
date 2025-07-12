"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

const AllColleges = () => { 
    const [search, setSearch] = useState('')
    const [debouncedSearch] = useDebounce(search, 1000)
    const { data: allCollege = [], isLoading, refetch } = useQuery({
        queryKey: ['colleges', debouncedSearch],
        queryFn: async () => {
            const res = await axios.get(`/api/allCollege?search=${search}`)
            console.log(res);
            return res.data
        }
    })
    const filterTedCollage = useMemo(() => {
        if (!debouncedSearch.trim()) return allCollege

        return allCollege.filter(collage =>
            collage.collage_Name.toLowerCase().includes(debouncedSearch.toLocaleLowerCase())
        )


    }, [debouncedSearch, allCollege])
    return { allCollage: filterTedCollage, isLoading, setSearch, search,refetch };
};

export default AllColleges;