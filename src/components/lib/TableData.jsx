'use client'
import React, { useState } from 'react';
import TableRow from './TableRow';
import FeedbackModal from '../shared/FeedbackModal';



const TableData = ({ myCollege, isLoading }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [feedbackForCollege, setFeedbackForCollege] = useState(null)

    const handleFeedbackOpen = (college) => {
        setFeedbackForCollege(college)
        console.log(college);
        setIsOpen(true);
    };
    const handleFeedbackClose = () => {
        setFeedbackForCollege(null)
        setIsOpen(false)
    };


    return (
        <div className="overflow-x-auto my-12">
            <h2 className='text-center text-2xl font-bold mb-4'>Your Submission List</h2>

            {isOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <div className="modal-action mt-0">
                            <button className="btn btn-sm btn-error" onClick={() => handleFeedbackClose()}>
                                X
                            </button>
                        </div>
                        <FeedbackModal college={feedbackForCollege} handleFeedbackClose={handleFeedbackClose} setIsOpen={setIsOpen}></FeedbackModal>

                    </div>
                </div>
            )}



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
                                    key={college._id}
                                    handleFeedback={handleFeedbackOpen}
                                    isOpen={isOpen}
                                />



                            )
                        })
                    }

                </tbody>
                {/* foot */}
                <tfoot className=' flex justify-center '>
                    <tr className=' '><td>Submission Details</td></tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TableData;