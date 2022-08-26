import { memo } from "react";

const CompanyList = () => {
  return (
    <ul className="CompanyList dropdown">
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  );
};

export default memo(CompanyList);
