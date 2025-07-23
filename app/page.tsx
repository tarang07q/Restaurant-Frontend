import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/Navigation"
import { Star, Clock, Crown, Utensils, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative gradient-indian text-white overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Crown className="h-16 w-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">स्वागत है Kake Di Hatti में</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the authentic taste of North Indian cuisine with our traditional recipes passed down through
              generations. From crispy parathas to rich curries, every bite tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-orange-600 hover:text-orange-700" asChild>
                <Link href="/register">Join Our Family</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-orange-600 bg-transparent"
                asChild
              >
                <Link href="/login">Already a Member?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Kake Di Hatti?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring you the authentic flavors of Punjab with modern convenience and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200 dark:border-orange-800">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
                <p className="text-muted-foreground">
                  Traditional Punjabi recipes made with love and the finest spices from India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fresh & Fast</h3>
                <p className="text-muted-foreground">
                  Made fresh to order with quick delivery to bring hot, delicious food to your doorstep.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in taste and quality by food critics across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Specialties</h2>
            <p className="text-lg text-muted-foreground">Discover the dishes that made us famous</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Chole Bhature", desc: "Fluffy bhature with spicy chickpea curry" },
              { name: "Butter Chicken", desc: "Creamy tomato-based chicken curry" },
              { name: "Amritsari Kulcha", desc: "Stuffed bread from the holy city" },
              { name: "Dal Makhani", desc: "Rich black lentils cooked overnight" },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 gradient-saffron"></div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card text-card-foreground py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Authentic Indian Flavors?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join thousands of satisfied customers who trust Kake Di Hatti for their Indian food cravings.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
            <Link href="/register">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Crown className="h-6 w-6 text-orange-600 mr-2" />
              <span className="text-lg font-semibold">Kake Di Hatti</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Kake Di Hatti. Bringing authentic Indian flavors to your table.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
