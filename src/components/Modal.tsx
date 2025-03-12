import React from 'react';

interface ModalProps {
  onClose: () => void;
  onAddPassenger: () => void; // New prop for adding a passenger
  canRemovePassenger: boolean; // New prop to determine if we can remove a passenger
  selectedTrain: { id: string; name: string; price: number }; // Pass selected train details
  passengers: { name: string; email: string; age: string; gender: string }[]; // Pass passenger details
  handlePassengerChange: (index: number, field: string, value: string) => void; // Function to handle passenger changes
  handleRemovePassenger: (index: number) => void; // Function to handle removing a passenger
  handleConfirmBooking: () => void; // Function to confirm booking
  errorMessages: string[]; // Array of error messages
}

const Modal: React.FC<ModalProps> = ({ 
  onClose, 
  onAddPassenger, 
  canRemovePassenger, 
  selectedTrain, 
  passengers, 
  handlePassengerChange, 
  handleRemovePassenger, 
  handleConfirmBooking, 
  errorMessages 
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add Passenger Details</h2>
          <button onClick={onAddPassenger} className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700">
            Add Passenger
          </button>
        </div>
        {passengers.map((passenger, index) => (
          <div key={index} className="mb-4">
            <input 
              type="text" 
              placeholder="Name" 
              value={passenger.name} 
              onChange={(e) => handlePassengerChange(index, 'name', e.target.value)} 
              className="w-full border p-2 my-2" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={passenger.email} 
              onChange={(e) => handlePassengerChange(index, 'email', e.target.value)} 
              className="w-full border p-2 my-2" 
            />
            <input 
              type="number" 
              placeholder="Age" 
              value={passenger.age} 
              onChange={(e) => handlePassengerChange(index, 'age', e.target.value)} 
              className="w-full border p-2 my-2" 
            />
            <select 
              value={passenger.gender} 
              onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)} 
              className="w-full border p-2 my-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {canRemovePassenger && (
              <button onClick={() => handleRemovePassenger(index)} className="text-red-600">Remove</button>
            )}
          </div>
        ))}
        
        {errorMessages.length > 0 && (
          <div className="bg-red-100 text-red-800 p-2 rounded-md mb-4">
            <h3 className="font-bold">Please correct the following errors:</h3>
            <ul>
              {errorMessages.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <p>Total Cost: ₹{(selectedTrain.price + 10) * passengers.length}</p>
          <div className="flex justify-between items-center ">
            <button 
              onClick={handleConfirmBooking} 
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Confirm Booking
            </button>
            <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;