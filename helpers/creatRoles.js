import ROLES_LIST from '../config/roles_list.js';

const creatRoles = userRoles => {
  const allowedRolesArr = Object.entries(ROLES_LIST);
  // roles from frontend make arr from string
  const requestedRolesArr = Array.from(userRoles.split(','));

  // for each item from requestedRolesArr
  // if allowedRolesArr includes requested role from frontend return this role
  // take from this role name and code and push to new {}  accumulator
  const userRolesList = requestedRolesArr.reduce(function (
    accumulator,
    currenRole,
    index,
    array
  ) {
    const defaultRole = 'User';
    const defaultCode = ROLES_LIST[defaultRole];

    const userRoleName = currenRole || defaultRole;
    const existRole = allowedRolesArr.find(
      (allowedRoleItem = [defaultRole, defaultCode]) => {
        const [allowedRoleName, _] = allowedRoleItem;
        if (allowedRoleName === userRoleName) {
          return allowedRoleItem;
        }
      }
    );
    // console.log(' existRole : ', existRole);
    const [roleName, roleCode] = existRole;

    accumulator[roleName] = roleCode;

    return accumulator;
  },
  {});

  return userRolesList;
};

export default creatRoles;
