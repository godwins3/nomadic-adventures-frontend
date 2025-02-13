import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  rating: number;
  comment: string;
  id?: number;
}

interface ReviewSystemProps {
  tourId: number;
  existingReviews?: Review[];
}

const ReviewSystem: React.FC<ReviewSystemProps> = ({ existingReviews = [] }) => {
  const [reviews, setReviews] = useState<Review[]>(existingReviews);
  const [newReview, setNewReview] = useState<Review>({ rating: 0, comment: '' });

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, comment: e.target.value });
  };

  const submitReview = () => {
    if (newReview.rating === 0 || newReview.comment.trim() === '') {
      alert('Please provide both a rating and a comment.');
      return;
    }
    // In a real application, you would send this to your backend
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ rating: 0, comment: '' });
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color={index < review.rating ? "#ffc107" : "#e4e5e9"} />
            ))}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-2">Write a Review</h4>
        <div className="flex mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < newReview.rating ? "#ffc107" : "#e4e5e9"}
              onClick={() => handleRatingChange(index + 1)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <textarea
          value={newReview.comment}
          onChange={handleCommentChange}
          className="w-full p-2 border rounded mb-2"
          placeholder="Write your review here..."
          rows={4}
        />
        <button
          onClick={submitReview}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ReviewSystem;

