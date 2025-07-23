"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/AuthContext"
import { Navigation } from "@/components/Navigation"
import { Clock, MapPin, Star } from "lucide-react"

interface Order {
  id: string
  orderNumber: string
  date: string
  status: "delivered" | "preparing" | "out-for-delivery" | "cancelled"
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  deliveryAddress: string
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "BV-ABC123DEF",
    date: "2024-01-15",
    status: "delivered",
    items: [
      { name: "Butter Chicken", quantity: 1, price: 280 },
      { name: "Garlic Naan", quantity: 2, price: 50 },
    ],
    total: 380,
    deliveryAddress: "10, MG Road, Bangalore, Karnataka, 560001",
  },
  {
    id: "2",
    orderNumber: "BV-XYZ789GHI",
    date: "2024-01-10",
    status: "delivered",
    items: [
      { name: "Chicken Biryani", quantity: 1, price: 250 },
      { name: "Raita", quantity: 1, price: 60 },
    ],
    total: 310,
    deliveryAddress: "22, Park Street, Kolkata, West Bengal, 700016",
  },
  {
    id: "3",
    orderNumber: "BV-JKL456MNO",
    date: "2024-01-05",
    status: "delivered",
    items: [
      { name: "Masala Dosa", quantity: 1, price: 120 },
      { name: "Sambar", quantity: 1, price: 40 },
    ],
    total: 160,
    deliveryAddress: "45, Linking Road, Mumbai, Maharashtra, 400050",
  },
]

export default function OrdersPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "preparing":
        return "bg-orange-100 text-orange-800"
      case "out-for-delivery":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "Delivered"
      case "preparing":
        return "Preparing"
      case "out-for-delivery":
        return "Out for Delivery"
      case "cancelled":
        return "Cancelled"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-lg text-gray-600">View your past orders and reorder your favorites</p>
        </div>

        {mockOrders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Clock className="h-24 w-24 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
              <p className="text-gray-600 mb-8">Start by ordering something delicious from our menu</p>
              <Button asChild>
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-lg">Order #{order.orderNumber}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        Placed on{" "}
                        {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div>
                      <h4 className="font-medium mb-2">Items Ordered</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Delivered to</p>
                        <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
                      </div>
                    </div>

                    {/* Order Total and Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t">
                      <div>
                        <p className="text-lg font-bold">Total: ₹{order.total.toFixed(2)}</p>
                      </div>
                      <div className="flex space-x-2 mt-4 sm:mt-0">
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-2" />
                            Rate Order
                          </Button>
                        )}
                        <Button size="sm">Reorder</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
