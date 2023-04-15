import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    return comments.map(comment => (
        <div key={comment.id}>
            <Comment data={comment} />
            {
                comment.replies.length > 0
                    ? (
                        <div className="ml-12 pl-3 border-l border-l-gray-300 rounded-sm">
                            <CommentsList comments={comment.replies} />
                        </div>
                    )
                    : null
            }
        </div>
    ));
};

export default CommentsList;