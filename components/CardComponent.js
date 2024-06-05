export const CardComponent = (product) => {
  const {
    mainImage,
    name,
    price: { minPrice, maxPrice },
  } = product;
  return `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="rounded-t-lg object-cover w-[400px]" src="${mainImage}" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="text-[20px] font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">${name}</h5>
            </a>
            <p class="mb-3 font-bold text-[20px] text-gray-700 dark:text-gray-400">$ ${minPrice}</p>
        </div>
    </div>
    `;
};
