import "./ReservationTable.css";
import axios from "../../api/apiClient";
import { useEffect, useState } from "react";

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get("/api/reservations/user", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        console.log("Fetched Reservations:", response.data);
        setReservations(response.data);
      } catch (error) {
        console.error(
          "Error fetching reservations:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reservation?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`/reservations/${id}`);
      setReservations(
        reservations.filter((reservation) => reservation._id !== id)
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
      alert("Failed to delete reservation.");
    }
  };

  return (
    <div className="reservation-container">
      <p className="reservation-container-title">My Reservations</p>

      <table>
        <thead>
          <tr>
            <th>Booked by</th>
            <th>Property</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.user.username}</td>
              <td>{reservation.title}</td>
              <td>{new Date(reservation.startDate).toLocaleDateString()}</td>
              <td>{new Date(reservation.endDate).toLocaleDateString()}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(reservation._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
