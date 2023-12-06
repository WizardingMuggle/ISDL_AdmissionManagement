import React from "react";
import FeeStructure from "../Components/chirag/FeeStructure";
import Footer from "../Components/chirag/Footer";
import GoToTop from "../Components/chirag/GoToTop";
import ProgOffMtech from "../Components/chirag/ProgOffMtech";
import Temp from "../Components/chirag/Temp";
import InstituteGlance from "../Components/Arpit/InstituteGlance";
import fee_note from "../Components/Arpit/MTechLists/FeeNote";
import finNsup from "../Components/Arpit/MTechLists/FinanceSupp";
import ins2apply from "../Components/Arpit/MTechLists/InsToApply";
import elecrit from "../Components/Arpit/Tables/PgTables/EligibilityCriteria";
import impd from "../Components/Arpit/Tables/PgTables/ImpDates";
import "../Components/chirag/Mtech.css";
import CommonBanner from "../Components/chirag/CommonBanner";

const MTech = () => {
  return (
    <div>
      <CommonBanner />
      <ProgOffMtech />
      <Temp x={"Important Dates"} arr={impd} dataArray={null} color={"white"} />
      <div className="sub-main">
        <div className="sub-container">
          <h4 className="sub-h4">Written exam details:</h4>
          <p>
            <strong>Mode:</strong> Online
          </p>
          <p>
            <strong>Type of qsns:</strong> MCQ
          </p>
          <p>
            <strong>Syllabus:</strong> GATE
          </p>
          <p>
            <strong>Duration:</strong> 1 hour (time will be notified by email)
          </p>
          <h4 className="sub-h4">Note:</h4>
          <p>
            The Institute reserves the right to reflect any changes with respect
            to the admission to a programme, number of rounds of seat
            allocations, respective deadlines, and also any changes as may be
            necessary in view of statutory requirements/ notifications from
            time-to-time.
          </p>
        </div>
      </div>
      <Temp
        x={"Eligibility Criteria"}
        arr={elecrit}
        dataArray={null}
        color={"#f2f2f2"}
      />
      <Temp x={null} arr={null} dataArray={ins2apply} color={"white"} />
      <FeeStructure
        fee_title={"Fee Structure for M.Tech. & M.S. (by Research) in INR"}
        fee_arr={["10,000", "3,000", "96,660"]}
        mess_arr={["25,000", "6,600", "500", "1,500", "17,000"]}
        bulletarr={fee_note}
        colr={"#f2f2f2"}
      />
      <Temp x={null} arr={null} dataArray={finNsup} color={"white"} />
      <InstituteGlance />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default MTech;
