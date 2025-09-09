

export default function MainInputs({handleInputs, valueInput}){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment:</label>
                    <input type="number"
                        required
                        value={valueInput.initialInvestment}
                        onChange={(event) => handleInputs('initialInvestment', event.target.value)} 
                    />
                </p>
                <p>
                    <label>Annual Investment:</label>
                    <input type="number"
                        required
                        value={valueInput.annualInvestment}
                        onChange={(event) => handleInputs('annualInvestment', event.target.value)} 
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return:</label>
                    <input type="number"
                        required
                        value={valueInput.expectedReturn}
                        onChange={(event) => handleInputs('expectedReturn', event.target.value)} 
                    />
                </p>
                <p>
                    <label>Duration:</label>
                    <input type="number"
                        required
                        value={valueInput.duration}
                        onChange={(event) => handleInputs('duration', event.target.value)} 
                    />
                </p>
            </div>  
        </section>
    );
}