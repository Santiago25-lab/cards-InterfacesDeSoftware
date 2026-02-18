import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 p-10">
      
+

      <div className="flex gap-10 justify-center">

        {/* Card 1 */}
        <div className="w-72 bg-white rounded-3xl shadow-xl p-4">
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442"
              alt="New York"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">New York</h2>
              <p className="text-sm opacity-80">Economy</p>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <span>from $120</span>
            <span>JFK</span>
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-full">
            Search flight
          </button>
        </div>


        {/* Card 2 */}
        <div className="relative w-72 h-full bg-white rounded-2x1 shadow-xl p-4">
          
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
            alt="San Francisco"
            className="w-full h-72 object-cover rounded-2xl"
          />

          <div className="mt-4">
            <h2 className="text-2xl font-bold">San Francisco</h2>
            <p className="text-sm text-gray-500">Premium economy</p>
          </div>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <span>from $240</span>
            <span>SFO</span>
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-full">
            Search flight
          </button>
        </div>

      </div>
    </div>
  );
}
