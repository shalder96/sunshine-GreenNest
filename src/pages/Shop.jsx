import React,{useState} from "react";
import plantsData from "../data/plants";
import ProductCard from "../components/ProductCard";

const AllPlants = () => {


  const [plants, setPlants] = useState(plantsData);
  const [sortOrder, setSortOrder] = useState("default");

  // 🔄 Sort function
  const handleSort = (order) => {
    let sortedPlants = [...plants];
    if (order === "lowToHigh") {
      sortedPlants.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedPlants.sort((a, b) => b.price - a.price);
    } else {
      sortedPlants = plantsData; // reset
    }
    setPlants(sortedPlants);
    setSortOrder(order);
  };


  return (
    <section className="py-0 px-0 bg-[#1B4332] min-h-screen">
      <div className="w-full mx-auto">

        {/* 🔹 Ribbon (like Amazon) */}
        <div className="flex flex-wrap items-center justify-between w-full gap-4 px-4 py-3 mb-10 border border-gray-200 shadow bg-white/70 backdrop-blur-md">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-medium text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
              className="px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-full gap-2 sm:w-auto">
            <input
              type="text"
              placeholder="Search plants..."
              className="w-full px-3 py-2 text-gray-700 border rounded-lg sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => {
                const keyword = e.target.value.toLowerCase();
                setPlants(
                  plantsData.filter((p) =>
                    p.name.toLowerCase().includes(keyword)
                  )
                );
              }}
            />
          </div>

          {/* Example Extra Buttons (Filter, Offers) */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-[#1B4332] text-white rounded-lg hover:bg-[#2E7D32] transition">
              Filters
            </button>
            <button className="px-4 py-2 text-black transition bg-yellow-500 rounded-lg hover:bg-yellow-600">
              Today’s Deals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {plantsData.map((plant) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPlants;
