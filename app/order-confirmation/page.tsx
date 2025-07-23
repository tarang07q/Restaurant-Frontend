"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/Navigation"
import { CheckCircle, Clock, MapPin, Phone } from "lucide-react"

export default function OrderConfirmationPage() {
  const orderNumber = "BV-" + Math.random().toString(36).substr(2, 9).toUpperCase()
  const estimatedTime = "25-30 minutes"

  return (
    <div className="min-h-screen bg-orange-50">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">Thank you for your order. We're preparing your delicious meal.</p>
        </div>

        <div className="space-y-6">
          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-bold text-lg">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated Delivery</p>
                  <p className="font-bold text-lg flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {estimatedTime}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Delivery Address</p>
                  <p className="text-gray-600">
                    #221, 1st Cross, 2nd Main
                    <br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium">Contact Number</p>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Status */}
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <div>
                    <p className="font-medium">Order Confirmed</p>
                    <p className="text-sm text-gray-600">Your order has been received and confirmed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium">Preparing</p>
                    <p className="text-sm text-gray-600">Our chefs are preparing your meal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-400">Out for Delivery</p>
                    <p className="text-sm text-gray-400">Your order is on its way</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-400">Delivered</p>
                    <p className="text-sm text-gray-400">Enjoy your meal!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/orders">View Order History</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/menu">Order Again</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
