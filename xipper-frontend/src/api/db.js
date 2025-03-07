const API_BASE_URL = "http://localhost:3001"; // JSON Server Base URL

// ✅ Register a new user
export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// ✅ User login
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

// ✅ Fetch all hotels
export const getHotels = async () => {
  const response = await fetch(`${API_BASE_URL}/hotels`);
  return response.json();
};

// ✅ Fetch a specific hotel by ID
export const getHotelById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/hotels/${id}`);
  return response.json();
};

// ✅ Fetch user bookings
export const getUserBookings = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/api/booking?userId=${userId}`);
  return response.json();
};

// ✅ Create a new booking
export const createBooking = async (bookingData) => {
  const response = await fetch(`${API_BASE_URL}/api/booking`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  return response.json();
};

// ✅ Perform Web Check-in
export const webCheckIn = async (checkInData) => {
  const response = await fetch(`${API_BASE_URL}/api/checkin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(checkInData),
  });
  return response.json();
};
