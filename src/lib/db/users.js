import dbConnect from "@/config/mongodb";
import User from "@/models/User";

export const getSingleUser = async (credentials) => {
  try {
    await dbConnect();

    const { username, password } = credentials;
    const userDB = await User.findOne({ username: username });

    if (!userDB) {
      return null;
    }

    const matchPassword = await User.comparePassword(password, userDB.password);

    if (!matchPassword) {
      return null;
    }

    const { password: userPassword, ...rest } = userDB.toObject();
    return rest;
  } catch (error) {
    console.error(error);
    return null;
  }
};
