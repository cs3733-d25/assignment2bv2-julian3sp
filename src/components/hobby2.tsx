import '../styles/hobby2styles.css'
import {Form2} from "./form2.tsx";
import {Table2} from "./table2.tsx";
import {List2} from "./list2.tsx";

export function Hobby2() {
    return(
        <div className={"hobby2"}>
            <div id="title">
                <h1>Brendon Peters' Favorite Hobby:</h1>
                <h1>Weight Lifting</h1>
                <img src="/src/assets/images/weightlifting.jpeg" width="500" alt="WeightLifting Photo "/>
            </div>
            <div>
                <List2/>
            </div>
            <div>
                <Table2/>
            </div>
            <div>
                <Form2/>
            </div>
            <br/> <br/>
        </div>
    );
}