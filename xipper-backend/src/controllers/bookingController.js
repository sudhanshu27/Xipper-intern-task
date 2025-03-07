import prisma from "../config/prismaClient.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { hotelName, checkIn, checkOut, guests } = req.body;

    if (!hotelName || !checkIn || !checkOut || !guests) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newBooking = await prisma.booking.create({
      data: {
        hotelName,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests,
        userId: req.user.userId, // User ID from JWT middleware
      },
    });

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fetch all bookings for a user
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.userId },
    });

    res.status(200).json({ bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};