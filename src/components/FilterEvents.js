import React from 'react';
// Add any CSS styles if needed

const FilterEvents = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-events">
      <label>
        Filter by Category:
        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </label>
    </div>
  );
};

export default FilterEvents;
