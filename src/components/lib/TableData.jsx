'use client'
import * as React from 'react';
import TableRow from './TableRow';



const TableData = ({ myCollege, isLoading }) => {
    return (
        <div className="overflow-x-auto my-12">
            <h2 className='text-center text-2xl font-bold mb-4'>Your Submission List</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Name</th>            
                        <th>College Name</th>
                        <th>College Banner</th>
                        <th>Course</th>
                        <th>College Details</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <div>Data is Loading</div> :
                        myCollege?.map((college, idx) => {
                            return (
                                <TableRow
                                    idx={idx}
                                    college={college}
                                    key={college._id} />
                            )
                        })
                    }

                </tbody>
                {/* foot */}
                <tfoot className=' flex justify-center '>
                    <tr className=' '>Submission Details</tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TableData;