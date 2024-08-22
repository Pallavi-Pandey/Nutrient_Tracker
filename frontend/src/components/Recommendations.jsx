import React from 'react';

const Recommendations = ({ log, goals }) => {
    // Calculate current intake
    const totalCalories = log.reduce((acc, food) => acc + food.calories, 0);
    const totalProtein = log.reduce((acc, food) => acc + food.protein, 0);
    const totalCarbs = log.reduce((acc, food) => acc + food.carbohydrates, 0);
    const totalFats = log.reduce((acc, food) => acc + food.fat, 0);

    return (
        <div className="recommendations">
            <div className="recommendations-section">
                <h2>Daily Needs</h2>
                <p>To meet your daily goals, consider the following:</p>
                {totalCalories < goals.calories && (
                    <p className="recommendation-item">
                        You need <strong>{goals.calories - totalCalories} more calories</strong>.
                    </p>
                )}
                {totalProtein < goals.protein && (
                    <p className="recommendation-item">
                        You need <strong>{goals.protein - totalProtein} more grams of protein</strong>.
                    </p>
                )}
                {totalCarbs < goals.carbs && (
                    <p className="recommendation-item">
                        You need <strong>{goals.carbs - totalCarbs} more grams of carbohydrates</strong>.
                    </p>
                )}
                {totalFats < goals.fats && (
                    <p className="recommendation-item">
                        You need <strong>{goals.fats - totalFats} more grams of fat</strong>.
                    </p>
                )}
            </div>

            <div className="recommendations-section">
                <h2>Recommended Foods</h2>
                <p>Here are some foods to help you meet your daily goals:</p>
                {totalCalories < goals.calories && (
                    <p className="recommendation-item">
                        Consider adding <strong>nuts, seeds, or avocados</strong> to your meals.
                    </p>
                )}
                {totalProtein < goals.protein && (
                    <p className="recommendation-item">
                        Consider adding <strong>chicken, tofu, or beans</strong> to your meals.
                    </p>
                )}
                {totalCarbs < goals.carbs && (
                    <p className="recommendation-item">
                        Consider adding <strong>whole grains, fruits, or vegetables</strong> to your meals.
                    </p>
                )}
                {totalFats < goals.fats && (
                    <p className="recommendation-item">
                        Consider adding <strong>olive oil, cheese, or fatty fish</strong> to your meals.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Recommendations;
