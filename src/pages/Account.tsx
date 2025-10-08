import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Account = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card className="p-6">
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No orders yet</p>
                <Button>Start Shopping</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">user@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">January 2025</p>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
