import avatar from "../assests/avatar.jpeg";
const Body = () => {
    return (
        <div className="p-36 border border-black flex justify-center min-h-[88vh]">
            <div>
                <p className="px-10 py-5 mx-10 border mt-10">
                    Hi, I my name is Harsh Soni.
                    <br /> I build things for the web.
                </p>
                <p className="px-10 py-5 mx-10 border ">
                    I am a Software Engineer specializing in Frontend <br /> and
                    sometimes backend😛. Currently working as
                    <br /> Specialist Programmer at Infosys!
                </p>
            </div>
            <img
                src={avatar}
                className="h-80 rounded-3xl  border border-black "
                alt="profile-pic"
            />
        </div>
    );
};
export default Body;
