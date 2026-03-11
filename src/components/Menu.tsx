import '../componentStyles/Menu.css'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image_url: string
}

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')

      if (error) {
        console.error('Error fetching menu items:', error)
        setLoading(false)
        return
      }

      const itemsWithImages = (data || []).map((item) => ({
        ...item,
        image_url: supabase.storage
          .from('images')
          .getPublicUrl(item.image_url).data.publicUrl
      }))

      setMenuItems(itemsWithImages)
      setLoading(false)
    }

    fetchMenuItems()
  }, [])

  if (loading) return <p>Loading menu...</p>

  return (
    <div className='menu'>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image_url} alt={item.name} />

            <div className="description">
              <h2>{item.name}:</h2>
              <p>${item.price.toFixed(2)}</p>
            </div>

              <h3>{item.description}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu