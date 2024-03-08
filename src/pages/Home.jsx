import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [addCat, setAddCat] = useState('');
  const [cats, setCats] = useState([]);

  // not working stucked here -0 xxxxxxxxxxxxxxxxx
  useEffect(() => {
    const fetchedCategories = JSON.parse(localStorage.getItem('categories'));

    if (fetchedCategories) {
      setCats(fetchedCategories);
    } else {
      setCats(['Enter first category']);
    }
  }, []);

  function Category(e) {
    e.preventDefault();
    let category = document.querySelector('#Category');
    category.style.display = 'inline';
  }

  function addCategory(e) {
    e.preventDefault();

    //hide Category form
    let category = document.querySelector('#Category');
    category.style.display = 'none';

    //Shows the created Category
    let newCat = document.querySelector('#addCategory');
    newCat.style.display = 'inline';
  }

  // take data from feild and save local storage -- oza
  const handleChange = (e) => {
    console.log(e.target.value);
    setAddCat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedCategories = [];
    const storedCategories = JSON.parse(localStorage.getItem('categories'));

    if (storedCategories) {
      updatedCategories = [...storedCategories, addCat];
    } else {
      updatedCategories = [addCat];
    }

    console.log(updatedCategories);

    localStorage.setItem('categories', JSON.stringify(updatedCategories));

    setAddCat('');
    console.log('Items successfully saved in local storage');
  };

  return (
    <>
      <div>
        <button
          onClick={Category}
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white flex font-bold py-2 px-4 rounded"
        >
          Add Category
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <div className="hidden" id="Category">
        <hr className="w-full mt-6 mb-6 bg-teal-500" />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-start gap-2">
            <label className=" text-white m-2 text-xl">Enter Category:</label>
            <input
              type="text"
              name="categoryName"
              placeholder="Category Name"
              value={addCat}
              className="rounded p-2"
              onChange={handleChange}
              required
            />
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white flex font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {/* redesigning the card cat component  */}
      {/* bg-teal-500 */}
      {/* bg-teal-900 */}
      <div className="hidden " id="addCategory">
        <hr className="w-full mt-6 mb-6 bg-teal-500" />
        {cats.map((item, index) => (
          <div
            className="card bg-teal-500 w-[25%] text-white font-semibold p-2 flex justify-center items-center h-[15vh] rounded-lg text-xl cursor-pointer"
            key={index}
          >
            <Link to={'https://www.jayraiweb.com'}>{item}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
