

exports.getUserDetails = async (req, res, next) => {
   /*  try {
        const { walletAddress } = req.query
        const user = await User.findOne({ walletAddress})
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: "User not found." })
        }
    } catch (err) {
        console.log("getUserDetails():", err)
        res.status(500).json({error: "Internal server error"})
    } */
}

exports.updateUserDetails = async (req, res, next) => {
  /*   try {
        const { user } = req.body
        const updatedUser = await User.updateOne(
            { walletAddress: user.walletAddress },
            { $set: {...user}}
        )
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log("updateUserDetails():", err)
        res.status(500).json({error: "Internal server error"})
    } */
}

