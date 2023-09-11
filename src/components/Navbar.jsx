import Profile from "../assets/images/profile.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between container mx-auto py-6 border-b-2">
      <div>
        <h3 className="text-4xl font-bold  text-center">Knowledge Cafe</h3>
      </div>

      <div>
        <img src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
