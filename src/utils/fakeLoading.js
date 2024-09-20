export const fakeLoading = (loading) => {
  loading(true);
  setTimeout(() => {
    loading(false);
  }, 1000);
};
