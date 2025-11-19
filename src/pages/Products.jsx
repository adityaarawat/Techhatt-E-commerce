import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import loading from "../assets/loading4.webm";
import ProductCard from "../components/ProductCard";
import Pagenation from "../components/Pagenation";

const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const filterData = data?.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });

  const dynamicPage = Math.ceil((filterData?.length || 0) / 8);

  return (
    <div className="min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {/* Mobile filter header */}
        <div className="flex items-center justify-between md:hidden gap-3 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenFilter(true)}
              className="bg-red-500 text-white px-3 py-2 rounded-md font-semibold"
              aria-label="Open filters"
            >
              Filters
            </button>
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search products..."
              className="px-3 py-2 rounded-md bg-black/10 text-white placeholder:text-white/60 outline-none"
            />
          </div>

          <div className="text-sm text-red-500 font-semibold">
            {filterData?.length ?? 0} results
          </div>
        </div>

        {/* Layout: sidebar (md+) + content */}
        {data?.length > 0 ? (
          <div className="flex gap-8">
            {/* Sidebar for md+ */}
            <aside className="hidden md:block w-64">
              <FilterSection
                handleCategoryChange={handleCategoryChange}
                search={search}
                setSearch={(val) => {
                  setSearch(val);
                  setPage(1);
                }}
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={(pr) => {
                  setPriceRange(pr);
                  setPage(1);
                }}
              />
            </aside>

            {/* Main content */}
            <main className="flex-1">
              {/* Mobile filter drawer */}
              {openFilter && (
                <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-80 bg-[#0b0b0b] p-4 overflow-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-red-500 font-bold text-lg">Filters</h3>
                      <button
                        onClick={() => setOpenFilter(false)}
                        className="text-white text-xl"
                        aria-label="Close filters"
                      >
                        ✕
                      </button>
                    </div>

                    <FilterSection
                      handleCategoryChange={(e) => {
                        handleCategoryChange(e);
                        setOpenFilter(false);
                      }}
                      search={search}
                      setSearch={(val) => {
                        setSearch(val);
                        setPage(1);
                      }}
                      category={category}
                      setCategory={(val) => {
                        setCategory(val);
                        setPage(1);
                      }}
                      priceRange={priceRange}
                      setPriceRange={(pr) => {
                        setPriceRange(pr);
                        setPage(1);
                      }}
                    />

                    <div className="mt-4">
                      <button
                        onClick={() => setOpenFilter(false)}
                        className="w-full bg-red-500 text-white py-2 rounded-md"
                      >
                        Apply & Close
                      </button>
                    </div>
                  </div>

                  {/* click outside closes */}
                  <div
                    className="w-full h-full"
                    onClick={() => setOpenFilter(false)}
                    aria-hidden
                  />
                </div>
              )}

              {/* Grid */}
              {filterData?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-6">
                    {filterData?.slice(page * 8 - 8, page * 8).map((products, idx) => (
                      <ProductCard key={products.id ?? idx} products={products} />
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-center mt-8">
                    {/* custom simple pagination to ensure active page is red */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => page > 1 && pageHandler(page - 1)}
                        className="px-3 py-1 rounded-md bg-black/20 text-white"
                      >
                        Prev
                      </button>

                      {/* pages */}
                      {Array.from({ length: dynamicPage || 0 }).map((_, i) => {
                        const pageNo = i + 1;
                        const isActive = pageNo === page;
                        return (
                          <button
                            key={pageNo}
                            onClick={() => pageHandler(pageNo)}
                            className={`px-3 py-1 rounded-md min-w-[38px] ${
                              isActive
                                ? "bg-red-500 text-white font-semibold"
                                : "bg-black/10 text-white"
                            }`}
                          >
                            {pageNo}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => page < dynamicPage && pageHandler(page + 1)}
                        className="px-3 py-1 rounded-md bg-black/20 text-white"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center md:h-[600px] mt-10">
                  <video autoPlay loop muted playsInline className="w-28 h-28">
                    <source src={loading} type="video/webm" />
                  </video>
                </div>
              )}
            </main>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video autoPlay loop muted playsInline className="w-28 h-28">
              <source src={loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
