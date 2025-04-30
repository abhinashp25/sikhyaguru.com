import { Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = ({collegeData}) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchReviews = async () => {
      try {
        const id = collegeData._id || "680a6b86a1460abdd5738b43";
        const response = await axios.get(
          `${import.meta.env.REACT_APP_BACKEND_URI}/api/v0/colleges/${id}`,
          { cancelToken: cancelTokenSource.token }
        );

        if (response.data.success && response.data.data.reviews) {
          // console.log('Fetched Reviews:', response.data.data.reviews); 
          setReviews(response.data.data.reviews);
        }
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
        }
      } finally {
        if (!cancelTokenSource.token.reason) {
          setLoading(false);
        }
      }
    };

    fetchReviews();

    return () => {
      cancelTokenSource.cancel('Component unmounted, request canceled');
    };
  }, []);

  if (loading) return <div className="text-center py-8">Loading reviews...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading reviews: {error}</div>;

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length)
    : 0;

  const ratingCounts = [0, 0, 0, 0, 0]; // For 5 to 1 stars
  reviews.forEach(review => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCounts[5 - review.rating]++;
    }
  });

  const totalReviews = reviews.length;
  const ratingPercentages = ratingCounts.map(count => 
    totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0
  );

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const now = new Date();
  //   const diffInMonths = (now.getFullYear() - date.getFullYear()) * 12 + 
  //                      (now.getMonth() - date.getMonth());
    
  //   if (diffInMonths === 0) return "Less than a month ago";
  //   if (diffInMonths === 1) return "1 month ago";
  //   return `${diffInMonths} months ago`;
  // };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/3 bg-blue-50 p-6 rounded-xl text-center">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 ${
                  star <= Math.round(averageRating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600">Based on {totalReviews} reviews</p>
        </div>

        <div className="md:w-2/3">
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((num, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-16 text-sm text-gray-600">
                  {num} star{num > 1 ? 's' : ''}
                </span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${ratingPercentages[5 - num]}%` }}
                  ></div>
                </div>
                <span className="w-12 text-sm text-gray-600">
                  {ratingPercentages[5 - num]}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[700px] overflow-y-auto pr-2">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-lg">{review.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {review.course} | {review.year}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-4">{review.feedback}</p>

              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-green-600">Pros:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {review.pros.map((pro, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-sm"
                      >
                        {pro}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-sm font-medium text-red-600">Cons:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {review.cons.map((con, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-sm"
                      >
                        {con}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-8 text-gray-500">
            No reviews available yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
