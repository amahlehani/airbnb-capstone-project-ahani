import './ViewReservationsPage.css'
import AdminNav from '../../components/Nav/AdminNav'
import ReservationTable from '../../components/ReservationTable/ReservationTable'
import Footer from '../../components/Footer/Footer'

const ViewReservationsPage = () => {
  return (
    <div>
        <AdminNav />
        <ReservationTable />
        <Footer />
    </div>
  )
}

export default ViewReservationsPage