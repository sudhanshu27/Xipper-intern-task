import prisma from "../config/prismaClient.js";

export const webCheckIn = async (req, res) => {
  try {
    const { bookingId, aadhaar } = req.body;

    // Validate input
    if (!bookingId || !aadhaar) {
      return res
        .status(400)
        .json({ error: "Booking ID and Aadhaar are required" });
    }

    // Check if the booking exists
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    // Create check-in entry
    const newCheckIn = await prisma.checkIn.create({
      data: {
        bookingId,
        aadhaar,
      },
    });
    res
      .status(201)
      .json({ message: "Check-in successful", checkIn: newCheckIn });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
