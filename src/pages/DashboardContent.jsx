import { PiBookOpenUserLight } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import Card from "../components/common/Card.jsx";
import CardStuTech from "../components/common/CardStuTech.jsx";
import Style from "../Styles/AdminDashboard.module.css";
// This is DashbordContent

const DashboardContent = () => {
  return (
  <>
    <div className={`${Style.adminDashboard} w-4/5 grid grid-cols-4 gap-x-4`}>
      
      <CardStuTech
        title="Students"
        presentvalue="124523"
        totalvalue="1098428"
        value="3256"
        // color="#FF5733"

        icon={<FaUsers />}
      />
      <CardStuTech
        title="Employees"
        presentvalue="68089"
        totalvalue="40932"
       
        icon={<FiUsers />}
      />
      <Card
        title="Courses"
        value="16"
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Fees"
        value="3,47,000"
        icon={<MdOutlinePayment />}
      />
      <Card
        title="Students"
        value="3256"
       
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Employees"
        value="68"
       
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Courses"
        value="16"
  
        icon={<PiBookOpenUserLight />}
      />
      <Card
        title="Revenue"
        value="3,47,000"

        icon={<PiBookOpenUserLight />}
      />
      {/* you can add more cardss here just add on */}
    </div></>
  );
};

export default DashboardContent;
