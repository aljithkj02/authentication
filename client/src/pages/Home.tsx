import { useEffect, useState } from 'react'
import { getProducts } from '../services/products'
import { useNavigate } from 'react-router-dom'
import { Product } from '../types/intex'

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const res = await getProducts();
    if (!res?.status) {
      navigate('/');
      return;
    }
    setProducts(res?.data || []);
  }
  return (
    <div className='p-10'>
      <p className='text-2xl font-medium text-center'>Products</p>
      <div className='grid grid-cols-4 gap-10 mt-5'>
        {
          products.map((item: Product) => {
            return (
              <div key={item.id} className='p-5 col-span-1 bg-gray-200 hover:bg-gray-300 duration-300 transition-all cursor-pointer rounded-md'>
                <div className='w-full h-52 bg-white overflow-hidden'>
                  <img src={item.thumbnail} alt={item.title} className='w-full h-full hover:scale-125 duration-300 transition-all' />
                </div>

                <div className='mt-3'>
                  <p className='text-gray-600 text-lg'>{item.title}</p>
                  <p className='text-gray-500'>{item.description.slice(0, 100) + "..."}</p>
                  <p className='text-gray-500'>{item.title}</p>
                </div>
              </div>
            )
          })
      }
      </div>
    </div>
  )
}
