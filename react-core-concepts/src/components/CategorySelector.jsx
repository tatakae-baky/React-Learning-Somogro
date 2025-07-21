/**
 * CategorySelector component for choosing which category to display
 * @param {string} selectedCategory - The currently selected category
 * @param {function} onCategoryChange - Function to call when category changes
 */
function CategorySelector({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: 'women-saree', name: 'Women\'s Saree' },
    { id: 'women-shalwar-kameez', name: 'Women\'s Shalwar Kameez' },
    { id: 'women-kurta', name: 'Women\'s Kurta' },
    { id: 'women-accessories', name: 'Women\'s Accessories' }
  ];

  return (
    <div className="category-selector">
      <h3>Select Aarong Category</h3>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorySelector; 