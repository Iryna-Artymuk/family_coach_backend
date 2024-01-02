const getCurrentUser = (req, res) => {
  const { user } = req;

  res.json({
    name: user.name,
    avatart: user.avatarURL,
    email: user.email,
  });
};

export default getCurrentUser;
