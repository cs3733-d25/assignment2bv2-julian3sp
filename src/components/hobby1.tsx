import


export function JuliansHobby(){
 return (

         <div className="flex-container">
             <div id="song-list">
                 <h2>Favorite songs at the moment:</h2>
                 <ul>
                     <li style={{color: "green"}}>Fragments of Time - Daft Punk (Top Choice)</li>
                     <li>It Ain't Over 'Til It's Over - Lenny Kravitz</li>
                     <li>Bad Religion - Frank Ocean</li>
                     <li>Love Me Not - Ravyn Lenae</li>
                     <li>DtMF - Bad Bunny</li>
                     <li>Instant Crush - Daft Punk</li>
                     <li>The Girl is Mine - Michael Jackson</li>
                     <li>Rosie - John Mayer</li>
                     <li>Beautiful - Snoop Dogg</li>
                     <li>Another One - Mac DeMarco</li>

                 </ul>
             </div>

             <div>
                 <table className="collapse">
                     <caption><b>My Top 3's Top 5:</b></caption>

                     <tr>
                         <th colSpan={3}>
                             My Top 5 Songs from my top 3 albums
                         </th>
                     </tr>
                     <tr>
                         <th><img src="/Public/RAM_Cover.png" alt="RAM" width="150" height="150"/> <br/>RAM - Daft Punk
                         </th>
                         <th><img src="/Public/flower_boy.png" alt="flowerboy" width="150" height="150"/> <br/>Flower
                             Boy -
                             <br/>Tyler, The Creator
                         </th>
                         <th><img src="/Public/blonde_cover.jpg" alt="blonde" width="150" height="150"/> <br/>Blonde
                             -<br/>Frank
                             Ocean
                         </th>
                     </tr>
                     <tr>
                         <td>1. Fragments of Time</td>
                         <td>1. Boredom</td>
                         <td>1. Self Control</td>
                     </tr>
                     <tr>
                         <td>2. Get Lucky</td>
                         <td>2. Garden Shed</td>
                         <td>2. White Ferrari</td>
                     </tr>
                     <tr>
                         <td>3. Instant Crush</td>
                         <td>3. See You Again</td>
                         <td>3. Pink + White</td>
                     </tr>
                     <tr>
                         <td>4. Veridis Quo</td>
                         <td>4. 911</td>
                         <td>4. Skyline To</td>
                     </tr>
                     <tr>
                         <td>5. Voyager</td>
                         <td>5. See You Again</td>
                         <td>5. Nikes</td>
                     </tr>
                 </table>
             </div>

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
         </div>

 )
}