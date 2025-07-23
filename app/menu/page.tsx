"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"
import { Navigation } from "@/components/Navigation"
import { Search, Plus, Flame, Leaf } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  popular?: boolean
  spicy?: boolean
  vegetarian?: boolean
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Chole Bhature",
    description: "Fluffy deep-fried bread served with spicy chickpea curry and pickles",
    price: 180,
    image: "/placeholder.svg?height=200&width=300",
    category: "Main Course",
    popular: true,
    spicy: true,
    vegetarian: true,
  },
  {
    id: "2",
    name: "Butter Chicken",
    description: "Tender chicken pieces in rich, creamy tomato-based curry with aromatic spices",
    price: 320,
    image: "/placeholder.svg?height=200&width=300",
    category: "Main Course",
    popular: true,
    spicy: false,
  },
  {
    id: "3",
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese cubes in spiced tomato and onion gravy",
    price: 280,
    image: "/placeholder.svg?height=200&width=300",
    category: "Main Course",
    vegetarian: true,
    spicy: true,
  },
  {
    id: "4",
    name: "Amritsari Kulcha",
    description: "Stuffed bread with spiced potatoes, served with chole and butter",
    price: 150,
    image: "/placeholder.svg?height=200&width=300",
    category: "Breads",
    popular: true,
    vegetarian: true,
  },
  {
    id: "5",
    name: "Dal Makhani",
    description: "Slow-cooked black lentils with butter, cream and aromatic spices",
    price: 220,
    image: "/placeholder.svg?height=200&width=300",
    category: "Main Course",
    vegetarian: true,
  },
  {
    id: "6",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with spiced chicken and saffron",
    price: 350,
    image: "/placeholder.svg?height=200&width=300",
    category: "Rice & Biryani",
    popular: true,
    spicy: true,
  },
  {
    id: "7",
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk and aromatic spices",
    price: 40,
    image: "/placeholder.svg?height=200&width=300",
    category: "Beverages",
    vegetarian: true,
  },
  {
    id: "8",
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
    price: 80,
    image: "/placeholder.svg?height=200&width=300",
    category: "Desserts",
    vegetarian: true,
  },
  {
    id: "9",
    name: "Tandoori Chicken",
    description: "Marinated chicken cooked in traditional clay oven with Indian spices",
    price: 380,
    image: "/placeholder.svg?height=200&width=300",
    category: "Tandoor",
    spicy: true,
  },
  {
    id: "10",
    name: "Palak Paneer",
    description: "Fresh cottage cheese cubes in creamy spinach gravy with garlic and ginger",
    price: 260,
    image: "/placeholder.svg?height=200&width=300",
    category: "Main Course",
    vegetarian: true,
  },
]

const categories = ["All", "Main Course", "Tandoor", "Rice & Biryani", "Breads", "Beverages", "Desserts"]

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { addItem } = useCart()
  const { toast } = useToast()

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
    })
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic Indian flavors crafted with traditional recipes and the finest spices
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-orange-200 dark:border-orange-800"
            >
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2 flex gap-2">
                  {item.popular && <Badge className="bg-orange-600">Popular</Badge>}
                  {item.vegetarian && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Leaf className="h-3 w-3 mr-1" />
                      Veg
                    </Badge>
                  )}
                  {item.spicy && (
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      <Flame className="h-3 w-3 mr-1" />
                      Spicy
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                  <Button onClick={() => handleAddToCart(item)} className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
