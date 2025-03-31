import '../styles/hobby1styles.css'

export function Table1(){
    return (

            <div>
                <table className="collapse">
                    <caption><b>My Top 3's Top 5:</b></caption>

                    <tr>
                        <th colSpan={3}>
                            My Top 5 Songs from my top 3 albums
                        </th>
                    </tr>
                    <tr>
                        <th><img src="/src/assets/images/RAM_Cover.png" alt="RAM" width="150" height="150"/> <br/>RAM - Daft Punk
                        </th>
                        <th><img src="/src/assets/images/flower_boy.png" alt="flowerboy" width="150" height="150"/> <br/>Flower
                            Boy -
                            <br/>Tyler, The Creator
                        </th>
                        <th><img src="/src/assets/images/blonde_cover.jpg" alt="blonde" width="150" height="150"/> <br/>Blonde
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
    )}