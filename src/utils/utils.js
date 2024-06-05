export const getGradientColor = (status) => {
  const gradient =
    status === "Join Cluster" ||
    status === "Stake Cluster" ||
    status === "Stake Impulse"
      ? "linear-gradient(to right, #BC40E8, #359cdb)"
      : status === "Unstake Cluster" || status === "Leave Cluster"
      ? "linear-gradient(to right,#ff5570, #ff23b1)"
      : status === "Claim Rewards"
      ? "linear-gradient(to right,#28d2c9, #10ed96)"
      : "";
  return gradient;
};

export const getImgStyles = (name) => {
  if (name === "WMATIC / WTH") {
    return {
      minWidth: "32px",
      position: "relative",
      right: "6px",
    };
  }
  return {
    minWidth: "20px",
    position: "static",
    right: "0",
  };
};
