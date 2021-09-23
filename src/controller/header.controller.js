exports.GetHeader = (req, res) => {
  console.log("Header");
  res.status(200).json({
    name: "test 1",
  });
};
