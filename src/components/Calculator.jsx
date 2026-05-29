import { useState } from "react";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const monthlyBill = Number(bill);
    if (!monthlyBill || monthlyBill <= 0) return;
    // Andhra Pradesh average domestic tariff estimate
    const estimatedUnits = Math.round(monthlyBill / 7.5);
    // Solar generation assumption 1 kW generates ~125 units/month
    const systemSize = Math.ceil(estimatedUnits / 125);
    // PM Surya Ghar Subsidy
    let subsidy = 0;
    if (systemSize === 1) {
      subsidy = 30000;
    } else if (systemSize === 2) {
      subsidy = 60000;
    } else {
      subsidy = 78000;
    }
    // Market installation cost estimate
    const grossCost = systemSize * 70000;
    const netCost = grossCost - subsidy;
    // Savings estimate
    const monthlySavings = Math.round(monthlyBill * 0.85);
    const yearlySavings = monthlySavings * 12;
    const paybackYears = (netCost / yearlySavings).toFixed(1);
    setResult({
      estimatedUnits,
      systemSize,
      subsidy,
      grossCost,
      netCost,
      monthlySavings,
      yearlySavings,
      paybackYears,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto sm:px-6">
        {" "}
        <div className="bg-[#F8F4ED] rounded-[40px] p-4 sm:p-8 lg:p-16">
          {" "}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {" "}
            {/* Left Content */}{" "}
            <div>
              {" "}
              <span className="text-[#F5B700] font-semibold uppercase">
                {" "}
                Solar Savings Calculator{" "}
              </span>{" "}
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
                {" "}
                Estimate Your Solar Benefits{" "}
              </h2>{" "}
              <p className="text-neutral-600 text-lg">
                {" "}
                Enter your monthly electricity bill and discover the ideal solar
                system size, government subsidy, and expected savings.{" "}
              </p>{" "}
            </div>{" "}
            {/* Calculator */}{" "}
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm">
              {" "}
              <label className="block font-medium mb-3">
                {" "}
                Monthly Electricity Bill (₹){" "}
              </label>{" "}
              <input
                type="number"
                placeholder="3000"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className=" w-full border border-neutral-200 rounded-2xl px-5 py-4 mb-6 outline-none "
              />{" "}
              <button
                onClick={calculate}
                className=" w-full bg-[#F5B700] hover:bg-[#e0a600] py-4 rounded-2xl font-semibold transition "
              >
                {" "}
                Calculate Savings{" "}
              </button>{" "}
              {result && (
                <div className="mt-8 ">
                  {" "}
                  <h3 className="font-bold text-xl mb-6">
                    {" "}
                    Estimated Results{" "}
                  </h3>{" "}
                  <div className="space-y-4">
                    {" "}
                    <ResultRow
                      label="Estimated Units / Month"
                      value={`${result.estimatedUnits} Units`}
                    />{" "}
                    <ResultRow
                      label="Recommended System"
                      value={`${result.systemSize} kW`}
                    />{" "}
                    <ResultRow
                      label="Government Subsidy"
                      value={`₹${result.subsidy.toLocaleString()}`}
                    />{" "}
                    <ResultRow
                      label="Installation Cost"
                      value={`₹${result.grossCost.toLocaleString()}`}
                    />{" "}
                    <ResultRow
                      label="Cost After Subsidy"
                      value={`₹${result.netCost.toLocaleString()}`}
                    />{" "}
                    <ResultRow
                      label="Monthly Savings"
                      value={`₹${result.monthlySavings.toLocaleString()}`}
                    />{" "}
                    <ResultRow
                      label="Yearly Savings"
                      value={`₹${result.yearlySavings.toLocaleString()}`}
                    />{" "}
                    <ResultRow
                      label="Payback Period"
                      value={`${result.paybackYears} Years`}
                    />{" "}
                  </div>{" "}
                </div>
              )}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function ResultRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
      {" "}
      <span className="text-neutral-600"> {label} </span>{" "}
      <span className="font-semibold"> {value} </span>{" "}
    </div>
  );
}

// import { useState } from "react";

// export default function Calculator() {
//   const [bill, setBill] = useState("");
//   const [result, setResult] = useState(null);

//   const calculate = () => {
//     if (!bill || bill <= 0) return;

//     const systemSize = (bill / 1200).toFixed(1);

//     const monthlySavings = Math.round(bill * 0.8);

//     const yearlySavings = monthlySavings * 12;

//     const subsidy = systemSize <= 3 ? Math.round(systemSize * 30000) : 78000;

//     const paybackYears = (
//       (systemSize * 55000 - subsidy) /
//       yearlySavings
//     ).toFixed(1);

//     setResult({
//       systemSize,
//       monthlySavings,
//       yearlySavings,
//       subsidy,
//       paybackYears,
//     });
//   };

//   return (
//     <section id="calculator" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-[#F8F4ED] rounded-[40px] p-6 sm:p-10 lg:p-16">
//           <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
//             <div>
//               <span className="text-[#F5B700] font-semibold uppercase">
//                 Solar Calculator
//               </span>

//               <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
//                 Estimate Your Savings
//               </h2>

//               <p className="text-neutral-600 text-lg">
//                 Enter your monthly electricity bill and see how much you can
//                 save with rooftop solar.
//               </p>
//             </div>

//             <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
//               <label className="block mb-3 font-medium">
//                 Monthly Electricity Bill
//               </label>

//               <input
//                 type="number"
//                 placeholder="₹ 3000"
//                 value={bill}
//                 onChange={(e) => setBill(e.target.value)}
//                 className="w-full border rounded-2xl px-5 py-4 mb-6"
//               />

//               <button
//                 onClick={calculate}
//                 className="w-full bg-[#F5B700] hover:bg-[#e0a600] py-4 rounded-2xl font-semibold transition"
//               >
//                 Calculate Savings
//               </button>

//               {result && (
//                 <div className="mt-8 space-y-4">
//                   <div className="flex justify-between">
//                     <span>Recommended System</span>
//                     <span className="font-semibold">{result.systemSize} kW</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span>Monthly Savings</span>
//                     <span className="font-semibold">₹{result.monthlySavings}</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span>Yearly Savings</span>
//                     <span className="font-semibold">₹{result.yearlySavings}</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span>Estimated Subsidy</span>
//                     <span className="font-semibold">₹{result.subsidy}</span>
//                   </div>

//                   <div className="flex justify-between">
//                     <span>Payback Period</span>
//                     <span className="font-semibold">{result.paybackYears} Years</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
