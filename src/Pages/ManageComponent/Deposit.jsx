import React from "react";

const Deposit = () => {
  return (
    <div className="p-5">
      <form className="">
          <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
        <label for="html">NEFT/RTGS</label>
          <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
        <label for="css">Net Banking</label> {" "}
      </form>
      <p className="py-2">
        Please add any of the following as a beneficiary in your account
      </p>
      <div className="border rounded-md border-grayccc my-3  p-3 py-2">
        <h3 className="pb-3">Primary Account</h3>
        <table>
          <tr>
            <td>
              Beneficiary Name</td>
            <td className="pl-5">Nagendra</td>
          </tr>
          <tr>
            <td>Bank Name</td>
            <td className="pl-5">ICICI Bank LTD</td>
          </tr>
          <tr>
            <td>Branch</td>
            <td className="pl-5">	HYD</td>
          </tr>
          <tr>
            <td>Bank A/C Number	</td>
            <td className="pl-5">192739870320</td>
          </tr>
          <tr>
            <td>IFSC Code	</td>
            <td className="pl-5">ICICI87229</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Deposit;
