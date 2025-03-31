

export function Form2(){
    return(
        <div className={"form2"}>
            <h2 id="split picker">Split Picker</h2>
            <form id="split form">
                <label htmlFor="firstname">Enter your first name:</label>
                <input type="text" id="firstname"/>
                <br/>
                <label htmlFor="lastname">Enter your last name:</label>
                <input type="text" id="lastname"/>
                <br/> <br/>

                What are your goals? <br/>
                <input type="checkbox" id="muscle"/>
                <label htmlFor="muscle">Muscle Gain</label>
                <br/>
                <input type="checkbox" id="weight"/>
                <label htmlFor="weight">Weight Loss</label>
                <br/>
                <input type="checkbox" id="athlete"/>
                <label htmlFor="athlete">Athletic Gains</label>
                <br/> <br/>

                How often can you make it to the gym? <br/>
                <input type="radio" id="3-" name="frequency"/>
                <label htmlFor="3-">3 or less times a week</label><br/>
                <input type="radio" id="4-5" name="frequency"/>
                <label htmlFor="4-5">4-5 times a week</label><br/>
                <input type="radio" id="6" name="frequency"/>
                <label htmlFor="6">6 or more times a week</label><br/>
                <br/>
                <label htmlFor="experience">How experienced are you?</label><br/>
                <select id="experience" name="dropdown">
                    <option id="beginner">Beginner</option>
                    <option id="moderate">Moderate</option>
                    <option value="expert">Expert</option>
                </select>
                <p><a href="../styles/hobby2styles.css" style={{color: "white"}}>Styles</a></p>

                <label htmlFor="comments">Comments:</label>
                <br/>
                <textarea rows={2} cols={40} id="comments"></textarea><br/>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    )
}