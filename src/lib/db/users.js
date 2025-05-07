import dbConnect from "@/config/mongodb";
import User from "@/models/User";

export const getSingleUser = async (user) => {
  try {
    const { username, password } = user;
    await dbConnect();
    const userDB = await User.findOne({ username: username });
    if (!userDB) {
      return null;
    }

    console.log(userDB);

    // const matchPassword = await User.comparePassword(userDB.password, password);
    // console.log(matchPassword);

    return userDB;
  } catch (error) {
    console.log(error);
    return null;
  }
};
