const authService = require('../services/authService');

const register = async (request, h) => {
  const { username,email, password, role } = request.payload;
  if (!username ||!email || !password || !role) {
    throw new InputError('Missing required fields');
  }
  await authService.register(username,email , password, role);
  return h.response({ status: 'success', message: 'User registered successfully' }).code(201);
};

const loginUser = async (request, h) => {
  const { username, password } = request.payload;
  if (!username || !password) {
    throw new InputError('Missing required fields');
  }
  const token = await authService.loginUser(username, password);
  return h.response({ status: 'success', token }).code(200);
};

const loginAdmin = async (request, h) => {
  const { username, password } = request.payload;
  if (!username || !password) {
    throw new InputError('Missing required fields');
  }
  const token = await authService.loginAdmin(username, password);
  return h.response({ status: 'success', token }).code(200);
};


const logout = async (request, h) => {
  return h.response({
    status: "success",
    message: "Logout successfully",
  }).unstate("token").code(200);
};

const getUserInfo = async (request, h) => {
  const { username } = request.params;
  const userInfo = await authService.getUserInfo(username);
  return h.response({ status: 'success', data: userInfo }).code(200);
};

module.exports = { register, loginUser, loginAdmin, logout,getUserInfo };
