import React, { useState } from 'react';

import Button from '@/components/form/Button';

const AddCommentForm = (): React.ReactElement => {
  const [comment, setComment] = useState('');

  return (
    <div className="min-w-0 flex-1">
      <form className="relative">
        <div className="border-b border-gray-200 focus-within:border-sky-600">
          <label htmlFor="comment" className="sr-only">
            Add your comment
          </label>
          <textarea
            rows={3}
            name="comment"
            id="comment"
            className="block w-full resize-none border-0 border-b border-transparent p-2 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-sky-600 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e): void => setComment(e.target.value)}
          />
        </div>
        <div className="absolute bottom-0 right-0 pb-2 pr-2">
          <Button
            className="px-1 sm:px-2 py-1 sm:py-1"
            btnSize="sm"
            type="submit"
            disabled={!comment}
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddCommentForm;
