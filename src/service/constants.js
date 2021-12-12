let postSigninForm = "api/auth/login",
  postSignupForm = "api/auth/signup",
  postAnimalForm = "api/animal/create",
  getAnimals = "api/animal",
  editAnimal = "api/animal/update",
  deleteAnimal = "api/animal/delete",
  postAnimalHealth = "api/medical/create",
  deleteMedicalRecord = "api/medical/delete",
  getMedicalHistoryOfAnimal = "api/medical",
  editMedicalHistoryOfAnimal = "api/medical/update",
  getFeeds = "api/feed",
  addFeed = "api/feed/create",
  updateFeed = "api/feed/update",
  deleteFeed = "api/feed/delete",
  uploadBulkAnimal = "api/animal/bulk-create",
  chargeAmount = "api/stripe/charge",
  getProfileInfo = "api/user/me",
  updateProfile = "api/user/update",
  getCattleIdByEarTag = "api/animal/upload-eartag",
  postDailyFeed = "api/feed/daily-add",
  getDailyFeeds = "api/feed/daily",
  postDailyYield = "api/animal/daily-add",
  getDailyYields = "api/animal/daily-yield",
  getFarmerDashboardStatistics = "api/user/farmer/stats",
  getAllFarmers = "api/user/all",
  toggleFarmerBlocking = "api/user/block-unblock",
  deleteFarmer = "api/user/delete",
  getAdminDashboardStatistics = "api/user/admin/stats",
  addExpenses = "api/expense/add",
  getExpenses = "api/expense",
  getEconomy = "api/expense/economy",
  forgotPassword = "api/auth/forget-password",
  resetPassword = "";

export {
  postSigninForm,
  postSignupForm,
  postAnimalForm,
  getAnimals,
  editAnimal,
  deleteAnimal,
  postAnimalHealth,
  deleteMedicalRecord,
  getMedicalHistoryOfAnimal,
  editMedicalHistoryOfAnimal,
  addFeed,
  getFeeds,
  updateFeed,
  deleteFeed,
  uploadBulkAnimal,
  chargeAmount,
  getProfileInfo,
  updateProfile,
  getCattleIdByEarTag,
  postDailyFeed,
  getDailyFeeds,
  postDailyYield,
  getDailyYields,
  getFarmerDashboardStatistics,
  getAllFarmers,
  toggleFarmerBlocking,
  deleteFarmer,
  getAdminDashboardStatistics,
  addExpenses,
  getExpenses,
  getEconomy,
  forgotPassword,
  resetPassword,
};
