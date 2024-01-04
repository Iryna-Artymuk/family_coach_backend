const getCurrentUser = (req, res) => {
  const { user } = req;

  res.json({
    id: user._id,
    name: user.name,
    avatar: user.avatar,
    email: user.email,
  });
};

export default getCurrentUser;
