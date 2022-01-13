export default (state, action) => {
  switch (action.type) {
    case "HAREKETİ_SİL":
      return {
        ...state,
        hareketler: state.hareketler.filter(
          (hareket) => hareket.id !== action.payload
        ),
      };
    case "HAREKET_EKLE":
      return {
        ...state,
        hareketler: [action.payload, ...state.hareketler],
      };
    default:
      return state;
  }
};
