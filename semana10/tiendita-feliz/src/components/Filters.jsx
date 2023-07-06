import { useState } from "react";

const Filters = ({ setFilters }) => {
    const [minPrice, setMinPrice] = useState(0);

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
        setFilters(prevState => ({
            ...prevState,
            minPrice
        }));
    };

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <label htmlFor="price">A partir de: </label>
                <input
                    type="range"
                    name=""
                    id="price"
                    min={0}
                    max={1500}
                    onChange={handleMinPriceChange}
                    value={minPrice}
                />
                <span>$ {minPrice}</span>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="category">Categoría: </label>
                <select
                    id="category"
                    className="border rounded-lg bg-zinc-900"
                // value={category}
                >
                    <option value="all">Todos</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;