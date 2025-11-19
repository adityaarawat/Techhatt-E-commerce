import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search,setSearch,category,setCategory,priceRange,setPriceRange,handleCategoryChange}) => {
  const { categoryOnlyData} = getData();

  return (
    <div className="mt-10 p-5 rounded-2xl h-max shadow-md shadow-[#ffffff25] bg-transparent border border-[#ffffff1a] w-full max-w-[260px]">
      {/* Search Input */}
      <input onChange={(e)=>setSearch(e.target.value)}
      value={search}
        type="text"
        placeholder="Search..."
        className="w-full bg-[#00000050] text-red-500 placeholder-red-400 p-2 rounded-md outline-none border border-[#ff000050] focus:border-red-500 transition-all"
      />

      {/* Category Section */}
      <h1 className="mt-6 font-bold text-red-500 text-xl border-b border-[#ffffff20] pb-2">
        Category
      </h1>

      <div className="flex flex-col gap-3 mt-4">
        {categoryOnlyData?.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-3 cursor-pointer text-red-500 hover:text-white transition-all"
          >
            <input onChange={handleCategoryChange}
              type="checkbox" name={item} checked={category===item} value={item} 
              className="accent-red-500 w-4 h-4 cursor-pointer"
            />
            <span className="uppercase tracking-wide text-sm">{item}</span>
          </label>
        ))}
      </div>
      {/* price Range */}
      <h1 className="mt-6 font-bold text-red-500 text-xl border-b border-[#ffffff20] pb-2">
        Price Range
      </h1>
      <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-red-500'>Price Range : ${priceRange[0]} -${priceRange[1]}</label>
        <input min={0} max={5000} value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}
  type="range"
  className="w-full accent-red-500 cursor-pointer hover:opacity-90 transition-all"
/>
      </div>
      <button onClick={()=>{setSearch("");setCategory("All");setPriceRange([0,5000])}} className='bg-red-500 hover:scale-105 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'>Reset Filters</button>
    </div>
  )
}

export default FilterSection
