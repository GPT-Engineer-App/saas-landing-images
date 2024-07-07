import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package2 } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center space-x-4">
          <Package2 className="h-8 w-8" />
          <span className="text-2xl font-bold">DevSaaS</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-lg">Home</a>
          <a href="#features" className="text-lg">Features</a>
          <a href="#pricing" className="text-lg">Pricing</a>
          <a href="#about" className="text-lg">About</a>
          <a href="#contact" className="text-lg">Contact</a>
        </nav>
        <Button variant="primary">Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome to DevSaaS</h1>
        <p className="text-xl text-muted-foreground">Your ultimate software development solution</p>
        <div className="space-x-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 mx-auto" />
              <CardTitle className="text-center">Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 mx-auto" />
              <CardTitle className="text-center">Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 mx-auto" />
              <CardTitle className="text-center">Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">Description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold">$10/month</p>
              <ul className="list-disc list-inside">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="w-full mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold">$20/month</p>
              <ul className="list-disc list-inside">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="w-full mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold">$30/month</p>
              <ul className="list-disc list-inside">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="primary" className="w-full mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="text-center max-w-2xl mx-auto">We are a software development company committed to delivering top-notch solutions to our clients. Our mission is to empower businesses with innovative technology and exceptional service.</p>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" />
          <Button variant="primary" className="w-full">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Package2 className="h-8 w-8" />
            <span className="text-2xl font-bold">DevSaaS</span>
          </div>
          <nav className="flex space-x-6">
            <a href="#privacy" className="text-lg">Privacy Policy</a>
            <a href="#terms" className="text-lg">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;