import { calculateInvestmentResults, formatter } from "../util/investment.js";


export default function Results({ valueInput }) {
    const annualData = calculateInvestmentResults(valueInput);
    const initialInvestment = annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
    return (
    
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((row,rowIndex) => {
                     const totalInterest =
                                    row.valueEndOfYear -
                                    row.annualInvestment * row.year -
                                    initialInvestment;
                         const totalAmountInvested = row.valueEndOfYear - totalInterest;

                    return(<tr key={rowIndex}>
                        <th>{row.year}</th>
                        <th>{formatter.format(row.valueEndOfYear)}</th>
                        <th>{formatter.format(row.interest)}</th>
                        <th>{formatter.format(totalInterest)}</th>
                        <th>{formatter.format(totalAmountInvested)}</th>
                    </tr>
                    );
                })}
            </tbody>
        </table>

    );
}