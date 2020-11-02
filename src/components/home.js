import React, {useState} from 'react';
import {connect} from 'react-redux';
import {registerUser} from "../redux/actions/registerActions";

function Home({registerUser}) {
    const [details, setDetails] = useState({
        email: '',
        fullName: '',
        social: '',
        interest: [],
        profession: [],
    })

    const updateDetails = (e) => {
        const {name, value} = e.target;
        const interestChecked = document.querySelectorAll('.interest:checked');
        const professionChecked = document.querySelectorAll('.profession:checked');

        const interestArr = [];
        const professionArr = [];

        interestChecked.forEach(checked => interestArr.push(checked.value));
        professionChecked.forEach(checked => professionArr.push(checked.value));

        setDetails({
            ...details,
            [name]: value, interest: interestArr, profession: professionArr
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        registerUser(details);
    }




    return (
        <form onSubmit={handleSubmit}>
            <h1>Hackathon - 4th IR</h1>
            <label>
                Email
                <input name="email" type="email" onChange={updateDetails}/>
            </label>
            <label>
                Fullname
                <input name="fullName" type="text" onChange={updateDetails}/>
            </label>
            <label>
                Social/professional link
                <input name="social" type="text" onChange={updateDetails}/>
            </label>
            <label>
                What are your fields of interest?
            </label>
            <label className="checks">
                <input type="checkbox" name="interest"  className="interest" value="python" onChange={updateDetails}/>
                Python</label> <br/>
            <label className="checks">
                <input type="checkbox" name="interest" className="interest" value="blockchain" onChange={updateDetails}/>
                Blockchain</label> <br/>
            <label className="checks">
                <input type="checkbox" name="interest" className="interest" value="datascience" onChange={updateDetails}/>
                Data science</label> <br/>
            <label className="checks">
                <input type="checkbox" name="interest" className="interest" value="fullstack" onChange={updateDetails}/>
                Full stack development</label>
            <label>
                Which one best describes you?
            </label>
            <label className="checks">
                <input type="checkbox" name="profession" className="profession" value='student' onChange={updateDetails}/>
                Student</label> <br/>
            <label className="checks">
                <input type="checkbox" name="profession" className="profession" value='professional' onChange={updateDetails}/>
                Professional</label> <br/>
            <label className="checks">
                <input type="checkbox" name="profession" className="profession" value='entrepreneur' onChange={updateDetails}/>
                Entrepreneur</label>
            <button>Submit</button>
        </form>
    )
}

const mapDispatchToProp = (dispatch) => {
    return {
        registerUser: (details) => dispatch(registerUser(details))
    }
}

//mapStateToProps has to always be the first; so use null
export default connect(null, mapDispatchToProp)(Home);


