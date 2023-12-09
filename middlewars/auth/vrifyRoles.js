const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    console.log('req: ', req.user.roles);

    if (!req.user.roles) {
      return res.sentStatus(401);
    }

    const arraAllowedRoles = [...allowedRoles];
    const currentUserRoles = Object.values(req.user.roles);
    console.log('allowed roles', arraAllowedRoles); //  general allowed roles in app
    console.log('currentUserRoles', currentUserRoles); // roles wich user login

    const result = currentUserRoles
      .map(role => arraAllowedRoles.includes(role))
      .find(value => value === true);

    if (!result) {
      return res.status(401).json({
        message: 'Forbidden dont have permition for this ection ',
      });
    }

    next();
  };
};

export default verifyRoles;
