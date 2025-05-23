import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import { MapPin, Calendar, DoorClosed, Info } from 'lucide-react';

interface GuestPageProps {}

const GuestPage: React.FC<GuestPageProps> = () => {
  const { guestSlug } = useParams<{ guestSlug: string }>();
  
  const guestData = {
    name: "Guest",
    property: {
      name: "Luxury Beachfront Villa",
      address: "123 Ocean Drive, Malibu, CA - Unit A",
      checkinDate: "2025-06-15",
      checkoutDate: "2025-06-22",
      doorCode: "1234#",
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto bg-white min-h-screen shadow-sm">
        <div className="p-4 bg-purple-700 text-white">
          <h1 className="text-xl font-bold">Welcome to your destination, {guestData.name}!</h1>
          <p className="text-blue-100">Your personal concierge for {guestData.property.name}</p>
        </div>
        
        <div className="p-4">
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-start">
                <DoorClosed className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Check-in Information</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Door code: <span className="font-mono font-medium">{guestData.property.doorCode}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Check-in: {guestData.property.checkinDate}
                  </p>
                  <p className="text-sm text-gray-600">
                    Check-out: {guestData.property.checkoutDate}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Property Location</h3>
                  <p className="text-sm text-gray-600 mt-1">{guestData.property.address}</p>
                  <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Local Insider Tip</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Be sure to catch the sunset at Paradise Cove Beach - it's just a short drive from your villa and offers breathtaking views!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
