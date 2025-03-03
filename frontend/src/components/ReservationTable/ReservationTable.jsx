import './ReservationTable.css'

const ReservationTable = () => {
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
                <tr>
                    <td>Johann Coetzee</td>
                    <td>Property 1</td>
                    <td>19/06/2024</td>
                    <td>24/06/2024</td>
                    <td><button className="delete-btn">Delete</button></td>
                </tr>
                <tr>
                    <td>Asif Hassam</td>
                    <td>Property 2</td>
                    <td>19/06/2024</td>
                    <td>19/06/2024</td>
                    <td><button className="delete-btn">Delete</button></td>
                </tr>
                <tr>
                    <td>Kago Kola</td>
                    <td>Property 1</td>
                    <td>25/06/2024</td>
                    <td>30/06/2024</td>
                    <td><button className="delete-btn">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default ReservationTable;