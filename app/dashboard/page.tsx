"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/AuthContext"
import { Navigation } from "@/components/Navigation"
import { ShoppingBag, History, User, Star, Clock, MapPin } from "lucide-react"

export default function DashboardPage() {
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

  const quickActions = [
    {
      title: "Browse Menu",
      description: "Explore our delicious dishes",
      icon: ShoppingBag,
      href: "/menu",
      color: "bg-orange-500",
    },
    {
      title: "Order History",
      description: "View your past orders",
      icon: History,
      href: "/orders",
      color: "bg-blue-500",
    },
    {
      title: "Profile Settings",
      description: "Update your information",
      icon: User,
      href: "/profile",
      color: "bg-green-500",
    },
  ]

  const stats = [
    {
      title: "Total Orders",
      value: "12",
      icon: ShoppingBag,
      color: "text-orange-600",
    },
    {
      title: "Favorite Dishes",
      value: "5",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Avg. Delivery Time",
      value: "25 min",
      icon: Clock,
      color: "text-blue-600",
    },
  ]

  return (
    <div className="min-h-screen bg-orange-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Namaste, {user.name}! 🙏</h1>
          <p className="text-lg text-gray-600">Ready to savor some delightful Indian flavors today?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={action.href}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest orders and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Order #1234 delivered</p>
                  <p className="text-sm text-gray-600">Butter Chicken, Naan - ₹350</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">You rated Biryani</p>
                  <p className="text-sm text-gray-600">5 stars - "Bahut Acha!"</p>
                </div>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Delivery address updated</p>
                  <p className="text-sm text-gray-600">New address added to your profile</p>
                </div>
                <span className="text-sm text-gray-500">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
