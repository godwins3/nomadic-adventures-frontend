'use client';

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  id?: string;
  rating: number;
  comment: string;
}

interface ReviewSystemProps {
  tourId: string | string[];
}

const ReviewSystem: React.FC<ReviewSystemProps> = ({ tourId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({ rating: 0, comment: '' });
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch reviews from the API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/v1/reviews?tourId=${tourId}`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.error('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [tourId]);

  // Handle rating change
  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  // Handle comment change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, comment: e.target.value });
  };

  // Submit review to the backend
  const submitReview = async () => {
    if (newReview.rating === 0 || newReview.comment.trim() === '') {
      alert('Please provide both a rating and a comment.');
      return;
    }

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tourId,
          rating: newReview.rating,
          comment: newReview.comment,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        setReviews([...reviews, { ...newReview, id: Date.now().toString() }]);
        setNewReview({ rating: 0, comment: '' });
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>

      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="mb-4 p-4 bg-gray-100 rounded">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color={index < review.rating ? "#ffc107" : "#e4e5e9"} />
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review!</p>
      )}

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
      </div>
    </div>
  );
};

export default ReviewSystem;
