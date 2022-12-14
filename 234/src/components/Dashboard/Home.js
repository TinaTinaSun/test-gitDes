import {signOutUser} from '../../firebase';


const Home=()=>{

    return (
        <div>
            <h1>You are logged in</h1>
            <button onClick={signOutUser}>Sign out</button>

        </div>
    );

}

export default Home;