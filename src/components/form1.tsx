

export function Form1(){
    return (


            <div>
                <form>
                    <table id="form-table">
                        <tr>
                            <th colSpan={3}>
                                <h2>Song Recommendations</h2>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Enter Your Name:</label>
                                <input type="text" id="name" className="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="songname">Enter Song Name:</label>
                                <input type="text" id="songname" className="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="artistname">Enter Artist Name:</label>
                                <input type="text" id="artistname" className="text"/>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3} style={{ textAlign: "left" }}>
                                Genre:
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="HipHop" className="checkbox"/>
                                <label htmlFor="HipHop">Hip-Hop/Rap</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="RB" className="checkbox"/>
                                <label htmlFor="RB">R&B</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="Electronic" className="checkbox"/>
                                <label htmlFor="Electronic">Electronic</label>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="Rock" className="checkbox"/>
                                <label htmlFor="Rock">Rock</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" id="Jazz" className="checkbox"/>
                                <label htmlFor="Jazz">Jazz</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="Rating">
                                    Personal Rating:
                                </label>
                                <select name="Rating" id="Rating">
                                    <option value="none" selected disabled hidden>Select An Option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="comments">Why do you recommend this song?:</label>
                                <br/>
                                <textarea id="comments" cols={40} rows={3}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={3} style={{ textAlign: "left" }}>
                                Song Mood:
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="relaxed">
                                    <input type="radio" id="relaxed" name="mood"/> Chill/Relaxed
                                </label>
                                <label htmlFor="Upbeat">
                                    <input type="radio" id="Upbeat" name="mood"/> Up Beat/Energetic
                                </label>
                                <label htmlFor="Deep">
                                    <input type="radio" id="Deep" name="mood"/> Emotional/Deep
                                </label>
                                <br/>
                                <label htmlFor="Party">
                                    <input type="radio" id="Party" name="mood"/> Party/High Energy
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type={"submit"}>Submit</button>
                                <button type={"reset"}>Clear Form</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
    )}