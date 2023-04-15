import React from 'react';
import CommentsList from './CommentsList';

const mockCommentsData = [
    {
        id: 1,
        name: 'Keshav Rathi',
        text: 'This is a sample comment text',
        replies: [
            {
                id: 11,
                name: 'Keshav Rathi',
                text: 'This is a sample comment text',
                replies: []
            }
        ]
    },
    {
        id: 2,
        name: 'Keshav Rathi',
        text: 'This is a sample comment text',
        replies: [
            {
                id: 21,
                name: 'Keshav Rathi',
                text: 'This is a sample comment text',
                replies: []
            },
            {
                id: 22,
                name: 'Keshav Rathi',
                text: 'This is a sample comment text',
                replies: [
                    {
                        id: 221,
                        name: 'Keshav Rathi',
                        text: 'This is a sample comment text',
                        replies: [
                            {
                                id: 2211,
                                name: 'Keshav Rathi',
                                text: 'This is a sample comment text',
                                replies: []
                            },
                            {
                                id: 2212,
                                name: 'Keshav Rathi',
                                text: 'This is a sample comment text',
                                replies: []
                            }
                        ]
                    },
                    {
                        id: 222,
                        name: 'Keshav Rathi',
                        text: 'This is a sample comment text',
                        replies: []
                    }
                ]
            },
            {
                id: 23,
                name: 'Keshav Rathi',
                text: 'This is a sample comment text',
                replies: []
            }
        ]
    },
    {
        id: 3,
        name: 'Keshav Rathi',
        text: 'This is a sample comment text',
        replies: [
            {
                id: 31,
                name: 'Keshav Rathi',
                text: 'This is a sample comment text',
                replies: [
                    {
                        id: 311,
                        name: 'Keshav Rathi',
                        text: 'This is a sample comment text',
                        replies: []
                    }
                ]
            },
            {
                id: 32,
                name: 'Keshav Rathi',
                text: 'This is a sample comment text',
                replies: [
                    {
                        id: 321,
                        name: 'Keshav Rathi',
                        text: 'This is a sample comment text',
                        replies: []
                    }
                ]
            }
        ]
    }
];

const CommentsContainer = () => {
    return (
        <div className="m-5 py-5">
            <h1 className="text-xl font-bold">Comments</h1>
            <CommentsList comments={mockCommentsData} />
        </div>
    );
};

export default CommentsContainer;