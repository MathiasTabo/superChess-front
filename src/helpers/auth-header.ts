function authHeader() {
  const user = localStorage.getItem('user');

  if (user) {
    const token = JSON.parse(user);
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  }
  return {};
}

export default authHeader;
