import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <h1 className="text-7xl my-5 text-white">Home Page</h1>
            <Link to='/login'>
            <button  className="btn btn-primary">Go To login Page</button>
            </Link>
        </div>
    );
};

export default Home;