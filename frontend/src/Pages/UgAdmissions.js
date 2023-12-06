import React from 'react';
import Footer from '../Components/chirag/Footer';
import InstituteGlance from '../Components/Arpit/InstituteGlance';
import UgProgrammes from '../Components/UG/UgProgrammes';
import UgHighlight from '../Components/UG/UgHighlight';
import UgModes from '../Components/UG/UgModes';
import UgHead from '../Components/UG/UgHead';
import UgScholarship from '../Components/UG/UgScholarship';
import GoToTop from '../Components/chirag/GoToTop';

const UgAdmissions = () => {
  return (
    <div>
      <UgModes />
      <UgHead />
      <UgProgrammes />
      <UgHighlight />
      <InstituteGlance />
      <UgScholarship />
      <Footer />
      <GoToTop />
    </div>
  )
}

export default UgAdmissions;
