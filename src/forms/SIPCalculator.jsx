import { useState } from "react";

function SIPCalculator() {

  // Create state variables
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  //  Function to calculate SIP
  const calculateSIP = () => {

    const P = monthlyInvestment;              // Monthly amount
    const r = annualReturn / 100 / 12;       // Monthly interest rate
    const n = years * 12;                    // Total months

    // SIP Formula
    const futureValue =
      P * (((1 + r) ** n - 1) / r) * (1 + r);

    const investedAmount = P * n;
    const estimatedReturns = futureValue - investedAmount;

    return {
      futureValue,
      investedAmount,
      estimatedReturns
    };
  };

  const result = calculateSIP();

  return (
    <div style={styles.container}>
      <h2>SIP Calculator</h2>

      {/* Monthly Investment */}
      <div style={styles.box}>
        <label>
          Monthly Investment: ₹ {monthlyInvestment}
        </label>
        <input
          type="range"
          min="1000"
          max="50000"
          step="1000"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
        />
      </div>

      {/* Annual Return */}
      <div style={styles.box}>
        <label>
          Expected Return: {annualReturn} %
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(Number(e.target.value))}
        />
      </div>

      {/* Years */}
      <div style={styles.box}>
        <label>
          Time Period: {years} Years
        </label>
        <input
          type="range"
          min="1"
          max="30"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>

      {/* Results */}
      <div style={styles.result}>
        <p>Invested Amount: ₹ {result.investedAmount.toFixed(0)}</p>
        <p>Estimated Returns: ₹ {result.estimatedReturns.toFixed(0)}</p>
        <h3>Total Value: ₹ {result.futureValue.toFixed(0)}</h3>
      </div>

    </div>
  );
}

// Simple CSS styling
const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    background: "#fff"
  },
  box: {
    marginBottom: "20px"
  },
  result: {
    background: "#f2f2f2",
    padding: "15px",
    borderRadius: "8px"
  }
};

export default SIPCalculator;





// import { useState } from "react";

// function SIPCalculator() {
//   const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
//   const [annualReturn, setAnnualReturn] = useState(12);
//   const [years, setYears] = useState(10);

//   const calculateSIP = () => {
//     const P = monthlyInvestment;
//     const r = annualReturn / 100 / 12;
//     const n = years * 12;

//     const futureValue =
//       P * (((1 + r) ** n - 1) / r) * (1 + r);

//     const investedAmount = P * n;
//     const estimatedReturns = futureValue - investedAmount;

//     return {
//       futureValue: futureValue.toFixed(0),
//       investedAmount: investedAmount.toFixed(0),
//       estimatedReturns: estimatedReturns.toFixed(0),
//     };
//   };

//   const { futureValue, investedAmount, estimatedReturns } =
//     calculateSIP();

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         SIP Calculator
//       </h2>

//       {/* Monthly Investment */}
//       <div className="mb-6">
//         <label className="font-semibold">
//           Monthly Investment: ₹ {monthlyInvestment}
//         </label>
//         <input
//           type="range"
//           min="1000"
//           max="100000"
//           step="1000"
//           value={monthlyInvestment}
//           onChange={(e) =>
//             setMonthlyInvestment(Number(e.target.value))
//           }
//           className="w-full"
//         />
//       </div>

//       {/* Annual Return */}
//       <div className="mb-6">
//         <label className="font-semibold">
//           Expected Return: {annualReturn}%
//         </label>
//         <input
//           type="range"
//           min="1"
//           max="30"
//           step="1"
//           value={annualReturn}
//           onChange={(e) =>
//             setAnnualReturn(Number(e.target.value))
//           }
//           className="w-full"
//         />
//       </div>

//       {/* Time Period */}
//       <div className="mb-6">
//         <label className="font-semibold">
//           Time Period: {years} Years
//         </label>
//         <input
//           type="range"
//           min="1"
//           max="40"
//           step="1"
//           value={years}
//           onChange={(e) =>
//             setYears(Number(e.target.value))
//           }
//           className="w-full"
//         />
//       </div>

//       {/* Results */}
//       <div className="bg-gray-100 p-4 rounded-lg mt-6">
//         <p className="mb-2">
//           Invested Amount: ₹ {investedAmount}
//         </p>
//         <p className="mb-2 text-green-600">
//           Estimated Returns: ₹ {estimatedReturns}
//         </p>
//         <p className="text-lg font-bold text-blue-600">
//           Total Value: ₹ {futureValue}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SIPCalculator;